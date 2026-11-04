/**
 * Sends the launch email to the waitlist, once, the day Near is on the App Store.
 *
 * Called hourly by pg_cron (migration `waitlist_launch` in the app repo) while someone on the list
 * hasn't had it. Each run asks Apple's public lookup whether the app is live; until it is, nothing
 * is sent. Then it mails the rows with `launch_mailed_at` still null, at most `BATCH` per run (Resend's
 * free tier allows 100 a day), stamping each row as it goes so no one gets it twice.
 *
 * `{"test": "<address>", "locale": "pt"}` sends one copy to that address and touches nothing, live or not.
 * Auth: the waitlist's shared bearer token (`WAITLIST_WEBHOOK_SECRET`); `verify_jwt` is off in config.toml.
 */

import { renderHtml } from "../waitlist-welcome/render.ts";
import { unsubscribeUrl } from "../_shared/waitlist-token.ts";
import { APP_STORE_URL, launchEmailFor } from "./emails.ts";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const LOOKUP = "https://itunes.apple.com/lookup?id=6815301550&country=";
const FROM = Deno.env.get("WAITLIST_FROM") ?? '"Gabriel (Near App)" <hello@nearapp.social>';
const UNSUBSCRIBE_BASE = Deno.env.get("WAITLIST_UNSUBSCRIBE_URL") ??
  "https://mrejurldemanuvbrfutf.supabase.co/functions/v1/waitlist-unsubscribe";
const REPLY_TO = Deno.env.get("WAITLIST_REPLY_TO") ?? "hello@nearapp.social";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const WEBHOOK_SECRET = Deno.env.get("WAITLIST_WEBHOOK_SECRET");
const BATCH = 90;

/** Live in the Brazilian or the US store (most of the list is in Brazil). */
async function isLive(): Promise<boolean> {
  for (const country of ["br", "us"]) {
    try {
      const res = await fetch(LOOKUP + country);
      if (res.ok && ((await res.json()).resultCount ?? 0) > 0) return true;
    } catch {
      // Try the next store; a failed lookup counts as not live.
    }
  }
  return false;
}

async function send(address: string, locale: string | null): Promise<boolean> {
  const email = launchEmailFor(locale);
  const unsubscribe = await unsubscribeUrl(UNSUBSCRIBE_BASE, WEBHOOK_SECRET!, address, locale ?? "en");
  // The link is a real link in the HTML, the bare URL in the text version.
  const html = renderHtml(email, unsubscribe).replace(
    APP_STORE_URL,
    `<a href="${APP_STORE_URL}" style="color:#111111;font-weight:600">${APP_STORE_URL.replace("https://", "")}</a>`,
  );
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [address],
      reply_to: REPLY_TO,
      subject: email.subject,
      html,
      text: `${email.body}\n\n${email.unsubscribe}: ${unsubscribe}`,
      headers: { "List-Unsubscribe": `<${unsubscribe}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
    }),
  });
  if (!res.ok) console.error("resend rejected the send", res.status, await res.text());
  return res.ok;
}

/** PostgREST with the service role (the waitlist has no read policy); a body makes it a PATCH. */
function rest(path: string, patch?: Record<string, unknown>): Promise<Response> {
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  return fetch(`${Deno.env.get("SUPABASE_URL")}/rest/v1/${path}`, {
    method: patch ? "PATCH" : "GET",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: patch ? JSON.stringify(patch) : undefined,
  });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  if (!RESEND_API_KEY || !WEBHOOK_SECRET) {
    console.error("missing RESEND_API_KEY or WAITLIST_WEBHOOK_SECRET");
    return new Response("Not configured", { status: 500 });
  }
  if (req.headers.get("authorization") !== `Bearer ${WEBHOOK_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const json = (value: unknown) => new Response(JSON.stringify(value), { headers: { "Content-Type": "application/json" } });

  if (typeof body.test === "string") {
    return json({ test: true, sent: await send(body.test, body.locale ?? "en") });
  }
  if (!(await isLive())) return json({ live: false, sent: 0 });

  const res = await rest(`waitlist?select=id,email,locale&launch_mailed_at=is.null&order=created_at&limit=${BATCH}`);
  if (!res.ok) {
    console.error("waitlist read failed", res.status, await res.text());
    return new Response("Read failed", { status: 500 });
  }
  const rows: { id: string; email: string; locale: string | null }[] = await res.json();
  let sent = 0;
  for (const row of rows) {
    if (!(await send(row.email, row.locale))) continue;
    await rest(`waitlist?id=eq.${row.id}`, { launch_mailed_at: new Date().toISOString() });
    sent += 1;
    // Resend allows 2 requests a second.
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
  return json({ live: true, sent, left: (rows.length) - sent });
});

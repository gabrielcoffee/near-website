/**
 * Mails the news list (the footer's "What's new in Near") every time a new version is on the App Store.
 *
 * Called hourly by pg_cron (migration `mailing_lists` in the app repo). Each run asks Apple's public lookup
 * for the live version. The first time a version shows up it is recorded in `app_releases` (`seen_at`);
 * from then on every `news` row that signed up before `seen_at` and hasn't had that version gets one mail,
 * at most `BATCH` per run (Resend's free tier allows 100 a day), and is stamped `news_version` as it goes.
 * The "what's new" lines are the App Store release notes from the reader's own storefront.
 *
 * `{"test": "<address>", "locale": "pt"}` sends one copy about the live version and touches nothing.
 * Auth: the waitlist's shared bearer token (`WAITLIST_WEBHOOK_SECRET`); `verify_jwt` is off in config.toml.
 */

import { renderHtml } from "../waitlist-welcome/render.ts";
import { unsubscribeUrl } from "../_shared/waitlist-token.ts";
import { APP_STORE_URL, newsEmailFor, STOREFRONT } from "./emails.ts";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const LOOKUP = "https://itunes.apple.com/lookup?id=6815301550&country=";
const FROM = Deno.env.get("WAITLIST_FROM") ?? '"Gabriel (Near App)" <hello@nearapp.social>';
const UNSUBSCRIBE_BASE = Deno.env.get("WAITLIST_UNSUBSCRIBE_URL") ??
  "https://mrejurldemanuvbrfutf.supabase.co/functions/v1/waitlist-unsubscribe";
const REPLY_TO = Deno.env.get("WAITLIST_REPLY_TO") ?? "hello@nearapp.social";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const WEBHOOK_SECRET = Deno.env.get("WAITLIST_WEBHOOK_SECRET");
const BATCH = 90;

interface Listing {
  version: string;
  notes: string;
}

/** The live listing in one storefront, or null when it isn't there or the lookup fails. */
async function listing(country: string): Promise<Listing | null> {
  try {
    const res = await fetch(LOOKUP + country, { headers: { "Cache-Control": "no-cache" } });
    if (!res.ok) return null;
    const app = (await res.json()).results?.[0];
    if (!app?.version) return null;
    return { version: String(app.version), notes: String(app.releaseNotes ?? "") };
  } catch {
    return null;
  }
}

/** Notes per reader language, from each storefront; a store still on an older version falls back to the US notes. */
async function notesByLocale(us: Listing): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  await Promise.all(
    Object.entries(STOREFRONT).map(async ([locale, country]) => {
      const there = country === "us" ? us : await listing(country);
      out[locale] = there && there.version === us.version ? there.notes : us.notes;
    }),
  );
  return out;
}

async function send(address: string, locale: string | null, version: string, notes: string): Promise<number> {
  const email = newsEmailFor(locale, version, notes);
  const unsubscribe = await unsubscribeUrl(UNSUBSCRIBE_BASE, WEBHOOK_SECRET!, address, locale ?? "en", "news");
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
  return res.status;
}

/** PostgREST with the service role (neither table has a read policy). */
function rest(path: string, init: { method?: string; body?: unknown; prefer?: string } = {}): Promise<Response> {
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  return fetch(`${Deno.env.get("SUPABASE_URL")}/rest/v1/${path}`, {
    method: init.method ?? "GET",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(init.prefer ? { Prefer: init.prefer } : {}),
    },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
  });
}

/** When this version was first seen, recording it now if it is new. */
async function seenAt(version: string): Promise<string | null> {
  await rest("app_releases", { method: "POST", body: { version }, prefer: "resolution=ignore-duplicates,return=minimal" });
  const res = await rest(`app_releases?select=seen_at&version=eq.${encodeURIComponent(version)}`);
  if (!res.ok) return null;
  return (await res.json())[0]?.seen_at ?? null;
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

  const us = await listing("us");
  if (!us) return json({ live: false, sent: 0 });

  if (typeof body.test === "string") {
    const locale = typeof body.locale === "string" ? body.locale : "en";
    const notes = (await notesByLocale(us))[locale.slice(0, 2)] ?? us.notes;
    const status = await send(body.test, locale, us.version, notes);
    return json({ test: true, version: us.version, sent: status < 300 });
  }

  const since = await seenAt(us.version);
  if (!since) {
    console.error("could not record or read app_releases for", us.version);
    return new Response("Release read failed", { status: 500 });
  }

  const version = encodeURIComponent(us.version);
  const res = await rest(
    `waitlist?select=id,email,locale&list=eq.news&created_at=lt.${encodeURIComponent(since)}` +
      `&or=(news_version.is.null,news_version.neq.${version})&order=created_at&limit=${BATCH}`,
  );
  if (!res.ok) {
    console.error("waitlist read failed", res.status, await res.text());
    return new Response("Read failed", { status: 500 });
  }
  const rows: { id: string; email: string; locale: string | null }[] = await res.json();
  if (rows.length === 0) return json({ version: us.version, sent: 0 });

  const notes = await notesByLocale(us);
  let sent = 0;
  for (const row of rows) {
    const status = await send(row.email, row.locale, us.version, notes[(row.locale ?? "en").slice(0, 2)] ?? us.notes);
    // Out of today's sends: the rest go out on a later run.
    if (status === 429) break;
    if (status >= 300) continue;
    await rest(`waitlist?id=eq.${row.id}`, { method: "PATCH", body: { news_version: us.version } });
    sent += 1;
    // Resend allows 2 requests a second.
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
  return json({ version: us.version, sent, left: rows.length - sent });
});

/**
 * Sends the waitlist welcome email.
 *
 * Fired by a trigger on insert into public.waitlist (see the migration), never by the
 * browser: the site still posts its row straight to PostgREST, so a bad day at the email
 * provider can never cost us a signup.
 *
 * Auth is a shared bearer token rather than a Supabase JWT, because the caller is Postgres.
 * `verify_jwt` is therefore off for this function in config.toml — the check below replaces it.
 */

import { emailFor } from "./emails.ts";
import { renderHtml } from "./render.ts";
import { unsubscribeUrl } from "../_shared/waitlist-token.ts";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/**
 * The display name is quoted on purpose: unquoted parentheses are RFC 5322 comments, and some
 * clients dropped the name and showed the bare address. The domain must be verified in Resend.
 */
const FROM = Deno.env.get("WAITLIST_FROM") ?? '"Gabriel (Near App)" <hello@nearapp.social>';
/** Public GET endpoint of the waitlist-unsubscribe function; the link in the footer is signed. */
const UNSUBSCRIBE_BASE = Deno.env.get("WAITLIST_UNSUBSCRIBE_URL") ??
  "https://mrejurldemanuvbrfutf.supabase.co/functions/v1/waitlist-unsubscribe";
const REPLY_TO = Deno.env.get("WAITLIST_REPLY_TO") ?? "hello@nearapp.social";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const WEBHOOK_SECRET = Deno.env.get("WAITLIST_WEBHOOK_SECRET");

interface WebhookPayload {
  type?: string;
  table?: string;
  record?: { email?: string; locale?: string | null } | null;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Misconfiguration must fail loudly in the logs, not send mail from a half-set-up function.
  if (!RESEND_API_KEY || !WEBHOOK_SECRET) {
    console.error("missing RESEND_API_KEY or WAITLIST_WEBHOOK_SECRET");
    return new Response("Not configured", { status: 500 });
  }

  if (req.headers.get("authorization") !== `Bearer ${WEBHOOK_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const address = payload.record?.email?.trim();
  if (!address) {
    console.error("payload had no record.email", { type: payload.type, table: payload.table });
    return new Response("No email in payload", { status: 400 });
  }

  const locale = payload.record?.locale ?? "en";
  const email = emailFor(locale);
  const unsubscribe = await unsubscribeUrl(UNSUBSCRIBE_BASE, WEBHOOK_SECRET, address, locale);

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [address],
      reply_to: REPLY_TO,
      subject: email.subject,
      html: renderHtml(email, unsubscribe),
      text: `${email.body}\n\n${email.unsubscribe}: ${unsubscribe}`,
      headers: {
        "List-Unsubscribe": `<${unsubscribe}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });

  if (!res.ok) {
    // Log the provider's reason (never the address) so a bounce is debuggable from the dashboard.
    console.error("resend rejected the send", res.status, await res.text());
    return new Response("Send failed", { status: 502 });
  }

  return new Response(JSON.stringify({ sent: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

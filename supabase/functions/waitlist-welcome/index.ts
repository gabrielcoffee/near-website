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

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** "Near <hello@nearapp.social>" — the domain must be verified in Resend or it 403s. */
const FROM = Deno.env.get("WAITLIST_FROM") ?? "Near <hello@nearapp.social>";
const REPLY_TO = Deno.env.get("WAITLIST_REPLY_TO") ?? "hello@nearapp.social";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const WEBHOOK_SECRET = Deno.env.get("WAITLIST_WEBHOOK_SECRET");

interface WebhookPayload {
  type?: string;
  table?: string;
  record?: { email?: string; locale?: string | null } | null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Plain markup on purpose: mail clients are not browsers, and this has to survive all of them. */
function renderHtml(email: ReturnType<typeof emailFor>): string {
  const paragraphs = email.lines
    .map((line) => `<p style="margin:0 0 16px">${escapeHtml(line)}</p>`)
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;background:#fafafa">
    <div style="max-width:520px;margin:0 auto;padding:40px 24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:#1a1a1a">
      <p style="margin:0 0 28px;font-size:20px;font-weight:600">
        <span style="color:#ff5c1a">&#9679;</span> Near
      </p>
      <p style="margin:0 0 20px;font-size:22px;font-weight:600">${escapeHtml(email.heading)}</p>
      ${paragraphs}
      <p style="margin:32px 0 0;padding-top:20px;border-top:1px solid #e6e6e6;font-size:13px;color:#6b6b6b">
        ${escapeHtml(email.footer)}
      </p>
    </div>
  </body>
</html>`;
}

function renderText(email: ReturnType<typeof emailFor>): string {
  return [email.heading, "", ...email.lines, "", "—", email.footer].join("\n");
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

  const email = emailFor(payload.record?.locale);

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
      html: renderHtml(email),
      text: renderText(email),
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

/**
 * Forwards a contact-form message to the inbox.
 *
 * Fired by a trigger on insert into public.contact_messages (see the migration), never by
 * the browser: the site posts its row straight to PostgREST, so a bad day at the email
 * provider can never lose a message — it is already stored.
 *
 * Auth is a shared bearer token rather than a Supabase JWT, because the caller is Postgres.
 * `verify_jwt` is therefore off for this function in config.toml — the check below replaces it.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** "Near <hello@nearapp.social>" — the domain must be verified in Resend or it 403s. */
const FROM = Deno.env.get("CONTACT_FROM") ?? "Near <hello@nearapp.social>";
/** Where messages land. */
const TO = Deno.env.get("CONTACT_TO") ?? "hello@nearapp.social";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const WEBHOOK_SECRET = Deno.env.get("CONTACT_WEBHOOK_SECRET");

interface Message {
  name?: string;
  email?: string;
  platform?: string;
  reason?: string;
  message?: string;
  locale?: string | null;
  created_at?: string;
}

interface WebhookPayload {
  type?: string;
  table?: string;
  record?: Message | null;
}

const PLATFORMS: Record<string, string> = { ios: "iPhone", android: "Android", other: "Other" };
const REASONS: Record<string, string> = {
  scroll: "Stop losing hours scrolling",
  ads: "Escape the ad overload",
  curious: "Just curious",
  data: "Keep my data to myself",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderHtml(m: Required<Pick<Message, "name" | "email" | "platform" | "reason" | "message">> & Message): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#6b6b6b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`;

  return `<!doctype html>
<html>
  <body style="margin:0;background:#fafafa">
    <div style="max-width:560px;margin:0 auto;padding:40px 24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:#1a1a1a">
      <p style="margin:0 0 24px;font-size:20px;font-weight:600"><span style="color:#ff5c1a">&#9679;</span> Near · contact</p>
      <table style="border-collapse:collapse;font-size:15px;margin:0 0 24px">
        ${row("From", `${m.name} <${m.email}>`)}
        ${row("Phone", PLATFORMS[m.platform] ?? m.platform)}
        ${row("Why Near", REASONS[m.reason] ?? m.reason)}
        ${row("Language", m.locale ?? "—")}
      </table>
      <p style="margin:0;padding:20px;background:#ffffff;border:1px solid #e6e6e6;border-radius:16px;white-space:pre-wrap">${escapeHtml(m.message)}</p>
      <p style="margin:24px 0 0;font-size:13px;color:#6b6b6b">Reply to this mail to answer them directly.</p>
    </div>
  </body>
</html>`;
}

function renderText(m: Required<Pick<Message, "name" | "email" | "platform" | "reason" | "message">> & Message): string {
  return [
    `From: ${m.name} <${m.email}>`,
    `Phone: ${PLATFORMS[m.platform] ?? m.platform}`,
    `Why Near: ${REASONS[m.reason] ?? m.reason}`,
    `Language: ${m.locale ?? "—"}`,
    "",
    m.message,
  ].join("\n");
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!RESEND_API_KEY || !WEBHOOK_SECRET) {
    console.error("missing RESEND_API_KEY or CONTACT_WEBHOOK_SECRET");
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

  const r = payload.record;
  const name = r?.name?.trim();
  const email = r?.email?.trim();
  const message = r?.message?.trim();
  if (!r || !name || !email || !message) {
    console.error("payload had no usable record", { type: payload.type, table: payload.table });
    return new Response("Incomplete record", { status: 400 });
  }
  const m = { ...r, name, email, message, platform: r.platform ?? "other", reason: r.reason ?? "curious" };

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `[Near] ${REASONS[m.reason] ?? m.reason} — ${name}`,
      html: renderHtml(m),
      text: renderText(m),
    }),
  });

  if (!res.ok) {
    console.error("resend rejected the send", res.status, await res.text());
    return new Response("Send failed", { status: 502 });
  }

  return new Response(JSON.stringify({ sent: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

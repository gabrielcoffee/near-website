/**
 * Removes a waitlist row when someone follows the unsubscribe link from the welcome email.
 *
 * GET  ?e=<base64url email>&t=<hmac>&l=<locale>   → deletes the row, shows a one-line page
 * POST (same query string)                        → RFC 8058 one-click, used by mail clients
 *
 * The token is an HMAC over the email with WAITLIST_WEBHOOK_SECRET, so a link only works for the
 * address it was generated for. Deleting uses the service role because the table's RLS gives anon
 * insert only. Nothing about the address is logged.
 */

import { emailFor } from "../waitlist-welcome/emails.ts";
import { renderPage } from "../waitlist-welcome/render.ts";
import { fromBase64url, verifyEmail } from "../_shared/waitlist-token.ts";

const SECRET = Deno.env.get("WAITLIST_WEBHOOK_SECRET");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

function page(body: string, status: number): Response {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}

Deno.serve(async (req) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  if (!SECRET || !SUPABASE_URL || !SERVICE_KEY) {
    console.error("waitlist-unsubscribe is missing an env var");
    return new Response("Not configured", { status: 500 });
  }

  const url = new URL(req.url);
  const lang = (url.searchParams.get("l") ?? "en").slice(0, 2);
  const copy = emailFor(lang);
  const invalid = () =>
    page(renderPage("This link doesn't work. Reply to the email instead.", "en"), 400);

  let email: string;
  try {
    email = fromBase64url(url.searchParams.get("e") ?? "").trim().toLowerCase();
  } catch {
    return invalid();
  }
  const token = url.searchParams.get("t") ?? "";
  if (!email || !token || !(await verifyEmail(SECRET, email, token))) {
    return invalid();
  }

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/waitlist?email=ilike.${encodeURIComponent(email)}`,
    {
      method: "DELETE",
      headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
    },
  );
  if (!res.ok) {
    console.error("delete failed", res.status, await res.text());
    return page(renderPage("Something went wrong. Reply to the email instead.", "en"), 500);
  }

  // Same page whether the row existed or not: a second click should not look like an error.
  return page(renderPage(copy.unsubscribed, lang), 200);
});

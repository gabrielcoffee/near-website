/**
 * HTML version of the welcome note. Deliberately simple markup (tables, inline styles) so it
 * survives Gmail, Outlook and Apple Mail alike. Outfit loads where the client allows web fonts
 * (Apple Mail, iOS Mail); everywhere else the system sans steps in. The icon is hosted on the
 * project's public `brand` storage bucket because mail clients drop data: URIs.
 */

import type { Email } from "./emails.ts";

export const ICON_URL =
  "https://mrejurldemanuvbrfutf.supabase.co/storage/v1/object/public/brand/near-icon-128.png";
export const SITE_URL = "https://nearapp.social";
export const X_URL = "https://x.com/gabrielfp101";

const FONT =
  "Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderHtml(email: Email, unsubscribe: string): string {
  const paragraphs = email.body
    .split(/\n\n+/)
    .map((p) => escapeHtml(p).replaceAll("\n", "<br>"))
    .map((p) => `<p style="margin:0 0 18px;font-family:${FONT};font-size:16px;line-height:1.6;color:#111111">${p}</p>`)
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet">
<title>${escapeHtml(email.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#fafafa">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa">
<tr><td align="center" style="padding:40px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px">
  <tr><td style="background:#ffffff;border:1px solid #e8e8e6;border-radius:20px;padding:36px 32px">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="padding-right:12px"><a href="${SITE_URL}" style="display:block;text-decoration:none"><img src="${ICON_URL}" width="40" height="40" alt="Near" style="display:block;width:40px;height:40px;border-radius:10px;border:0"></a></td>
      <td><a href="${SITE_URL}" style="font-family:${FONT};font-size:20px;font-weight:600;letter-spacing:-0.01em;color:#111111;text-decoration:none">Near</a></td>
    </tr></table>
    <p style="margin:32px 0 20px;font-family:${FONT};font-size:28px;font-weight:600;line-height:1.15;letter-spacing:-0.02em;color:#111111">${escapeHtml(email.heading)}</p>
    ${paragraphs}
  </td></tr>
  <tr><td style="padding:20px 32px 0;font-family:${FONT};font-size:13px;line-height:1.6;color:#6b6b6b">
    <a href="${SITE_URL}" style="color:#6b6b6b;text-decoration:underline">nearapp.social</a>
    &nbsp;&middot;&nbsp;
    <a href="${X_URL}" style="color:#6b6b6b;text-decoration:underline">@gabrielfp101</a>
    &nbsp;&middot;&nbsp;
    <a href="${unsubscribe}" style="color:#6b6b6b;text-decoration:underline">${escapeHtml(email.unsubscribe)}</a>
  </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

/** The page the unsubscribe link lands on. One sentence, same card. */
export function renderPage(message: string, lang: string): string {
  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="${ICON_URL}">
<title>Near</title>
</head>
<body style="margin:0;padding:40px 16px;background:#fafafa;font-family:${FONT}">
<div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e8e8e6;border-radius:20px;padding:36px 32px">
  <img src="${ICON_URL}" width="40" height="40" alt="Near" style="display:block;border-radius:10px">
  <p style="margin:28px 0 0;font-size:22px;font-weight:600;line-height:1.25;letter-spacing:-0.02em;color:#111111">${escapeHtml(message)}</p>
  <p style="margin:20px 0 0;font-size:14px;color:#6b6b6b"><a href="${SITE_URL}" style="color:#6b6b6b">nearapp.social</a></p>
</div>
</body>
</html>`;
}

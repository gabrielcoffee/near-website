/**
 * Signed unsubscribe links. The link carries the email (base64url) and an HMAC of it, so only a
 * link we produced can remove a row: nobody can unsubscribe someone else by guessing their address.
 * Web Crypto only, so the same file runs in Deno (the functions) and Node (the one-off sender).
 */

const enc = new TextEncoder();

function base64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

export function fromBase64url(value: string): string {
  const bin = atob(value.replaceAll("-", "+").replaceAll("_", "/"));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

export function toBase64url(value: string): string {
  return base64url(enc.encode(value));
}

async function hmac(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return base64url(new Uint8Array(sig)).slice(0, 32);
}

export async function signEmail(secret: string, email: string): Promise<string> {
  return hmac(secret, email.trim().toLowerCase());
}

export async function verifyEmail(secret: string, email: string, token: string): Promise<boolean> {
  const expected = await signEmail(secret, email);
  if (expected.length !== token.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ token.charCodeAt(i);
  return diff === 0;
}

export async function unsubscribeUrl(
  base: string,
  secret: string,
  email: string,
  locale: string,
): Promise<string> {
  const e = toBase64url(email.trim().toLowerCase());
  const t = await signEmail(secret, email);
  return `${base}?e=${e}&t=${t}&l=${encodeURIComponent(locale)}`;
}

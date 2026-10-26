// Site-wide knobs. Everything a human is likely to change lives here.

/** App Store link. Leave empty until the app is live: the CTA links to the TestFlight beta instead. */
export const APP_STORE_URL = "";

/** Public TestFlight link (anyone with an iPhone can join, up to 10,000 testers). Shown while APP_STORE_URL is empty. */
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/m2BJcaRG";

/** Contact form storage (Supabase). Both values are public by design: the table has
 *  an insert-only RLS policy, so this key can add a row and never read one back. */
export const SUPABASE_URL = "https://mrejurldemanuvbrfutf.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_E88qKnR67tpEybIpnSqVLw_nlt1UfMg";

/** Contact address shown in the footer and the privacy page.
 *  Delivered by Porkbun email forwarding on nearapp.social — if the MX records
 *  ever disappear, mail to this address bounces silently at the sender. */
export const CONTACT_EMAIL = "hello@nearapp.social";

/** Who legally operates Near: company name, CNPJ and registered address, as the legal pages must state
 *  (Apple's EULA minimum terms ask for the developer's name and address). Rendered wherever a dictionary
 *  string says {entity}. Street address left out on purpose (it is a family home); add a business address
 *  here if one is ever needed. */
export const LEGAL_ENTITY = "Gabriel Fernandes Pereira (CNPJ 54.909.636/0001-80), Brasil";

/** Date shown at the top of /privacy/ and /terms/. Bump it whenever either page changes. */
export const LEGAL_UPDATED = "2026-10-22";

/** Barely-there smooth scrolling (Lenis). Set false to use native scroll. */
export const SMOOTH_SCROLL = true;

/** Locales, native names and the flag shown in the switcher, in menu order. Default is first. */
export const LOCALES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];
export const DEFAULT_LOCALE: Locale = "en";
export const LANG_STORAGE_KEY = "near-lang";

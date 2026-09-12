// Site-wide knobs. Everything a human is likely to change lives here.

/** App Store link. Leave empty until the app is live: CTAs switch to "coming soon". */
export const APP_STORE_URL = "";

/** Waitlist storage (Supabase). Both values are public by design: the table has
 *  an insert-only RLS policy, so this key can add a row and never read one back. */
export const SUPABASE_URL = "https://mrejurldemanuvbrfutf.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_E88qKnR67tpEybIpnSqVLw_nlt1UfMg";

/** Waitlist form shows only while the app is not live and the keys above are set. */
export const WAITLIST_ENABLED = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

/** Contact address shown in the footer and the privacy page.
 *  Delivered by Porkbun email forwarding on nearapp.social — if the MX records
 *  ever disappear, mail to this address bounces silently at the sender. */
export const CONTACT_EMAIL = "hello@nearapp.social";

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

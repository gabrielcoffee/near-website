// Site-wide knobs. Everything a human is likely to change lives here.

/** App Store link. Leave empty until the app is live: CTAs switch to "coming soon". */
export const APP_STORE_URL = "";

/** Contact address shown in the footer. */
export const CONTACT_EMAIL = "hello@near.app";

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
] as const;

export type Locale = (typeof LOCALES)[number]["code"];
export const DEFAULT_LOCALE: Locale = "en";
export const LANG_STORAGE_KEY = "near-lang";

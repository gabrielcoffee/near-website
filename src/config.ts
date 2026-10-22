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

/** Who legally operates Near: company name, CNPJ and registered address, as the legal pages must state
 *  (Apple's EULA minimum terms ask for the developer's name and address). Rendered wherever a dictionary
 *  string says {entity}. Street address left out on purpose (it is a family home); add a business address
 *  here if one is ever needed. */
export const LEGAL_ENTITY = "Gabriel Fernandes Pereira (CNPJ 54.909.636/0001-80), Brasil";

/** Date shown at the top of /privacy/ and /terms/. Bump it whenever either page changes. */
export const LEGAL_UPDATED = "2026-10-22";

/** Near Spark prices per language's main storefront, as the app's StoreKit configuration has them. US and Brazil
 *  are decided (monthly $3.99 / R$ 9,90, yearly $29.99 / R$ 79,90); euro and rouble values are placeholders that
 *  mirror the US numbers. `yearlyPerMonth` and `saving` are the yearly plan's per-month equivalent and its
 *  discount vs 12 months. */
export type SparkPrice = { monthly: string; yearly: string; yearlyPerMonth: string; saving: string };
export const NEAR_SPARK_PRICE: Record<Locale, SparkPrice> = {
  en: { monthly: "$3.99", yearly: "$29.99", yearlyPerMonth: "$2.50", saving: "37%" },
  pt: { monthly: "R$ 9,90", yearly: "R$ 79,90", yearlyPerMonth: "R$ 6,66", saving: "33%" },
  es: { monthly: "3,99 €", yearly: "29,99 €", yearlyPerMonth: "2,50 €", saving: "37%" },
  fr: { monthly: "3,99 €", yearly: "29,99 €", yearlyPerMonth: "2,50 €", saving: "37%" },
  de: { monthly: "3,99 €", yearly: "29,99 €", yearlyPerMonth: "2,50 €", saving: "37%" },
  it: { monthly: "3,99 €", yearly: "29,99 €", yearlyPerMonth: "2,50 €", saving: "37%" },
  ru: { monthly: "$3.99", yearly: "$29.99", yearlyPerMonth: "$2.50", saving: "37%" },
};

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

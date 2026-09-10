import { DEFAULT_LOCALE, LOCALES, type Locale } from "../config";
import en, { type Dictionary } from "./en";
import pt from "./pt";
import es from "./es";
import fr from "./fr";
import de from "./de";
import it from "./it";
import ru from "./ru";

const dictionaries: Record<Locale, Dictionary> = { en, pt, es, fr, de, it, ru };

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

/** URL prefix for a locale: "" for the default, "/pt" for others. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Build a path in a given locale, e.g. localePath("pt", "/privacy/") → "/pt/privacy/". */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix(locale)}${clean}`;
}

/** Static paths for [...lang] routes: undefined for default, code for others. */
export function localeStaticPaths() {
  return LOCALES.map((l) => ({
    params: { lang: l.code === DEFAULT_LOCALE ? undefined : l.code },
    props: { locale: l.code as Locale },
  }));
}

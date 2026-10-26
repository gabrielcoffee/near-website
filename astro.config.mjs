// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Real domain (used for canonical, hreflang + OG urls). Registered at Porkbun, served by Vercel.
  site: "https://nearapp.social",
  output: "static",
  trailingSlash: "always",
  // Near Spark had its own page (/near-plus/ until 2026-10-18, /near-spark/ until 2026-10-22); the site no longer
  // mentions it outside the legal pages, so old links land on the home page (vercel.json answers with a real 308 too).
  redirects: Object.fromEntries(
    ["", "/pt", "/es", "/fr", "/de", "/it", "/ru"].flatMap((p) => [
      [`${p}/near-plus/`, `${p}/`],
      [`${p}/near-spark/`, `${p}/`],
    ]),
  ),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt", "es", "fr", "de", "it", "ru"],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Real domain (used for canonical, hreflang + OG urls). Registered at Porkbun, served by Vercel.
  site: "https://nearapp.social",
  output: "static",
  trailingSlash: "always",
  // The Near Spark page was /near-plus/ until 2026-10-18 (vercel.json answers these with a real 308 too).
  redirects: {
    "/near-plus/": "/near-spark/",
    "/pt/near-plus/": "/pt/near-spark/",
    "/es/near-plus/": "/es/near-spark/",
    "/fr/near-plus/": "/fr/near-spark/",
    "/de/near-plus/": "/de/near-spark/",
    "/it/near-plus/": "/it/near-spark/",
    "/ru/near-plus/": "/ru/near-spark/",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt", "es", "fr", "de", "it", "ru"],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

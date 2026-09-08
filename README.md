# Near — website

Landing page for Near, the social app for friends you actually see.

## Run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Where things live

- `src/config.ts` — App Store URL, contact email, locales, smooth-scroll switch.
- `src/styles/global.css` — design tokens (`@theme`), buttons, cards, drawing boil, reveal.
- `src/i18n/*.ts` — one dictionary per language. Add a language: copy `en.ts`, add it to `LOCALES` in `config.ts` and `astro.config.mjs`, register it in `src/i18n/index.ts`.
- `src/components/` — page sections (`Hero`, `HowItWorks`, `Beliefs`, `Cta`) and UI (`Header`, `Footer`, `Button`, `Drawing`, `LangSwitch`, `PhoneMock`, `PhoneScreens`).
- `src/scripts/` — tiny vanilla modules: `boil` (wobble), `reveal`, `header`, `phone`, `roadmap`, `lang`, `smooth`.
- `drawings-src/` — original PNG drawings. `src/assets/drawings/` — normalized versions used by the site.

## Drawings

Drop new PNGs (transparent background) into `drawings-src/` and run:

```bash
node scripts/normalize-drawings.mjs
```

Then use them anywhere with `<Drawing name="file-name" size={160} class="w-[120px]" />`.

## Wobble tuning

Filters are defined in `src/layouts/Base.astro` (`boil-s-*` idle, `boil-h-*` hover). Frame rate lives in `src/scripts/boil.ts` (`INTERVAL_MS`).

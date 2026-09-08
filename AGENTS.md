@AGENTS.md

# Near website

Single landing page (Astro 7, Tailwind v4, static, 6 languages) for Near, an iOS social app where friends can only be added in person. The app spec is `specs.md`; the app itself lives in `~/projects/near`. `README.md` says where files live. This file is for the things you would otherwise miss.

## Working with Gabriel

- Decide, don't ask. He wants a built first version, then iterates on what he sees. Ask at most one or two questions that need his taste.
- Several Claude sessions often work on this repo at the same time. Before editing a shared file (`src/i18n/*`, `Header`, `Beliefs`, `global.css`), check `git status` and the file's mtime. If it changed minutes ago, re-read it and merge; never regex-rewrite a whole block.
- Commit only when asked. Deploy (Vercel, `vercel --prod`) only when asked. Live site: https://near-website-lemon.vercel.app
- Report with screenshots (desktop 1280 and mobile 390). Build must pass before you say done.

## Checklists (the things that get forgotten)

**New section**
1. Component in `src/components/`, rendered from `src/pages/[...lang]/index.astro` in page order.
2. `<section id="…" class="section relative scroll-mt-[-4rem] md:scroll-mt-[-7rem]">` (see Anchors below).
3. Header nav: link in `Header.astro` via `anchor("id")` **and** a `nav.*` label in all six dictionaries.
4. Eyebrow + `.h-section` + `.lede` at the top, `data-reveal` on text, `data-reveal="pop"` on drawings.
5. Any new client behaviour: module in `src/scripts/`, registered in `src/scripts/main.ts`.
6. Optional: a `GallerySection` in `src/pages/web.astro` (dev gallery, also deployed at `/web/`).

**Copy change**
- Every string lives in `src/i18n/{en,pt,es,fr,de,it}.ts`. `Dictionary` is the type of `en.ts`, so a shape change must land in all six or the build fails.
- Tone: short, slightly playful, second person. pt is Brazilian (você), es is Spain (tú/vosotros), fr/de/it informal (tu/du/tu).
- Eyebrows and section labels lowercase ("coming next"); header nav capitalized ("Coming next"); section titles are statements with a period ("Small app. Real people.").

**New drawing**
- Drop the PNG in `drawings-src/`, run `node scripts/normalize-drawings.mjs`, use `<Drawing name="file" size={…} class="w-[…px]" />`.
- Hero never uses `actually`, `confused`, `old`. Hero characters are positioned by hand in `Hero.astro` (percent of the hero); when Gabriel sends new positions, replace the lines verbatim.

**Phone mock screens** (`PhoneScreens.astro`, `RoadmapScreens.astro`)
- Mirror the real iOS app (3-column photo grid, floating action pill, glass tab bar, edge-to-edge posts). Friends are real people, never drawings: portraits in `src/assets/people/`, post photos in `src/assets/photos/` (Unsplash, licensed for commercial use). Grid cells are square tiles, not circles.

## Design rules (Gabriel's calls, don't relitigate)

- Light mode only. Outfit font. Orange accent `--color-accent`, black primary buttons. Tokens live in `@theme` in `src/styles/global.css`; use them, don't hardcode colors.
- Hover states change background or color only. Never an underline that draws in, never movement on buttons. He called the old underline "AI looking".
- Buttons are normal UI; drawings are decoration, never controls. No custom cursor, no sound. Hero characters stay put: no pointer parallax (removed 2026-09-08, don't bring it back). Smooth scroll stays barely there (Lenis, `lerp 0.2`).
- Hero title is deliberately small. Header is a floating translucent pill.
- Sections are borderless rows (`BeliefItem`), not card grids. `.card` is only used by the CTA.
- Mobile first: every section must read at 390px.

## Anchors (was broken once, keep it this way)

One source of header clearance: `html { scroll-padding-top: 6rem }`. Sections pull the heading up with a negative `scroll-mt` so the eyebrow lands ~130px from the top. Lenis uses `anchors: true` with no offset. Don't add `scroll-mt-24` or a Lenis offset again. On the home page nav links must be bare `#id` hrefs (Lenis only intercepts those); `Header.astro`'s `anchor()` handles that.

## Verification

```bash
npm run build                 # must print "13 page(s) built"
npx astro preview             # serves dist on :4321 (a parallel session may already hold the port)
```

Screenshots: elements with `data-reveal` are invisible until scrolled into view and the hero waits for the intro. Before capturing, add `is-visible` to every `[data-reveal]` and `intro-go` to `<html>`. Machine-specific playwright setup is in `CLAUDE.local.md`.

## Gotchas

- `/` has a client-side redirect on first visit (browser language → `/pt/` etc., remembered in localStorage `near-lang`). Test locales by URL, not by expecting `/` to stay English.
- `trailingSlash: "always"`: `/web` 404s, `/web/` works.
- Astro dev HMR sometimes serves stale scoped CSS; restart with `astro dev stop && astro dev --background`.
- `src/pages/web.astro` imports most components with literal props; deleting or renaming a component breaks it.

## Open items

- App Store URL empty in `src/config.ts` (CTA shows "coming soon"). Domain placeholder `https://near.app` in `astro.config.mjs`. No OG image. Waitlist email capture not built (needs a Supabase table).

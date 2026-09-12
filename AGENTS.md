@AGENTS.md

# Near website

Single landing page (Astro 7, Tailwind v4, static, 7 languages) for Near, an iOS social app where friends can only be added in person. The app spec is `specs.md`; the app itself lives in `~/projects/near`. `README.md` says where files live. This file is for the things you would otherwise miss.

## Working with Gabriel

- Decide, don't ask. He wants a built first version, then iterates on what he sees. Ask at most one or two questions that need his taste.
- Several Claude sessions often work on this repo at the same time. Before editing a shared file (`src/i18n/*`, `Header`, `Beliefs`, `global.css`), check `git status` and the file's mtime. If it changed minutes ago, re-read it and merge; never regex-rewrite a whole block.
- Commit only when asked. Push only when asked: Vercel is git-linked (since 2026-09-08), so every push to `main` deploys production. Never run `vercel --prod` from the working tree. Live site: https://nearapp.social (Porkbun domain, Vercel-served; the `*.vercel.app` URL still works but is not the canonical one).
- Report with screenshots (desktop 1280 and mobile 390). Build must pass before you say done.

## Checklists (the things that get forgotten)

**New section**
1. Component in `src/components/`, rendered from `src/pages/[...lang]/index.astro` in page order.
2. `<section id="…" class="section relative scroll-mt-[-4rem] md:scroll-mt-[-7rem]">` (see Anchors below).
3. Header nav: link in `Header.astro` via `anchor("id")` **and** a `nav.*` label in all seven dictionaries. Nav links must sit in page order — that has been wrong before.
4. `.h-section` + `.lede` at the top, `data-reveal` on text, `data-reveal="pop"` on drawings. The `.h-section` renders `dict.nav.*`, not a title of its own.
5. Any new client behaviour: module in `src/scripts/`, registered in `src/scripts/main.ts`.
6. Optional: a `GallerySection` in `src/pages/web.astro` (dev gallery, also deployed at `/web/`).

**Copy change**
- Every string lives in `src/i18n/{en,pt,es,fr,de,it,ru}.ts`. `Dictionary` is the type of `en.ts`, so a shape change must land in all seven or the build fails.
- Tone: short, slightly playful, second person. pt is Brazilian (você), es is Spain (tú/vosotros), fr/de/it/ru informal (tu/du/tu/ты). ru avoids gendered past tense ("ты видел/видела") so it reads right for everyone.
- Localize, don't translate: each language uses what a native speaker would actually say ("Ran into a friend?" for "Encontrou um amigo?"). Natural, not slangy. Never describe a mechanic the reader can't picture ("tap within 30 seconds").
- Outfit has no Cyrillic, so `--font-sans` falls back to Onest for Russian glyphs. A new non-Latin language needs a fallback font the same way.
- A section is named once, in `nav.*`, and the heading and the header link both read it ("Coming next"). Don't give a section its own `title` string — the two drifted apart when they were separate. The CTA card keeps its own statement title ("Go see your friends.").

**New drawing**
- Drop the PNG in `drawings-src/`, run `node scripts/normalize-drawings.mjs`, use `<Drawing name="file" size={…} class="w-[…px]" />`.
- Hero never uses `actually`, `confused`, `old`. Hero characters are positioned by hand in `Hero.astro` (percent of the hero); when Gabriel sends new positions, replace the lines verbatim.

**Phone mock screens** (`PhoneScreens.astro`, `RoadmapScreens.astro`)
- Mirror the real iOS app (3-column photo grid, floating action pill, glass tab bar, edge-to-edge posts). Friends are real people, never drawings: portraits in `src/assets/people/`, post photos in `src/assets/photos/` (Unsplash, licensed for commercial use). Grid cells are square tiles, not circles.

## Design rules (Gabriel's calls, don't relitigate)

- Light mode only. Outfit font. Orange accent `--color-accent`, black primary buttons. Tokens live in `@theme` in `src/styles/global.css`; use them, don't hardcode colors.
- Hover states change background or color only. Never an underline that draws in, never movement on buttons. He called the old underline "AI looking".
- The CTA `.card` lifts on hover and has no press state: pressing a button inside it used to drop the lift and read as a flicker. Don't add `.card:active` back.
- Header nav is absolutely centred on the header, so the width of the lang switch + CTA never pushes it off centre.
- Buttons are normal UI; drawings are decoration, never controls. No custom cursor, no sound. Hero characters stay put: no pointer parallax (removed 2026-09-08, don't bring it back). Smooth scroll stays barely there (Lenis, `lerp 0.2`).
- Hero title is deliberately small. Header is a floating translucent pill.
- Sections are borderless rows (`BeliefItem`), not card grids. `.card` is only used by the CTA.
- Mobile first: every section must read at 390px.

## Anchors (was broken once, keep it this way)

One source of header clearance: `html { scroll-padding-top: 6rem }`. Sections pull the heading up with a negative `scroll-mt` so the eyebrow lands ~130px from the top. Lenis uses `anchors: true` with no offset. Don't add `scroll-mt-24` or a Lenis offset again. On the home page nav links must be bare `#id` hrefs (Lenis only intercepts those); `Header.astro`'s `anchor()` handles that.

## Verification

```bash
npm run build                 # must print "15 page(s) built"
npx astro preview             # serves dist on :4321 (a parallel session may already hold the port)
```

Screenshots: elements with `data-reveal` are invisible until scrolled into view and the hero waits for the intro. Before capturing, add `is-visible` to every `[data-reveal]` and `intro-go` to `<html>`. Machine-specific playwright setup is in `CLAUDE.local.md`.

## Gotchas

- `/` has a client-side redirect on first visit (browser language → `/pt/` etc., remembered in localStorage `near-lang`). Test locales by URL, not by expecting `/` to stay English.
- `trailingSlash: "always"`: `/web` 404s, `/web/` works.
- Astro dev HMR sometimes serves stale scoped CSS; restart with `astro dev stop && astro dev --background`.
- `src/pages/web.astro` imports most components with literal props; deleting or renaming a component breaks it.

## Waitlist

While `APP_STORE_URL` is empty the CTA card shows an email form instead of the store button, with the "coming soon" line kept underneath. Set `APP_STORE_URL` and the form is replaced by the real download button — no other change needed.

- Storage: Supabase project `near` (`mrejurldemanuvbrfutf`), table `public.waitlist`, migration in `supabase/migrations/`.
- The browser posts straight to PostgREST with the publishable key in `src/config.ts`. That key is public on purpose: the table has an insert-only RLS policy for `anon`, so it can add a row and can never read one back. Read the list in the dashboard (or with the service key), never from the site.
- Duplicates hit a unique index on `lower(email)` and come back as 409 — the form says "you're already on the list" rather than erroring.
- A hidden `company` honeypot field silently drops bot submissions.

## Open items

- App Store URL empty in `src/config.ts` (CTA shows the waitlist form + "coming soon"). Nothing emails the waitlist yet — the rows just sit in Supabase.
- No `/terms/` page, but the iOS app's Settings links to `https://nearapp.social/terms/` (`AppLinks.swift`) and it 404s. Write the page or hide that row before App Store review.
- The `hello@nearapp.social` mailbox trial expires 2026-09-23 (see below).

## Contact address (was dead once)

`CONTACT_EMAIL` in `src/config.ts` is shown in the footer and on the privacy page. A domain having a website does not give it mail: until 2026-09-12 the address was `hello@near.app`, a placeholder on a domain someone else owns with no MX record, so every mail sent to it hard-bounced and the sender saw a dead address. Before changing the address to a new domain, check `dig MX <domain>` returns something. Today it is `hello@nearapp.social`: a real Porkbun-hosted mailbox (not a forward), which also forwards a copy to `nearapp.social@gmail.com`. **It is on a free trial that expires 2026-09-23** — renewal is $3/month billed yearly. If it lapses, mail silently bounces again. The same address is the app's feedback address in `~/projects/near/Near/App/AppLinks.swift`, so both break together.

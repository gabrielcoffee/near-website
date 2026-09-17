@AGENTS.md

# Near website

Single landing page (Astro 7, Tailwind v4, static, 7 languages) for Near, an iOS social app where friends can only be added in person. The app spec is `specs.md`; the app itself lives in `~/projects/near`. `README.md` says where files live. This file is for the things you would otherwise miss.

## Working with Gabriel

- Decide, don't ask. He wants a built first version, then iterates on what he sees. Ask at most one or two questions that need his taste.
- Several Claude sessions often work on this repo at the same time. Before editing a shared file (`src/i18n/*`, `Header`, `Beliefs`, `global.css`), check `git status` and the file's mtime. If it changed minutes ago, re-read it and merge; never regex-rewrite a whole block.
- Commit only when asked. Push only when asked: Vercel is git-linked (since 2026-09-08), so every push to `main` deploys production. Never run `vercel --prod` from the working tree. Live site: https://nearapp.social (Porkbun domain, Vercel-served; the `*.vercel.app` URL still works but is not the canonical one).
- **No screenshots, ever.** Gabriel opens the preview himself; screenshot loops waste tokens. Build must pass before you say done.
- Hand easy, well-specified chunks (mechanical edits, lookups, translations of fixed strings) to a cheaper subagent (`model: "sonnet"`); keep taste and judgment calls in the main session.
- Docs live here in `AGENTS.md` (loaded through `CLAUDE.md`'s `@AGENTS.md`). Don't start new `.md` notes; the only planned extra is the design system doc, later.

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
npm run build                 # must print "29 page(s) built"
# Never start a server on :4321 — Gabriel runs `npm run dev` there himself (Astro 7 dev is a background
# daemon: `npx astro dev status|stop`). A preview on that port once shadowed his dev server on :4322 and he
# edited for an hour seeing no change. If you need a server, use another port and stop it when done.
```

Don't screenshot. If you must inspect the DOM headlessly, elements with `data-reveal` are invisible until scrolled into view and the hero waits for the intro (`is-visible` on `[data-reveal]`, `intro-go` on `<html>`).

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

- App Store URL empty in `src/config.ts` (CTA shows the waitlist form + "coming soon"). Signups get the welcome mail; the launch mail is still to be written.
- `/terms/` exists now (2026-09-12); the iOS app's Settings row that links to it no longer 404s.
- Contact form (`contact_messages` table, `contact-notify` function) is written but not deployed: migration not pushed, function not deployed, Vault secrets not set. Until then the form fails with a 404 from PostgREST and shows the error line.
- Welcome mail is live (2026-09-17): Resend domain verified, `waitlist-welcome` + `waitlist-unsubscribe` deployed, secrets and Vault set. The 57 people who signed up before it existed have not all been mailed yet; the one-off sender lives in the session scratchpad, not the repo.

## Waitlist welcome email

A trigger on `public.waitlist` calls the `waitlist-welcome` Edge Function, which sends a welcome mail through Resend in the signup's own language (`supabase/functions/waitlist-welcome/emails.ts`, all seven, `ru` free of gendered past tense like the site).

- The insert path is deliberately untouched: the browser still posts to PostgREST and the trigger hands off to `pg_net`, which queues and returns. A dead provider loses the mail, never the signup.
- Auth is a shared bearer token, not a Supabase JWT, because the caller is Postgres — hence `verify_jwt = false` for this function in `config.toml`.
- Nothing secret is committed. The function URL and token live in Vault (`waitlist_welcome_url`, `waitlist_welcome_token`); the trigger no-ops until both exist, so a fresh branch database sends nothing.
- Function secrets: `RESEND_API_KEY`, `WAITLIST_WEBHOOK_SECRET`, optionally `WAITLIST_FROM` / `WAITLIST_REPLY_TO` / `WAITLIST_UNSUBSCRIBE_URL`. Set with `supabase secrets set`.
- The mail is a first-person note signed by Gabriel (`emails.ts`: subject, heading, body, two footer labels per language), wrapped by `render.ts` into a white card with the app icon and wordmark linking to the site, then `nearapp.social · @gabrielfp101 · unsubscribe`. Sender is `"Gabriel (Near App)" <hello@…>`, quoted because unquoted parentheses are an RFC comment and some clients showed the bare address.
- Unsubscribe is a signed link (`_shared/waitlist-token.ts`, HMAC over the email with `WAITLIST_WEBHOOK_SECRET`) to the `waitlist-unsubscribe` function, which deletes the row with the service role and shows a one-line page in the reader's language. `List-Unsubscribe` headers make Gmail's own button work too.
- The icon in the mail is `near-icon-128.png` in the public `brand` storage bucket (mail clients drop data: URIs). Rendered from `~/Desktop/NearIcon.icon` without the Liquid Glass; re-render there if the icon changes.
- The CTA confirmation line says "check your inbox" rather than "we'll email you once", because the welcome mail made the old promise false. The launch mail is still the only other one planned — the welcome email says so.
- Resend free tier is 3,000/month but only **100/day**: a big traffic spike drops the overflow. The provider call is one `fetch` in `index.ts`, so swapping to SES or Brevo is a one-function change.

## Contact page (`/contact/`)

Two columns: copy + email on the left, form on the right (`ContactForm.astro`, `src/scripts/contact.ts`). Fields: name, email, phone (iPhone / Android / other), why Near (four fixed keys: `scroll`, `ads`, `curious`, `data`), message. Keys are stored, labels are localized, so don't rename a key without a migration.

- Same shape as the waitlist: browser posts to PostgREST (`public.contact_messages`, insert-only RLS for `anon`), a trigger hands the row to `pg_net`, the `contact-notify` Edge Function mails it to `hello@nearapp.social` via Resend with `reply_to` set to the sender. Vault secrets: `contact_notify_url`, `contact_notify_token`. Function secrets: `RESEND_API_KEY`, `CONTACT_WEBHOOK_SECRET`, optionally `CONTACT_FROM` / `CONTACT_TO`.
- Deploy: `supabase db push`, `supabase functions deploy contact-notify`, `supabase secrets set …`, then the two `vault.create_secret` calls at the bottom of the migration.
- Honeypot `company` field, same as the waitlist. No rate limit beyond the check constraints (message ≤ 2000 chars).
- The footer "Contact" link goes to this page, not to `mailto:`. The email is still shown on the page for people who prefer their own mail app.

## Legal pages (`/privacy/`, `/terms/`)

Both render `Legal.astro` from `dict.privacy` / `dict.terms` (title, intro, sections with optional bullet `items`, contact line). `LEGAL_UPDATED` in `src/config.ts` is the "last updated" date shown on both; bump it when either page's copy changes. The copy states facts from the app: Apple sign-in only, ephemeral nearby code over local network (10 min rotation, 15 min TTL), no location for discovery, four iOS permissions, Supabase / Apple / Resend as the only third parties, no analytics SDK anywhere, Settings → Delete Account cascades everything. If the app changes any of that, change the page. Age floor is 13 (Gabriel's call to revisit). No legal entity or jurisdiction is named.

## Contact address (was dead once)

`CONTACT_EMAIL` in `src/config.ts` is shown in the footer and on the privacy page. A domain having a website does not give it mail: until 2026-09-12 the address was `hello@near.app`, a placeholder on a domain someone else owns with no MX record, so every mail sent to it hard-bounced and the sender saw a dead address. Before changing the address to a new domain, check `dig MX <domain>` returns something. Today it is `hello@nearapp.social`: Porkbun's free email forwarding (MX `fwd1/fwd2.porkbun.com`, SPF `include:_spf.porkbun.com`) delivering to `nearapp.social@gmail.com`. There is no mailbox, so nothing expires, but replies from Gmail go out as the Gmail address unless "Send mail as" is set up with Resend SMTP (`smtp.resend.com:465`, user `resend`, password = API key) once the domain is verified there. The same address is the app's feedback address in `~/projects/near/Near/App/AppLinks.swift`, so both break together.

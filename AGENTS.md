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
3. Header nav: link in `Header.astro` via `anchor("id")` **and** a `nav.*` label in all seven dictionaries. Nav links must sit in page order — that has been wrong before. **Four links is the ceiling**: the header caps at 1024px and the nav is centred between the wordmark and the lang switch + CTA, so it has ~490px in es/fr (measured 2026-09-30; five links were 600–650px and wrapped). Today: How it works · What we believe. "What you won't find on Near" has no link (it has its own `without.title` since it isn't in the nav). Adding a link means dropping one.
4. `.h-section` + `.lede mt-4` at the top inside `max-w-xl`, `data-reveal` on text, `data-reveal="pop"` on drawings. The `.h-section` renders `dict.nav.*`, not a title of its own. No eyebrows, no "01/02" numbers above titles (Gabriel: "none of this"; removed 2026-10-12).
5. Any new client behaviour: module in `src/scripts/`, registered in `src/scripts/main.ts`.
6. Optional: a `GallerySection` in `src/pages/web.astro` (dev gallery, also deployed at `/web/`).

**Home page order (2026-10-22):** Hero · How it works (`HowItWorks`: three `HowStep` rows, a screenshot beside a title and one line, sides alternating; screenshots are `src/assets/shots/<locale>/add-friend|feed|profile.png`, the first two rows are aligned pairs: `add-friend` + `add-friend-match` (holding the card, then "Congratulations!"), `feed` + `comments`, en and pt for now, other locales fall back to en; simulator captures from the app repo's `scripts/shots.sh`, copied from `~/Desktop/near-shots/`; `Shot.astro` wraps each in a CSS iPhone 17 Pro, Cosmic Orange frame, 180→220px wide (Gabriel tried 54 to 270; this is the size he called normal), sized in `cqw` so it scales as one piece. Temporary set until Gabriel brings the final pictures) · What we believe (`Beliefs`: the `actually` drawing beside three paragraphs) · What you won't find on Near (`Without`: ads, algorithm, endless scroll, strangers as a borderless 2×2 grid, `max-w-5xl`; each drawing on the outer edge of its cell, left column left, right column right; stacked with drawings on the left on a phone) · the download card (TestFlight button). The old "Also in Near" stack, the `/near-spark/` page and the Spark block are gone; `/near-plus/` and `/near-spark/` redirect to the home page (astro.config + vercel.json). The other five dictionaries carry the English copy of the new blocks behind a `TODO translate` comment until Gabriel approves the words.

**Copy change**
- Every string lives in `src/i18n/{en,pt,es,fr,de,it,ru}.ts`. `Dictionary` is the type of `en.ts`, so a shape change must land in all seven or the build fails.
- Tone: short, slightly playful, second person. pt is Brazilian (você), es is Spain (tú/vosotros), fr/de/it/ru informal (tu/du/tu/ты). ru avoids gendered past tense ("ты видел/видела") so it reads right for everyone.
- Localize, don't translate: each language uses what a native speaker would actually say ("Ran into a friend?" for "Encontrou um amigo?"). Natural, not slangy. Never describe a mechanic the reader can't picture ("tap within 30 seconds").
- Outfit has no Cyrillic, so `--font-sans` falls back to Onest for Russian glyphs. A new non-Latin language needs a fallback font the same way.
- A section is named once, in `nav.*`, and the heading and the header link both read it ("Also in Near"). Don't give a section its own `title` string — the two drifted apart when they were separate. The CTA card keeps its own statement title ("Go see your friends.").

**New drawing**
- Drop the PNG in `drawings-src/`, run `node scripts/normalize-drawings.mjs`, use `<Drawing name="file" size={…} class="w-[…px]" />`.
- Hero never uses `actually`, `confused`, `old`. Hero characters are positioned by hand in `Hero.astro` (percent of the hero); when Gabriel sends new positions, replace the lines verbatim.

**Phone mock screens** (`PhoneScreens.astro` / `PhoneMock.astro`, now only in the `/web/` gallery; the home page shows real screenshots)
- Mirror the real iOS app as it is today: three tabs (Feed, Messages, Profile; there is no friends grid any more), the discovery space ("There's people here!" over the nearby cards), the Messages list as your friends list with "Add New Friend", the Feed with logo bar + story rail + edge-to-edge square posts (name with the place under it, "…"; under the photo name + caption, "3 comments", time), comments in a sheet whose composer has photo, sticker and mic. When the app changes, change the mock and the step copy with it. Reference: launch the simulator build with `-near.previewFlow tabs -near.sampleFeed YES -near.openScreen feed|messages|comments|profile` or `-near.previewFlow firstFriend -near.discoveryDemo auto` (bundle id `com.nearsocial.app`); its sample data has gradient placeholders, so screenshots can't go on the site as they are. Friends are real people, never drawings: portraits in `src/assets/people/`, post photos in `src/assets/photos/` (Unsplash, licensed for commercial use). Grid cells are square tiles, not circles.

## Design rules (Gabriel's calls, don't relitigate)

- **Four text sizes, nothing else** (2026-10-12): `text-display` (h1 and section headings, 36→48), `text-title` (row titles, 24→30), `text-body` (reading text, buttons, inputs, 16→18), `text-small` (nav, footer, hints, labels, 14). Tokens in `@theme` (`--text-*`, fluid with `clamp`); `.h-section` / `.lede` / `.btn-*` / `.field*` already use them. Never add `text-lg`, `md:text-*` or a raw `font-size`. Only the text inside app mock screens keeps its own tiny sizes.

- Light mode only. Outfit font. Orange accent `--color-accent`, black primary buttons. Tokens live in `@theme` in `src/styles/global.css`; use them, don't hardcode colors.
- Hover states change background or color only. Never an underline that draws in, never movement on buttons. He called the old underline "AI looking".
- The CTA `.card` lifts on hover and has no press state: pressing a button inside it used to drop the lift and read as a flicker. Don't add `.card:active` back.
- Header nav is absolutely centred on the header, so the width of the lang switch + CTA never pushes it off centre.
- Buttons are normal UI; drawings are decoration, never controls. No custom cursor, no sound. Hero characters stay put: no pointer parallax (removed 2026-09-08, don't bring it back). Smooth scroll stays barely there (Lenis, `lerp 0.2`).
- Hero title is deliberately small. Header is a floating translucent pill.
- Sections are borderless rows (`BeliefItem`), not card grids. `.card` is only used by the CTA.
- Mobile first: every section must read at 390px.

## Anchors (was broken once, keep it this way)

One source of header clearance: `html { scroll-padding-top: 6rem }`. Sections pull the heading up with a negative `scroll-mt` so the heading lands ~130px from the top. Lenis uses `anchors: true` with no offset. Don't add `scroll-mt-24` or a Lenis offset again. On the home page nav links must be bare `#id` hrefs (Lenis only intercepts those); `Header.astro`'s `anchor()` handles that.

## Verification

```bash
npm run build                 # must print "29 page(s) built" (the fourteen redirect pages aren't counted)
# Never start a server on :4321 — Gabriel runs `npm run dev` there himself (Astro 7 dev is a background
# daemon: `npx astro dev status|stop`). A preview on that port once shadowed his dev server on :4322 and he
# edited for an hour seeing no change. If you need a server, use another port and stop it when done.
```

Don't screenshot. If you must inspect the DOM headlessly, elements with `data-reveal` are invisible until scrolled into view and the hero waits for the intro (`is-visible` on `[data-reveal]`, `intro-go` on `<html>`).

## Link previews (WhatsApp, iMessage, LinkedIn, X, Slack, Telegram)

`Base.astro` emits Open Graph + `twitter:*` tags on every page; the image is `public/og/<locale>.png` (1200×630, ~90 KB,
mark + "Near" + the hero tagline + three hero characters). Regenerate after a tagline or mark change:
`PLAYWRIGHT_CORE=~/projects/casamento-sarah/node_modules/playwright-core node scripts/og.mjs` (headless Chrome, fonts
and images inlined). The `<title>` is `meta.title` ("Near: friends you actually see", colon, never an em dash). Meta
titles/descriptions live in `meta.*` per dictionary. Test with https://www.opengraph.xyz/ or
https://developers.facebook.com/tools/debug/ (also clears Facebook/WhatsApp's cache; WhatsApp caches a link's preview for
days, so a changed image shows up only on a URL it hasn't seen, e.g. add `?v=2`). Sharing the TestFlight link gives
Apple's own card (icon cropped into a banner, "From testflight.apple.com"); share `https://nearapp.social/` instead.

Vercel serves the site on `www.nearapp.social` and 308-redirects the apex to it (checked 2026-10-27), while `site` in
`astro.config` and every canonical/og URL say the apex. Some scrapers won't follow the image redirect. Fix in Vercel
(project → Settings → Domains: make `nearapp.social` the primary and redirect `www` to it); no code change needed.

## Gotchas

- `/` has a client-side redirect on first visit (browser language → `/pt/` etc., remembered in localStorage `near-lang`). Test locales by URL, not by expecting `/` to stay English.
- `trailingSlash: "always"`: `/web` 404s, `/web/` works.
- Astro dev HMR sometimes serves stale scoped CSS; restart with `astro dev stop && astro dev --background`.
- `src/pages/web.astro` imports most components with literal props; deleting or renaming a component breaks it.

## Download card: TestFlight, no waitlist (2026-10-26)

Gabriel's call (2026-10-24): the waitlist form is gone; the card's button opens the public TestFlight beta (`TESTFLIGHT_URL` in `src/config.ts`, `cta.beta` + `cta.betaNote` "Free on TestFlight. App Store soon."). Set `APP_STORE_URL` and the button becomes "Download on the App Store" with no note. The header CTA still scrolls to the card. The `public.waitlist` table, its welcome mail and the unsubscribe function stay on Supabase for the people already on it; nothing on the site writes to it any more.

`/get/` (vercel.json, 2026-10-29) is the app's "Send Near to them" link (`AppLinks.get` in the app): a temporary redirect to the TestFlight beta today. At launch point it at the App Store page (same file, `destination`); the app never needs a new build for the switch.

## Open items

- App Store URL empty in `src/config.ts` (CTA links to TestFlight). The launch mail to the old waitlist is still to be written.
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
- The icon in the mail is `near-mark-128.png` in the public `brand` storage bucket (mail clients drop data: URIs): the bare mark, transparent, 128px, no rounded corners.
- The CTA confirmation line says "check your inbox" rather than "we'll email you once", because the welcome mail made the old promise false. The launch mail is still the only other one planned — the welcome email says so.
- Resend free tier is 3,000/month but only **100/day**: a big traffic spike drops the overflow. The provider call is one `fetch` in `index.ts`, so swapping to SES or Brevo is a one-function change.

## Contact page (`/contact/`)

Two columns: copy + email on the left, form on the right (`ContactForm.astro`, `src/scripts/contact.ts`). Fields: name, email, phone (iPhone / Android / other), why Near (four fixed keys: `scroll`, `ads`, `curious`, `data`), message. Keys are stored, labels are localized, so don't rename a key without a migration.

- Same shape as the waitlist: browser posts to PostgREST (`public.contact_messages`, insert-only RLS for `anon`), a trigger hands the row to `pg_net`, the `contact-notify` Edge Function mails it to `hello@nearapp.social` via Resend with `reply_to` set to the sender. Vault secrets: `contact_notify_url`, `contact_notify_token`. Function secrets: `RESEND_API_KEY`, `CONTACT_WEBHOOK_SECRET`, optionally `CONTACT_FROM` / `CONTACT_TO`.
- Deploy: `supabase db push`, `supabase functions deploy contact-notify`, `supabase secrets set …`, then the two `vault.create_secret` calls at the bottom of the migration.
- Honeypot `company` field, same as the waitlist. No rate limit beyond the check constraints (message ≤ 2000 chars).
- The footer "Contact" link goes to this page, not to `mailto:`. The email is still shown on the page for people who prefer their own mail app.

## The app, as it really is (read before making any claim about it)

Gabriel's rule (2026-09-30): never guess what the app does or looks like. Look it up first. Everything below was read from the app repo on 2026-10-17; re-check the source when it matters, the app moves fast.

**Where to look** (`~/projects/near`, Swift/UIKit, iOS 17+, XcodeGen, bundle `com.nearsocial.app`, everything on `main`)
- `CLAUDE.md`, `docs/status.md` (what is built), `docs/design.md` (looks, every number), `docs/backend.md` (schema, media, auth, account deletion), `supabase/migrations/`.
- The app's own Claude memory: `~/.claude/projects/-Users-gabrielpereira-projects-near/memory/*.md`. Its rule `website-mirrors-app`: an app change this site states gets edited here in the same pass (all seven dictionaries, bump `LEGAL_UPDATED`).
- Product spec `specs.md` here is old (MVP). Trust the app repo over it.

**What exists today**
- Sign in with Apple, Google, or email and a password (an 8-digit code confirms a new address). Settings → Privacy & security → Sign-in methods connects or removes Apple/Google and changes the email or password. Profile steps: name, photo, bio, birthday (13+), then a gate until the first friend. Tabs: Feed, Messages, Profile.
- Add a friend: Messages → "Add New Friend" opens the discovery space; people right next to you appear as cards (Bluetooth, only while the space is open; a random token rotated every 10 min, server-side 15 min expiry, no GPS); both hold each other's card for a second, friendship. The first friend gets its own moment ("Congratulations!") before the app opens.
- Posts: camera, gallery, editor (crop, filters, text), composer; up to 15 photos or videos, tag up to 10 friends, optional place name; drafts kept on the phone; your own post can be archived (only you see it) or deleted. Comments (text, photo, GIF/sticker via KLIPY, voice), no likes. Report and block everywhere (reviewed within 24 h). Delete account: hidden at once, purged after 30 days, sign back in to cancel.
- Stories: 24 hours, every friend sees them, "Seen by N" shows who watched, a reply opens the chat. Up to 10 items. After the 24 hours every story stays in its author's archive (only they see it, until they delete it); Highlights pinned to the profile are seen by friends.
- Messages: text, photos, videos (up to 60 s), voice messages (up to 60 s), GIFs and stickers, story replies, unsend for both.
- Profile: name, posts and friends counts (the count opens the list: all your friends, or only the ones in common on a friend's profile), bio, highlights, a three-column square grid. Your own profile has a gear top-right; the Archive (Posts | Stories) opens from Settings.
- Media on Cloudflare R2: HEIC in `t` 400 px and `d` 2048 px (the largest size; nothing is kept at the camera's full resolution), videos 1080p at up to 60 fps and up to 60 s in posts, stories and messages, a blurred ThumbHash preview, a disk cache on the phone (800 MB), short-lived signed URLs only for friends. Pinch-to-zoom on posts.
- **Not built:** custom app icons, editing a post, deleting your own comment, read receipts, choosing a story's length or audience. Never claim these.

**Look and feel** (for mock screens; full rules in the app's `docs/design.md`)
- Outfit for titles and buttons, SF Pro for body. Near-black text `#1C1C1E` (nothing is pure black), secondary gray `#8E8E93`, orange `#FF9300` (the logo's, every orange fill), dark mode is dark gray not black. Liquid Glass circle controls. Profile pictures are plain circles, never rings or rims (the Feed's story rail is the one exception: rounded squares with a rim).
- Feed: no nav bar, the header scrolls with the posts (new post left, quiet logo centre, bell right), the story rail under it. Post = 32 pt round avatar, name with the place under it, "…"; square photo edge to edge with square page dots; name + caption; the tagged line; "3 comments" with a bubble; the time. Ends with "You're all caught up."
- Buttons: exactly three (dark capsule, quiet gray capsule, plain link). Copy: sentence case, short, no "no this, no that" lists.

**Quality:** everyone gets the same thing: photos at 2048 px on the long edge, video at 1080p up to 60 fps, no quality drop on posts few people see (Instagram caps photos at 1080 px and lowers it on low-view videos). Never say "full resolution" or "every pixel": photos stop at 2048 px.

## Near Spark: gone (2026-10-29)

Near Spark, the old subscription, no longer exists anywhere: off the site since 2026-10-24 (Gabriel: "remove Near Spark completely from the website"), out of the app on 2026-10-29, and the privacy and terms pages lost their Near Spark parts the same day. There is no in-app purchase, no plan and no price. Messages, story replies, voice comments, the story archive and Highlights are simply features: describe them plainly, and never write "everything is free", "free for everyone", "no paywall" or anything like it (Gabriel's rule). Only the old `/near-plus/` and `/near-spark/` redirects remain (astro.config + vercel.json); keep them.

## Legal pages (`/privacy/`, `/terms/`)

Both render `Legal.astro` from `dict.privacy` / `dict.terms` (title, intro, sections with optional bullet `items`, contact line). `LEGAL_UPDATED` in `src/config.ts` is the "last updated" date shown on both; bump it when either page's copy changes. The copy states facts from the app: sign-in with Apple, Google or email and a password (several can be linked), ephemeral nearby code over Bluetooth while Add New Friend is open (10 min rotation, 15 min TTL); a friendship needs both people holding each other's card for a second, no location for discovery, five iOS permissions (Bluetooth only while Add New Friend is open, camera + photos, microphone for video sound, location while using), stories store the photo/video and which friends watched it; friends see a story for 24 h, then it stays in an archive only its author sees until they delete it, and Highlights pinned to the profile are visible to friends, messages store text + sent/read times, friends' media, the friends list and your own profile row are cached on the phone (out of iCloud backups) until sign-out or the app is deleted, Supabase / Cloudflare (photo + video storage and delivery) / Apple (sign-in) / Google / Resend / KLIPY (GIF search) as the only third parties, no analytics SDK anywhere, Settings → Delete account signs you out, hides you from everyone and deletes everything after a 30-day grace (sign back in to cancel; emails at scheduling, a few days before and on completion; the optional leaving reason is kept without the account; Apple access revoked at the end). If the app changes any of that, change the page. Age floor is 13 (Gabriel's call to revisit). Both pages open with the operator, `LEGAL_ENTITY` in `src/config.ts`, rendered wherever a string says `{entity}` (privacy: "Who's responsible for your data", terms: "Who we are", in all seven).

## Contact address (was dead once)

`CONTACT_EMAIL` in `src/config.ts` is shown in the footer and on the privacy page. A domain having a website does not give it mail: until 2026-09-12 the address was `hello@near.app`, a placeholder on a domain someone else owns with no MX record, so every mail sent to it hard-bounced and the sender saw a dead address. Before changing the address to a new domain, check `dig MX <domain>` returns something. Today it is `hello@nearapp.social`: Porkbun's free email forwarding (MX `fwd1/fwd2.porkbun.com`, SPF `include:_spf.porkbun.com`) delivering to `nearapp.social@gmail.com`. There is no mailbox, so nothing expires, but replies from Gmail go out as the Gmail address unless "Send mail as" is set up with Resend SMTP (`smtp.resend.com:465`, user `resend`, password = API key) once the domain is verified there. The same address is the app's feedback address in `~/projects/near/Near/App/AppLinks.swift`, so both break together.

## Sources behind published claims

**Quality: "same quality for everyone" vs Instagram** (noted 2026-09-30; the "Sharp for everyone" card and the Near Spark table that used it are gone; still the "Instagram, but worse" angle in `social-plan.md`)
- Instagram tops photos at 1080 px wide with heavy JPEG recompression; Stories/Reels are specced at 1080p but re-encoded (H.264, ~3.5 Mbps recommended) and are often served at 720p or lower.
- Adam Mosseri (head of Instagram) said video quality is tied to view count: posts with few views get lower quality to save bandwidth. Near shows every post at the same quality, whoever you are.
- Near: photos 2048 px on the long edge (`PhotoExporter.displayMax` in the app; was 1600 on the old `stories` branch), video 1080p at up to 60 fps, HEVC at 6 Mbps (≈ 12 Mbps H.264, 2–3× Instagram), up to 60 s.
- Sources: https://help.instagram.com/1631821640426723/ · https://www.notebookcheck.net/Instagram-ties-video-quality-to-view-count.909654.0.html · https://www.redsocial.com/blog/why-does-instagram-lower-quality-easy-ways-to-fix-resolution/ — re-check the numbers before pushing; the site only claims the 1080 px photo cap and lower quality on low-view videos.

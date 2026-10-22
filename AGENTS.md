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
3. Header nav: link in `Header.astro` via `anchor("id")` **and** a `nav.*` label in all seven dictionaries. Nav links must sit in page order — that has been wrong before. **Four links is the ceiling**: the header caps at 1024px and the nav is centred between the wordmark and the lang switch + CTA, so it has ~490px in es/fr (measured 2026-09-30; five links were 600–650px and wrapped). Today: How it works · Also in Near · What we believe · Near Spark (its own page). Adding a link means dropping one.
4. `.h-section` + `.lede mt-4` at the top inside `max-w-xl`, `data-reveal` on text, `data-reveal="pop"` on drawings. The `.h-section` renders `dict.nav.*`, not a title of its own. No eyebrows, no "01/02" numbers above titles (Gabriel: "none of this"; removed 2026-10-12).
5. Any new client behaviour: module in `src/scripts/`, registered in `src/scripts/main.ts`.
6. Optional: a `GallerySection` in `src/pages/web.astro` (dev gallery, also deployed at `/web/`).

**Copy change**
- Every string lives in `src/i18n/{en,pt,es,fr,de,it,ru}.ts`. `Dictionary` is the type of `en.ts`, so a shape change must land in all seven or the build fails.
- Tone: short, slightly playful, second person. pt is Brazilian (você), es is Spain (tú/vosotros), fr/de/it/ru informal (tu/du/tu/ты). ru avoids gendered past tense ("ты видел/видела") so it reads right for everyone.
- Localize, don't translate: each language uses what a native speaker would actually say ("Ran into a friend?" for "Encontrou um amigo?"). Natural, not slangy. Never describe a mechanic the reader can't picture ("tap within 30 seconds").
- Outfit has no Cyrillic, so `--font-sans` falls back to Onest for Russian glyphs. A new non-Latin language needs a fallback font the same way.
- A section is named once, in `nav.*`, and the heading and the header link both read it ("Also in Near"). Don't give a section its own `title` string — the two drifted apart when they were separate. The CTA card keeps its own statement title ("Go see your friends.").

**New drawing**
- Drop the PNG in `drawings-src/`, run `node scripts/normalize-drawings.mjs`, use `<Drawing name="file" size={…} class="w-[…px]" />`.
- Hero never uses `actually`, `confused`, `old`. Hero characters are positioned by hand in `Hero.astro` (percent of the hero); when Gabriel sends new positions, replace the lines verbatim.

**Stacked screens** (`FeatureStack.astro`)
- One generic component: heading, intro, features, prev/next labels, and the screens as children (`.rs-card` with `data-card` / `data-pos`). Used for "Also in Near" (`AlsoScreens.astro`); `roadmap.ts` drives every `[data-roadmap]` on the page. Arrow labels are `dict.stack.prev/next`. The "Coming next" roadmap section was removed 2026-10-12.

**Phone mock screens** (`PhoneScreens.astro`, `AlsoScreens.astro`, the cards in `Plus.astro`)
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
npm run build                 # must print "36 page(s) built" (the seven /near-plus/ redirect pages aren't counted)
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
- `NEAR_SPARK_PRICE` in `src/config.ts`: US and Brazil match the app's StoreKit file; euro and rouble mirror the US numbers as placeholders. Replace with App Store Connect's per-storefront prices before launch.
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
- `CLAUDE.md`, `docs/status.md` (what is built), `docs/design.md` (looks, every number), `docs/backend.md` (schema, media, auth, Near Spark, account deletion), `supabase/migrations/`, `StoreKit/Near.storekit` (prices).
- The app's own Claude memory: `~/.claude/projects/-Users-gabrielpereira-projects-near/memory/*.md`. Its rule `website-mirrors-app`: an app change this site states gets edited here in the same pass (all seven dictionaries, bump `LEGAL_UPDATED`).
- Product spec `specs.md` here is old (MVP). Trust the app repo over it.

**What exists today**
- Sign in with Apple, Google, or email and a password (an 8-digit code confirms a new address). Settings → Privacy & security → Sign-in methods connects or removes Apple/Google and changes the email or password. Profile steps: name, photo, bio, birthday (13+), then a gate until the first friend. Tabs: Feed, Messages, Profile.
- Add a friend: Messages → "Add New Friend" opens the discovery space; nearby people appear as cards (Bonjour/AWDL, a random token rotated every 10 min, server-side 15 min expiry, no GPS), both tap within 30 s, friendship.
- Posts: camera, gallery, editor (crop, filters, text), composer; up to 15 photos or videos, tag up to 10 friends, optional place name; drafts kept on the phone; your own post can be archived (only you see it, free) or deleted. Comments (text, photo, GIF/sticker via KLIPY, voice), no likes. Report and block everywhere (reviewed within 24 h). Delete account: hidden at once, purged after 30 days, sign back in to cancel.
- Stories: 24 hours, every friend sees them, "Seen by N" shows who watched, a reply opens the chat. Up to 10 items.
- Messages: text, photos, videos, voice messages (up to 60 s), GIFs and stickers, story replies, unsend for both. Sending needs Near Spark; reading is free.
- Profile: name, posts and friends counts (the count opens the list: all your friends, or only the ones in common on a friend's profile), bio, highlights, a three-column square grid. Your own profile has a gear and a spark circle top-right; the Archive (Posts | Stories) opens from Settings.
- Media on Cloudflare R2: HEIC in `t` 400 px, `d` 2048 px, `f` 4032 px (Near Spark), a blurred ThumbHash preview, a disk cache on the phone (800 MB), short-lived signed URLs only for friends. Pinch-to-zoom on posts.
- **Not built:** custom app icons, push notifications (the bell shows samples), editing a post, deleting your own comment, read receipts, choosing a story's length or audience. Never claim these.

**Look and feel** (for mock screens; full rules in the app's `docs/design.md`)
- Outfit for titles and buttons, SF Pro for body. Near-black text `#1C1C1E` (nothing is pure black), secondary gray `#8E8E93`, orange `#FF9300` (the logo's, every orange fill), dark mode is dark gray not black. Liquid Glass circle controls. Profile pictures are plain circles, never rings or rims (the Feed's story rail is the one exception: rounded squares with a rim).
- Feed: no nav bar, the header scrolls with the posts (new post left, quiet logo centre, bell right), the story rail under it. Post = 32 pt round avatar, name with the place under it, "…"; square photo edge to edge with square page dots; name + caption; the tagged line; "3 comments" with a bubble; the time. Ends with "You're all caught up."
- Buttons: exactly three (dark capsule, quiet gray capsule, plain link). Copy: sentence case, short, no "no this, no that" lists. A small orange hand-drawn spark follows the name of anyone with Near Spark.

**Near Spark** (the subscription; called Near+ until 2026-10-14, product ids unchanged)
- Two plans, `com.nearsocial.app.plus.monthly` / `.yearly`: US $3.99 a month or $29.99 a year; Brazil R$ 9,90 / R$ 99,90; one week free on both for new subscribers; Apple Small Business Program (15%).
- Perks, in the app's order (`SparkPerksListView.swift`): **messages** (texts, photos, videos, voice messages, GIFs, story replies and voice comments; reading and listening are always free), **video** 60 fps and up to 3 min in posts and stories, 1 min in messages (free: 30 fps, 1 min posts, 15 s stories and messages), **photos** up to 4032 px (free: 2048 px), **story archive and Highlights**. The archive of posts is free.
- Free days: being the first friend of someone new to Near gives 3 Spark days, up to 3 times (both get them when both are new). Stated in the Terms only; App Store guideline 3.1.1 is still being weighed, so don't headline it.
- "Same quality for everyone" means: no 1080 px cap and no quality drop on posts few people see (Instagram does both). The 2048 vs 4032 px difference is real, so never say "full quality for everyone".

## Near Spark page (`/near-spark/`, `Plus.astro`, redone 2026-10-02, reworked 2026-10-18)

Gabriel's brief: "quatro coisas que importam de verdade", short and simple, beautiful, no boring table up top. Structure, top to bottom:
1. Title "Near Spark" ("Spark" in accent) and one line (`plus.intro`).
2. The four features in a borderless 2x2 grid (one column on phones): visual on top in a stage of one height so the titles line up, then title + one line (`plus.features[4]`, fixed order: chat, photos and video, archive and highlights, voice comments). No eyebrow labels. Visuals are hand-built in the component with the Unsplash people/photos: a chat card (a reply to a story), the photo comparison (Instagram's 1080 px frame drawn inside the 4032 px one, at scale, 27% wide), a profile card with highlight rings + archive grid, and a comments card with two voice clips drawn like the app's pill (dark play disc, bars, length) and a composer with the mic. Labels inside the visuals are `plus.labels`.
3. Plans (`plus.plans`): monthly and yearly side by side, yearly tinted with the saving pill and its per-month equivalent; then `trial` ("first week free, on both") and `soon` ("coming soon to the App Store"). **No buy button** until `APP_STORE_URL` is set.
4. "And the rest" (`plus.more`): compact Free vs Near Spark table (`PlusRow`: `true` check, `false` dash, string text), same nine rows in the same order in all seven dictionaries. Photos are stated as resolution (2048 vs 4032 px), video as fps and length.

Prices: `NEAR_SPARK_PRICE` in `src/config.ts` is `{ monthly, yearly, yearlyPerMonth, saving }` per locale.
"Spark" is drawn in the accent colour everywhere (header, footer, title, table head): the last word of `dict.nav.plus`. The link is last in the header nav and in the footer. `/near-plus/` (and its six locale copies) redirect here: Astro `redirects` in `astro.config.mjs` (meta refresh pages) plus a real 308 in `vercel.json`.

## Legal pages (`/privacy/`, `/terms/`)

Both render `Legal.astro` from `dict.privacy` / `dict.terms` (title, intro, sections with optional bullet `items`, contact line). `LEGAL_UPDATED` in `src/config.ts` is the "last updated" date shown on both; bump it when either page's copy changes. The copy states facts from the app: sign-in with Apple, Google or email and a password (several can be linked), ephemeral nearby code over Bluetooth while Add New Friend is open (10 min rotation, 15 min TTL); a friendship needs both people holding each other's card for a second, no location for discovery, five iOS permissions (Bluetooth only while Add New Friend is open, camera + photos, microphone for video sound, location while using), stories store the photo/video and which friends watched it until expiry, messages store text + sent/read times, friends' media, the friends list and your own profile row are cached on the phone (out of iCloud backups) until sign-out or the app is deleted, Supabase / Cloudflare (photo + video storage and delivery) / Apple (sign-in and Near Spark payments, we only see subscription status) / Google / Resend / KLIPY (GIF search) as the only third parties, no analytics SDK anywhere, Near Spark terms (monthly or yearly via App Store, first week free, auto-renews, cancel ≥ 24 h before renewal in Apple ID settings, Apple handles refunds, deleting the account doesn't cancel it), Settings → Delete account signs you out, hides you from everyone and deletes everything after a 30-day grace (sign back in to cancel; emails at scheduling, a few days before and on completion; the optional leaving reason is kept without the account; Apple access revoked at the end). If the app changes any of that, change the page. Age floor is 13 (Gabriel's call to revisit). Both pages open with the operator, `LEGAL_ENTITY` in `src/config.ts`, rendered wherever a string says `{entity}` (privacy: "Who's responsible for your data", terms: "Who we are", in all seven).

## Contact address (was dead once)

`CONTACT_EMAIL` in `src/config.ts` is shown in the footer and on the privacy page. A domain having a website does not give it mail: until 2026-09-12 the address was `hello@near.app`, a placeholder on a domain someone else owns with no MX record, so every mail sent to it hard-bounced and the sender saw a dead address. Before changing the address to a new domain, check `dig MX <domain>` returns something. Today it is `hello@nearapp.social`: Porkbun's free email forwarding (MX `fwd1/fwd2.porkbun.com`, SPF `include:_spf.porkbun.com`) delivering to `nearapp.social@gmail.com`. There is no mailbox, so nothing expires, but replies from Gmail go out as the Gmail address unless "Send mail as" is set up with Resend SMTP (`smtp.resend.com:465`, user `resend`, password = API key) once the domain is verified there. The same address is the app's feedback address in `~/projects/near/Near/App/AppLinks.swift`, so both break together.

## Sources behind published claims

**Quality: "same quality for everyone" vs Instagram** (noted 2026-09-30; now the "Sharp for everyone" card in Also in Near and the last row of the Near Spark table, and the "Instagram, but worse" angle in `social-plan.md`)
- Instagram tops photos at 1080 px wide with heavy JPEG recompression; Stories/Reels are specced at 1080p but re-encoded (H.264, ~3.5 Mbps recommended) and are often served at 720p or lower.
- Adam Mosseri (head of Instagram) said video quality is tied to view count: posts with few views get lower quality to save bandwidth. Near shows every post at the same quality, whoever you are.
- Near's free tier: photos 2048 px on the long edge (`PhotoExporter.displayMax` in the app; was 1600 on the old `stories` branch), video 1080p HEVC at 6 Mbps (≈ 12 Mbps H.264, 2–3× Instagram). Near Spark: 1080p60 and 4032 px photos.
- Sources: https://help.instagram.com/1631821640426723/ · https://www.notebookcheck.net/Instagram-ties-video-quality-to-view-count.909654.0.html · https://www.redsocial.com/blog/why-does-instagram-lower-quality-easy-ways-to-fix-resolution/ — re-check the numbers before pushing; the site only claims the 1080 px photo cap and lower quality on low-view videos.

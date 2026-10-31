// Renders the link-preview image (Open Graph / Twitter card) for every locale: public/og/<locale>.png, 1200×630.
// Usage: node scripts/og.mjs   (needs Chrome installed; uses playwright-core from PLAYWRIGHT_CORE or NODE_PATH)
import { createRequire } from "node:module";
import { readFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE ?? "playwright-core");

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "og");
const locales = ["en", "pt", "es", "fr", "de", "it", "ru"];

// Everything is inlined as data: URIs: a page set with setContent() lives on about:blank and can't load file://.
const mime = { woff2: "font/woff2", png: "image/png", webp: "image/webp" };
const dataUri = async (p) => `data:${mime[p.split(".").pop()]};base64,${(await readFile(path.join(ROOT, p))).toString("base64")}`;
const font = (p) => dataUri(path.join("node_modules", p));
const img = dataUri;

// Pull hero taglines straight from the dictionaries (they are plain TS objects; a regex is enough).
async function tagline(locale) {
  const src = await readFile(path.join(ROOT, "src", "i18n", `${locale}.ts`), "utf8");
  const m = src.match(/hero:\s*{[^}]*?tagline:\s*"([^"]+)"/s);
  if (!m) throw new Error(`no hero.tagline in ${locale}.ts`);
  return m[1];
}

const html = async (tag) => `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  @font-face { font-family: Outfit; src: url(${await font("@fontsource-variable/outfit/files/outfit-latin-wght-normal.woff2")}) format("woff2"); font-weight: 100 900; }
  @font-face { font-family: Onest; src: url(${await font("@fontsource-variable/onest/files/onest-cyrillic-wght-normal.woff2")}) format("woff2"); font-weight: 100 900; unicode-range: U+0400-04FF; }
  @font-face { font-family: Onest; src: url(${await font("@fontsource-variable/onest/files/onest-latin-wght-normal.woff2")}) format("woff2"); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { background: #fafafa; font-family: Outfit, Onest, sans-serif; color: #111111; position: relative; }
  .text { position: absolute; left: 96px; top: 50%; transform: translateY(-50%); }
  .wordmark { display: flex; align-items: center; gap: 0.4em; font-size: 148px; font-weight: 500; letter-spacing: -0.025em; line-height: 1; }
  .wordmark img { width: 0.85em; height: 0.85em; object-fit: contain; }
  .tag { margin-top: 28px; font-size: 44px; font-weight: 400; color: #6b6b6b; letter-spacing: -0.01em; max-width: 640px; line-height: 1.15; }
  .d { position: absolute; }
</style></head>
<body>
  <img class="d" src="${await img("src/assets/drawings/friends.png")}" style="width:230px; right:96px; top:70px">
  <img class="d" src="${await img("src/assets/drawings/happy.png")}" style="width:150px; right:330px; top:330px">
  <img class="d" src="${await img("src/assets/drawings/wohoo.png")}" style="width:130px; right:120px; bottom:60px">
  <div class="text">
    <div class="wordmark"><img src="${await img("public/near-mark.webp")}">Near</div>
    <div class="tag">${tag}</div>
  </div>
</body></html>`;

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const locale of locales) {
  await page.setContent(await html(await tagline(locale)), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const file = path.join(OUT, `${locale}.png`);
  await page.screenshot({ path: file, type: "png" });
  const { size } = await stat(file);
  console.log(`${locale}.png  ${(size / 1024).toFixed(0)} KB`);
}
await browser.close();

// Normalizes hand-drawn PNGs: uniform ink color, matched darkness, trimmed padding.
// Usage: node scripts/normalize-drawings.mjs
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "drawings-src";
const OUT = "src/assets/drawings";
const INK = { r: 17, g: 17, b: 17 };
const PAD = 12;
const MAX_SIZE = 900;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const { data, info } = await sharp(path.join(SRC, file))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const px = width * height;
  const ink = new Uint8Array(px);

  // ink = alpha * darkness; captures both faint alpha and gray strokes
  for (let i = 0; i < px; i++) {
    const o = i * channels;
    const lum = 0.299 * data[o] + 0.587 * data[o + 1] + 0.114 * data[o + 2];
    const dark = 1 - lum / 255;
    ink[i] = Math.round(data[o + 3] * dark);
  }

  // scale so the 98th percentile of visible ink hits full opacity
  const visible = Array.from(ink).filter((v) => v > 8).sort((a, b) => a - b);
  const p98 = visible[Math.floor(visible.length * 0.98)] || 255;
  const gain = 255 / p98;

  const out = Buffer.alloc(px * 4);
  for (let i = 0; i < px; i++) {
    let a = Math.min(255, ink[i] * gain);
    a = 255 * Math.pow(a / 255, 0.85); // slight crispening
    out[i * 4] = INK.r;
    out[i * 4 + 1] = INK.g;
    out[i * 4 + 2] = INK.b;
    out[i * 4 + 3] = Math.round(a);
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 10 })
    .extend({ top: PAD, bottom: PAD, left: PAD, right: PAD, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: false })
    .toFile(path.join(OUT, file));

  console.log(`${file}: p98=${p98} gain=${gain.toFixed(2)}`);
}

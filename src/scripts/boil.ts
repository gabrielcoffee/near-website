// Line boil: cycles the SVG displacement filter frame on <html>; CSS applies it to in-view drawings.
const FRAMES = [0, 2, 1, 3];
const INTERVAL_MS = 110;
const MIN_INTERVAL_MS = 60; // a frame every 60ms is already frantic; never go below this

/**
 * Read `--boil-interval` as milliseconds.
 *
 * Careful: the value has to be parsed WITH its unit. The build minifies `110ms` to `.11s`, so a
 * plain parseFloat gives 0.11 and the wobble runs at ~200 frames a second (this bug shipped once).
 * Anything unparseable falls back to the default, and the result is floored at MIN_INTERVAL_MS.
 */
function readMs(raw: string): number {
  const m = /^\s*([\d.]+)\s*(ms|s)?\s*$/.exec(raw);
  if (!m) return INTERVAL_MS;
  const n = parseFloat(m[1]);
  if (!isFinite(n) || n <= 0) return INTERVAL_MS;
  return Math.max(MIN_INTERVAL_MS, m[2] === "s" ? n * 1000 : n);
}

export function initBoil() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const drawings = document.querySelectorAll<HTMLElement>(".drawing");
  if (!drawings.length) return;

  drawings.forEach(wireInteractions);
  if (reduced) return;

  let inView = 0;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const was = e.target.classList.contains("in-view");
        e.target.classList.toggle("in-view", e.isIntersecting);
        if (e.isIntersecting && !was) inView++;
        if (!e.isIntersecting && was) inView--;
      }
    },
    { rootMargin: "15% 0px" },
  );
  drawings.forEach((d) => io.observe(d));

  const html = document.documentElement;
  let i = 0;
  html.dataset.boil = "0";
  const interval = () => readMs(getComputedStyle(html).getPropertyValue("--boil-interval"));
  const tick = () => {
    if (!document.hidden && inView > 0) {
      i = (i + 1) % FRAMES.length;
      html.dataset.boil = String(FRAMES[i]);
    }
    setTimeout(tick, interval());
  };
  setTimeout(tick, interval());
}

// What a character does when clicked. Dealt out at random once and pinned here, so a given
// drawing always reacts the same way. CSS for each lives under "Click reactions" in global.css.
// bounce / flip / spin play once; upside-down flips vertically and stays until the next click.
type Reaction = "bounce" | "flip" | "spin" | "upside-down";
const REACTIONS: Record<string, Reaction> = {
  happy: "bounce",
  tinyhappy: "bounce",
  wohoo: "bounce",
  hey: "bounce",
  toohappy: "bounce",
  back: "flip",
  cool: "flip",
  friends: "flip",
  ear: "flip",
  hearing: "flip",
  run: "spin",
  shoes: "spin",
  nose: "spin",
  actually: "spin",
  confused: "upside-down",
  random: "upside-down",
  old: "upside-down",
  fomo: "upside-down",
  ew: "upside-down",
};

function wireInteractions(el: HTMLElement) {
  // random direction + strength (0.6–1) of the hover tilt; magnitude comes from --drawing-tilt
  const sign = Math.random() > 0.5 ? 1 : -1;
  el.style.setProperty("--tilt-k", String(sign * (0.6 + Math.random() * 0.4)));

  const reaction = REACTIONS[el.dataset.drawing ?? ""] ?? "bounce";
  el.dataset.react = reaction;

  // Hover look is for real pointers only. On a touch screen `pointerenter` fires on tap and no
  // `pointerleave` ever follows, so the character would stay stuck in its hover state.
  el.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") el.classList.add("is-hot");
  });
  el.addEventListener("pointerleave", () => el.classList.remove("is-hot"));
  el.addEventListener("pointerdown", () => {
    if (reaction === "upside-down") {
      el.classList.toggle("is-upside-down"); // a transition, not an animation: it has to stay put
      return;
    }
    el.classList.remove("is-reacting");
    void el.offsetWidth; // restart animation
    el.classList.add("is-reacting");
  });
  el.addEventListener("animationend", () => el.classList.remove("is-reacting"));
}

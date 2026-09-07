// Home intro: "Near" sweeps up, then every character launches from the title to its place,
// then the header drops in. Timings live in global.css ("Intro"); this only computes flight vectors.
const DONE_MS = 1900;
const STAGGER_MS = 30;

export function initIntro(onDone: () => void) {
  const html = document.documentElement;
  if (!html.classList.contains("intro")) return onDone();

  const hero = document.querySelector<HTMLElement>("[data-parallax-root]");
  const title = hero?.querySelector<HTMLElement>(".hero-title");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || !title || reduced) {
    html.classList.remove("intro");
    return onDone();
  }

  // origin = center of the title
  const t = title.getBoundingClientRect();
  const cx = t.left + t.width / 2;
  const cy = t.top + t.height / 2;

  const flyFrom = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--fx", `${cx - (r.left + r.width / 2)}px`);
    el.style.setProperty("--fy", `${cy - (r.top + r.height / 2)}px`);
  };

  const edges = Array.from(hero.querySelectorAll<HTMLElement>(".edge")).filter((el) => el.offsetParent !== null);
  shuffle(edges).forEach((el, i) => {
    flyFrom(el);
    el.style.setProperty("--d", `${i * STAGGER_MS}ms`);
  });

  const go = () => requestAnimationFrame(() => requestAnimationFrame(() => html.classList.add("intro-go")));
  const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
  (fonts?.ready ?? Promise.resolve()).then(go, go);

  setTimeout(() => {
    html.classList.remove("intro", "intro-go");
    html.classList.add("intro-done");
    onDone();
  }, DONE_MS);
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** /web: replay the intro on demand. */
export function playIntro(onDone: () => void = () => {}) {
  const html = document.documentElement;
  html.classList.remove("intro-go", "intro-done");
  html.classList.add("intro");
  void html.offsetWidth; // apply start states before animating
  initIntro(onDone);
}

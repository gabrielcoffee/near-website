// Line boil: cycles the SVG displacement filter frame on <html>; CSS applies it to in-view drawings.
const FRAMES = [0, 2, 1, 3];
const INTERVAL_MS = 110;

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
  const interval = () => parseFloat(getComputedStyle(html).getPropertyValue("--boil-interval")) || INTERVAL_MS;
  const tick = () => {
    if (!document.hidden && inView > 0) {
      i = (i + 1) % FRAMES.length;
      html.dataset.boil = String(FRAMES[i]);
    }
    setTimeout(tick, interval());
  };
  setTimeout(tick, interval());
}

function wireInteractions(el: HTMLElement) {
  // random direction + strength (0.6–1) of the hover tilt; magnitude comes from --drawing-tilt
  const sign = Math.random() > 0.5 ? 1 : -1;
  el.style.setProperty("--tilt-k", String(sign * (0.6 + Math.random() * 0.4)));

  el.addEventListener("pointerenter", () => el.classList.add("is-hot"));
  el.addEventListener("pointerleave", () => el.classList.remove("is-hot"));
  el.addEventListener("pointerdown", () => {
    el.classList.remove("is-bouncing");
    void el.offsetWidth; // restart animation
    el.classList.add("is-bouncing");
  });
  el.addEventListener("animationend", () => el.classList.remove("is-bouncing"));
}

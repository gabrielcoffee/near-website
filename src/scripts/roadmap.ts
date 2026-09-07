// "Coming next": three app screens stacked like photos. Next sends the front card to the back
// (it lifts out, then settles behind); Previous brings the back card to the front the same way.
export function initRoadmap() {
  document.querySelectorAll<HTMLElement>("[data-roadmap]").forEach((root) => {
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));
    const texts = Array.from(root.querySelectorAll<HTMLElement>("[data-feature]"));
    const counter = root.querySelector<HTMLElement>("[data-counter]");
    const stack = root.querySelector<HTMLElement>("[data-stack]");
    const n = cards.length;
    if (n < 2) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let front = 0;
    let busy = false;

    const render = () => {
      cards.forEach((c, i) => {
        const pos = (i - front + n) % n;
        c.dataset.pos = String(pos);
        c.style.zIndex = String(n - pos);
        c.setAttribute("aria-hidden", pos === 0 ? "false" : "true");
      });
      texts.forEach((t, i) => t.classList.toggle("is-active", i === front));
      if (counter) counter.textContent = `${front + 1} / ${n}`;
    };

    const go = (dir: 1 | -1) => {
      if (busy) return;
      const leaving = dir === 1 ? cards[front] : cards[(front - 1 + n) % n];
      if (reduced) {
        front = (front + dir + n) % n;
        render();
        return;
      }
      busy = true;
      leaving.classList.add("is-flying");
      leaving.style.zIndex = String(n + 1);
      window.setTimeout(() => {
        front = (front + dir + n) % n;
        leaving.classList.remove("is-flying");
        render();
        window.setTimeout(() => (busy = false), 420);
      }, 300);
    };

    root.querySelectorAll<HTMLElement>("[data-next]").forEach((b) => b.addEventListener("click", () => go(1)));
    root.querySelectorAll<HTMLElement>("[data-prev]").forEach((b) => b.addEventListener("click", () => go(-1)));
    stack?.addEventListener("click", () => go(1));
    stack?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    });

    render();
  });
}

// Hero characters drift a few pixels toward the pointer. Skipped on touch and reduced motion.
const MAX_PX = 10;

export function initParallax() {
  const root = document.querySelector<HTMLElement>("[data-parallax-root]");
  if (!root) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-depth]"));
  if (!layers.length) return;

  let targetX = 0;
  let targetY = 0;
  let ticking = false;

  const apply = () => {
    ticking = false;
    for (const el of layers) {
      const depth = Number(el.dataset.depth || 1);
      el.style.transform = `translate3d(${targetX * depth * MAX_PX}px, ${targetY * depth * MAX_PX}px, 0)`;
    }
  };

  root.addEventListener("pointermove", (e) => {
    const r = root.getBoundingClientRect();
    targetX = ((e.clientX - r.left) / r.width - 0.5) * 2;
    targetY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(apply);
    }
  });
  root.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
    requestAnimationFrame(apply);
  });
}

// Barely-there smooth scroll. Only on fine pointers, never under reduced motion.
// The instance is published on window so the wordmark can scroll to the top through it
// (see logo.ts); scrolling past Lenis with window.scrollTo fights its rAF loop.
declare global {
  interface Window {
    __lenis?: { scrollTo: (target: number) => void };
  }
}

export async function initSmoothScroll(enabled: boolean) {
  if (!enabled) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const { default: Lenis } = await import("lenis");
  const lenis = new Lenis({
    lerp: 0.2,
    duration: 0.6,
    smoothWheel: true,
    anchors: true, // header clearance comes from html { scroll-padding-top } + each section's scroll-margin
  });

  window.__lenis = lenis;

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

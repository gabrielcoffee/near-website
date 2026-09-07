// Barely-there smooth scroll. Only on fine pointers, never under reduced motion.
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

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

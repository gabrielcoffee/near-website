// Fade + slide elements in once when they enter the viewport. Siblings inside a group stagger.
export function initReveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!items.length) return;

  document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
    // only direct members stagger; a reveal nested inside another reveal inherits its parent's --i
    Array.from(group.querySelectorAll<HTMLElement>(":scope [data-reveal]"))
      .filter((el) => {
        const outer = el.parentElement?.closest("[data-reveal]");
        return !outer || !group.contains(outer);
      })
      .forEach((el, i) => el.style.setProperty("--i", String(i)));
  });

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  items.forEach((el) => io.observe(el));
}

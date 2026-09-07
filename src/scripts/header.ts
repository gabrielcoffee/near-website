// Header gains a shadow once the page scrolls; hero scroll hint fades out.
export function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const hint = document.querySelector<HTMLElement>("[data-scroll-hint]");
  if (!header) return;

  const update = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 16);
    hint?.classList.toggle("is-hidden", y > 40);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

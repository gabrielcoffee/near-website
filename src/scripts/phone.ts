// "How it works": the step nearest the viewport center drives which phone screen is shown.
// Scoped per section, so a phone without steps (e.g. on /web) is left alone.
export function initPhone() {
  document.querySelectorAll<HTMLElement>("[data-phone]").forEach((phone) => {
    const scope = phone.closest("section") ?? document;
    const steps = Array.from(scope.querySelectorAll<HTMLElement>("[data-step]"));
    if (!steps.length) return;

    const activate = (index: string) => {
      phone.dataset.active = index;
      steps.forEach((s) => s.classList.toggle("is-active", s.dataset.step === index));
    };
    activate(steps[0].dataset.step || "0");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) activate((e.target as HTMLElement).dataset.step || "0");
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    steps.forEach((s) => io.observe(s));
  });
}

// Language switch: the background layer grows from the button into the panel.
// Height of the open panel is measured from the list so the CSS can animate it.
export function initLangSwitch(storageKey: string) {
  document.querySelectorAll<HTMLElement>("[data-lang]").forEach((root) => {
    const toggle = root.querySelector<HTMLButtonElement>("[data-lang-toggle]");
    const menu = root.querySelector<HTMLElement>("[data-lang-menu]");
    if (!toggle || !menu) return;

    let closeTimer: ReturnType<typeof setTimeout> | undefined;

    const open = () => {
      clearTimeout(closeTimer);
      menu.hidden = false;
      root.style.setProperty("--lang-open-h", `${toggle.offsetHeight + menu.offsetHeight}px`);
      requestAnimationFrame(() => root.classList.add("is-open"));
      toggle.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      if (!root.classList.contains("is-open")) return;
      root.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      closeTimer = setTimeout(() => {
        if (!root.classList.contains("is-open")) menu.hidden = true;
      }, 300);
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      root.classList.contains("is-open") ? close() : open();
    });
    // Anything that takes attention elsewhere closes the menu: a press outside it or a scroll.
    document.addEventListener("pointerdown", (e) => {
      if (!root.contains(e.target as Node)) close();
    });
    window.addEventListener("scroll", close, { passive: true });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    menu.querySelectorAll<HTMLAnchorElement>("[data-lang-option]").forEach((a) => {
      a.addEventListener("click", () => {
        try {
          localStorage.setItem(storageKey, a.dataset.langOption || "en");
        } catch {}
      });
    });
  });
}

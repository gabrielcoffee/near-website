// Clicking the wordmark while already on its own page scrolls to the top instead of
// reloading. The href stays a real URL, so no-JS, middle-click and cmd-click still work.
export function initLogoScrollTop() {
  const links = document.querySelectorAll<HTMLAnchorElement>("a.wordmark[href]");

  for (const link of links) {
    link.addEventListener("click", (event) => {
      // Let the browser handle "open in a new tab/window" and non-primary buttons.
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.pathname !== location.pathname) return;

      event.preventDefault();
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });

      // Drop a leftover #section hash so the address bar matches where we landed.
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    });
  }
}

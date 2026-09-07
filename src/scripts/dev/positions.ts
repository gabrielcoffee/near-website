// /web only: drag, resize (corner handle or slider), rotate or remove hero characters,
// then print the `.edge` markup for Hero.astro (Code tab) or an instruction for an AI (Prompt tab).
const POS_CLASS = /^(left|right|top|bottom)-\[/;
const WIDTH_CLASS = /^((?:sm|md|lg|xl|2xl):)?w-\[(\d+(?:\.\d+)?)px\]$/;
const ROTATE_CLASS = /^(-?)rotate-\[(\d+(?:\.\d+)?)deg\]$/;
const STATE_CLASSES = new Set(["drawing", "in-view", "is-hot", "is-bouncing"]);
const HERO_FILE = "src/components/Hero.astro";
const MIN_W = 40;
const MAX_W = 400;

export function initPositionTool() {
  const hero = document.querySelector<HTMLElement>("[data-parallax-root]");
  const codeOut = document.querySelector<HTMLTextAreaElement>('[data-pos-output="code"]');
  const promptOut = document.querySelector<HTMLTextAreaElement>('[data-pos-output="prompt"]');
  const copyBtn = document.querySelector<HTMLButtonElement>("[data-pos-copy]");
  const resetBtn = document.querySelector<HTMLButtonElement>("[data-pos-reset]");
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-pos-tab]"));
  const outputs = Array.from(document.querySelectorAll<HTMLTextAreaElement>("[data-pos-output]"));

  // character editor (lives in the fixed panel)
  const editor = document.querySelector<HTMLElement>("[data-char-editor]");
  const nameEl = editor?.querySelector<HTMLElement>("[data-char-name]");
  const widthRange = editor?.querySelector<HTMLInputElement>("[data-char-width]");
  const widthNum = editor?.querySelector<HTMLInputElement>("[data-char-width-num]");
  const rotRange = editor?.querySelector<HTMLInputElement>("[data-char-rotate]");
  const rotNum = editor?.querySelector<HTMLInputElement>("[data-char-rotate-num]");
  const removeBtn = editor?.querySelector<HTMLButtonElement>("[data-char-remove]");
  if (!hero || !codeOut || !promptOut || !editor) return;

  let edges = Array.from(hero.querySelectorAll<HTMLElement>(".edge"));
  let activeTab = "code";
  let selected: HTMLElement | null = null;

  // corner handle for drag-resize
  const handle = document.createElement("div");
  handle.className = "edge-handle";
  handle.title = "Drag to resize";

  const render = () => {
    const code = edges.map((el) => toMarkup(el, hero)).join("\n");
    codeOut.value = code;
    promptOut.value = toPrompt(code);
  };

  const syncEditor = () => {
    if (!selected) return;
    const w = currentWidth(selected);
    const r = currentRotation(selected);
    if (widthRange) widthRange.value = String(w);
    if (widthNum) widthNum.value = String(w);
    if (rotRange) rotRange.value = String(r);
    if (rotNum) rotNum.value = String(r);
  };

  const select = (el: HTMLElement | null) => {
    selected?.classList.remove("is-selected");
    handle.remove();
    selected = el;
    if (!el) {
      editor.hidden = true;
      return;
    }
    el.classList.add("is-selected");
    el.appendChild(handle);
    // make sure the panel is open so the editor is visible
    const body = document.querySelector<HTMLElement>("[data-pos-body]");
    const toggle = document.querySelector<HTMLButtonElement>("[data-pos-toggle]");
    if (body?.hidden) {
      body.hidden = false;
      if (toggle) toggle.textContent = "Hide";
    }
    if (nameEl) nameEl.textContent = el.querySelector<HTMLElement>(".drawing")?.dataset.drawing ?? "?";
    editor.hidden = false;
    syncEditor();
  };

  const setWidth = (w: number) => {
    if (!selected) return;
    const clamped = Math.round(Math.min(MAX_W, Math.max(MIN_W, w)));
    const drawing = selected.querySelector<HTMLElement>(".drawing");
    if (drawing) drawing.style.width = `${clamped}px`;
    if (widthRange) widthRange.value = String(clamped);
    if (widthNum) widthNum.value = String(clamped);
  };

  const setRotation = (deg: number) => {
    if (!selected) return;
    const d = Math.round(Math.max(-180, Math.min(180, deg)));
    const drawing = selected.querySelector<HTMLElement>(".drawing");
    if (drawing) drawing.style.rotate = `${d}deg`;
    if (rotRange) rotRange.value = String(d);
    if (rotNum) rotNum.value = String(d);
  };

  widthRange?.addEventListener("input", () => setWidth(Number(widthRange.value)));
  widthNum?.addEventListener("input", () => setWidth(Number(widthNum.value)));
  rotRange?.addEventListener("input", () => setRotation(Number(rotRange.value)));
  rotNum?.addEventListener("input", () => setRotation(Number(rotNum.value)));
  [widthRange, widthNum, rotRange, rotNum].forEach((i) => i?.addEventListener("change", render));

  removeBtn?.addEventListener("click", () => {
    if (!selected) return;
    const el = selected;
    select(null);
    el.remove();
    edges = edges.filter((e) => e !== el);
    render();
  });

  // corner handle: resize by dragging
  let resizing = false;
  let startX = 0;
  let startW = 0;
  handle.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!selected) return;
    resizing = true;
    startX = e.clientX;
    startW = currentWidth(selected);
  });
  window.addEventListener("pointermove", (e) => {
    if (!resizing) return;
    setWidth(startW + (e.clientX - startX));
  });
  window.addEventListener("pointerup", () => {
    if (!resizing) return;
    resizing = false;
    render();
  });

  hero.addEventListener("pointerdown", (e) => {
    const t = e.target as HTMLElement;
    if (t === handle) return;
    const edge = t.closest<HTMLElement>(".edge");
    if (edge && edges.includes(edge)) select(edge);
    else select(null);
  });

  edges.forEach((el) => {
    // remember which side each character is anchored to, so output keeps the same anchor
    const classes = Array.from(el.classList);
    el.dataset.anchorX = classes.some((c) => c.startsWith("right-[")) ? "right" : "left";
    el.dataset.anchorY = classes.some((c) => c.startsWith("bottom-[")) ? "bottom" : "top";
    el.style.cursor = "grab";
    el.style.touchAction = "none";
    makeDraggable(el, hero, render);
  });

  render();

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.posTab || "code";
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      outputs.forEach((o) => (o.hidden = o.dataset.posOutput !== activeTab));
    });
  });

  copyBtn?.addEventListener("click", async () => {
    const src = outputs.find((o) => o.dataset.posOutput === activeTab) ?? codeOut;
    try {
      await navigator.clipboard.writeText(src.value);
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
    } catch {
      src.select();
    }
  });

  resetBtn?.addEventListener("click", () => location.reload());

  function makeDraggable(el: HTMLElement, stage: HTMLElement, onDrop: () => void) {
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    el.addEventListener("pointerdown", (e) => {
      if ((e.target as HTMLElement) === handle) return;
      const r = el.getBoundingClientRect();
      offsetX = e.clientX - r.left;
      offsetY = e.clientY - r.top;
      dragging = true;
      el.style.cursor = "grabbing";
      el.style.zIndex = "5";
      e.preventDefault();
    });
    window.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const s = stage.getBoundingClientRect();
      const x = ((e.clientX - s.left - offsetX) / s.width) * 100;
      const y = ((e.clientY - s.top - offsetY) / s.height) * 100;
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.right = "auto";
      el.style.bottom = "auto";
    });
    window.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = "grab";
      el.style.zIndex = "";
      onDrop();
    });
  }

  /** Largest width in the drawing's classes (the desktop width). */
  function baseWidth(drawing: HTMLElement): number {
    let max = 0;
    for (const c of Array.from(drawing.classList)) {
      const m = c.match(WIDTH_CLASS);
      if (m) max = Math.max(max, Number(m[2]));
    }
    return max || Math.round(drawing.getBoundingClientRect().width);
  }

  function currentWidth(edge: HTMLElement): number {
    const drawing = edge.querySelector<HTMLElement>(".drawing");
    if (!drawing) return 100;
    const inline = parseFloat(drawing.style.width);
    return Number.isFinite(inline) && inline > 0 ? Math.round(inline) : baseWidth(drawing);
  }

  function currentRotation(edge: HTMLElement): number {
    const drawing = edge.querySelector<HTMLElement>(".drawing");
    if (!drawing) return 0;
    const inline = parseFloat(drawing.style.rotate);
    if (Number.isFinite(inline)) return Math.round(inline);
    for (const c of Array.from(drawing.classList)) {
      const m = c.match(ROTATE_CLASS);
      if (m) return (m[1] ? -1 : 1) * Number(m[2]);
    }
    return 0;
  }

  function toMarkup(el: HTMLElement, stage: HTMLElement): string {
    const s = stage.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const ax = el.dataset.anchorX;
    const ay = el.dataset.anchorY;
    const x = ax === "right" ? ((s.right - r.right) / s.width) * 100 : ((r.left - s.left) / s.width) * 100;
    const y = ay === "bottom" ? ((s.bottom - r.bottom) / s.height) * 100 : ((r.top - s.top) / s.height) * 100;

    const rest = Array.from(el.classList).filter((c) => c !== "edge" && c !== "is-selected" && !POS_CLASS.test(c));
    const depth = el.dataset.depth ?? "1";
    const pos = `${ax}-[${x.toFixed(1)}%] ${ay}-[${y.toFixed(1)}%]`;
    const cls = ["edge", pos, ...rest].join(" ");
    return `<div class="${cls}" data-depth="${depth}">${drawingTag(el)}</div>`;
  }

  /** `<Drawing … />` for the drawing inside a container, with width classes rescaled and rotation applied. */
  function drawingTag(container: HTMLElement): string {
    const drawing = container.querySelector<HTMLElement>(".drawing");
    const img = container.querySelector<HTMLImageElement>("img");
    const name = drawing?.dataset.drawing ?? "?";
    let classes = Array.from(drawing?.classList ?? []).filter((c) => !STATE_CLASSES.has(c) && !ROTATE_CLASS.test(c));
    let size = Number(img?.getAttribute("width") ?? 120);
    if (drawing) {
      const base = baseWidth(drawing);
      const target = currentWidth(container);
      if (base && target !== base) {
        const f = target / base;
        classes = classes.map((c) => {
          const m = c.match(WIDTH_CLASS);
          return m ? `${m[1] ?? ""}w-[${Math.round(Number(m[2]) * f)}px]` : c;
        });
        size = target;
      }
    }
    const rot = currentRotation(container);
    if (rot !== 0) classes.push(rot < 0 ? `-rotate-[${Math.abs(rot)}deg]` : `rotate-[${rot}deg]`);
    return `<Drawing name="${name}" size={${size}} class="${classes.join(" ")}" eager />`;
  }

  function toPrompt(code: string): string {
    return [
      `Update the hero characters in ${HERO_FILE}.`,
      ``,
      `Inside the edge-characters layer (the div right after the "<!-- Edge characters -->" comment), replace every <div class="edge ..."> line with exactly these lines, in this order. Characters not listed here were removed on purpose, so delete their lines:`,
      ``,
      code,
      ``,
      `Rules:`,
      `- Change nothing else in the file: keep the title, tagline, scroll hint and styles as they are.`,
      `- Keep the classes, sizes, data-depth values and Drawing props exactly as written above.`,
      `- Positions are percentages of the hero section, so no other breakpoints or units are needed.`,
      `- Run npm run build afterwards and confirm it passes.`,
    ].join("\n");
  }
}

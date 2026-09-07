// /web only: sliders + presets bound to CSS variables (and the SVG boil strengths).
// Changes apply to this page and to the live-preview iframe; changed values print as CSS to paste.
const THEME_PREFIXES = ["--color-", "--radius-", "--font-"];

type Change = { value: string; kind: string };

export function initTweaks() {
  const root = document.documentElement;
  const cssOut = document.querySelector<HTMLTextAreaElement>('[data-pos-output="css"]');
  const inputs = Array.from(document.querySelectorAll<HTMLInputElement>("[data-tweak]"));
  const iframe = document.querySelector<HTMLIFrameElement>("[data-preview]");
  if (!inputs.length) return;

  const changed = new Map<string, Change>();
  const defaults = new Map<string, string>();

  // ---- reading / applying ----
  const boilSel = (kind: string) => `[id^="boil-${kind === "boil-idle" ? "s" : "h"}-"] feDisplacementMap`;

  const readCurrent = (name: string, kind: string): string => {
    if (kind === "boil-idle" || kind === "boil-hot") {
      return document.querySelector(boilSel(kind))?.getAttribute("scale") ?? "0";
    }
    const raw = getComputedStyle(root).getPropertyValue(name).trim();
    if (kind === "color") return raw.startsWith("#") ? raw : toHex(raw);
    return String(parseFloat(raw) || 0);
  };

  const docs = (): Document[] => {
    const list = [document];
    try {
      if (iframe?.contentDocument?.documentElement) list.push(iframe.contentDocument);
    } catch {}
    return list;
  };

  const applyValue = (name: string, kind: string, valueWithUnit: string) => {
    for (const d of docs()) {
      if (kind === "boil-idle" || kind === "boil-hot") {
        d.querySelectorAll(boilSel(kind)).forEach((f) => f.setAttribute("scale", valueWithUnit));
      } else {
        d.documentElement.style.setProperty(name, valueWithUnit);
      }
    }
    if (defaults.get(name) === valueWithUnit) changed.delete(name);
    else changed.set(name, { value: valueWithUnit, kind });
  };

  const applyInput = (input: HTMLInputElement) => {
    const name = input.dataset.tweak!;
    const kind = input.dataset.kind ?? "css";
    const unit = kind === "boil-idle" || kind === "boil-hot" || kind === "color" ? "" : input.dataset.unit ?? "";
    applyValue(name, kind, input.value + unit);
    showValue(input);
    renderCss();
  };

  const showValue = (input: HTMLInputElement) => {
    const el = input.parentElement?.querySelector<HTMLElement>("[data-tweak-value]");
    if (!el) return;
    const kind = input.dataset.kind ?? "css";
    el.textContent = kind === "color" || kind.startsWith("boil") ? input.value : input.value + (input.dataset.unit ?? "");
  };

  /** Set a variable from a preset: update its slider if there is one, else apply directly. */
  const setVar = (name: string, valueWithUnit: string) => {
    const input = inputs.find((i) => i.dataset.tweak === name);
    if (input) {
      const kind = input.dataset.kind ?? "css";
      input.value = kind === "color" ? valueWithUnit : String(parseFloat(valueWithUnit));
      applyInput(input);
    } else {
      applyValue(name, "css", valueWithUnit);
      renderCss();
    }
  };

  // ---- output ----
  const cssFor = (names?: string[]): string => {
    const theme: string[] = [];
    const vars: string[] = [];
    const notes: string[] = [];
    for (const [name, c] of changed) {
      if (names && !names.includes(name)) continue;
      if (c.kind === "boil-idle") notes.push(`/* src/components/BoilDefs.astro → every boil-s-* feDisplacementMap: scale="${c.value}" */`);
      else if (c.kind === "boil-hot") notes.push(`/* src/components/BoilDefs.astro → every boil-h-* feDisplacementMap: scale="${c.value}" */`);
      else if (THEME_PREFIXES.some((p) => name.startsWith(p))) theme.push(`  ${name}: ${c.value};`);
      else vars.push(`  ${name}: ${c.value};`);
    }
    const blocks: string[] = [];
    if (theme.length) blocks.push(`/* src/styles/global.css → inside @theme { } */\n@theme {\n${theme.join("\n")}\n}`);
    if (vars.length) blocks.push(`/* src/styles/global.css → inside the Tweakables :root { } block */\n:root {\n${vars.join("\n")}\n}`);
    if (notes.length) blocks.push(notes.join("\n"));
    return blocks.join("\n\n");
  };

  const renderCss = () => {
    if (cssOut) cssOut.value = cssFor() || "/* Pick a style or move a slider on any block; the changed values show up here. */";
  };

  // ---- wire inputs ----
  inputs.forEach((input) => {
    const name = input.dataset.tweak!;
    const kind = input.dataset.kind ?? "css";
    const unit = kind === "boil-idle" || kind === "boil-hot" || kind === "color" ? "" : input.dataset.unit ?? "";
    input.value = readCurrent(name, kind);
    defaults.set(name, input.value + unit);
    showValue(input);
    input.addEventListener("input", () => applyInput(input));
  });

  // ---- presets ----
  document.querySelectorAll<HTMLButtonElement>("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const values = JSON.parse(btn.dataset.preset || "{}") as Record<string, string>;
      Object.entries(values).forEach(([k, v]) => setVar(k, v));
      const group = btn.dataset.presetGroup;
      document.querySelectorAll<HTMLButtonElement>(`[data-preset-group="${group}"]`).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    });
  });

  // ---- per-block copy / reset ----
  document.querySelectorAll<HTMLElement>("[data-block]").forEach((block) => {
    const names = (block.dataset.blockVars || "").split(",").filter(Boolean);
    block.querySelector<HTMLButtonElement>("[data-block-copy]")?.addEventListener("click", async (e) => {
      const b = e.currentTarget as HTMLButtonElement;
      const css = cssFor(names) || "/* nothing changed in this block */";
      try {
        await navigator.clipboard.writeText(css);
        const old = b.textContent;
        b.textContent = "Copied";
        setTimeout(() => (b.textContent = old), 1200);
      } catch {}
    });
    block.querySelector<HTMLButtonElement>("[data-block-reset]")?.addEventListener("click", () => {
      names.forEach((n) => {
        const d = defaults.get(n);
        if (d !== undefined) setVar(n, d);
      });
      block.querySelectorAll<HTMLButtonElement>("[data-preset]").forEach((b, i) => b.setAttribute("aria-pressed", String(i === 0)));
    });
  });

  // re-apply everything to the iframe when it (re)loads
  iframe?.addEventListener("load", () => {
    for (const [name, c] of changed) applyValue(name, c.kind, c.value);
  });

  renderCss();
}

function toHex(rgb: string): string {
  const m = rgb.match(/\d+/g);
  if (!m || m.length < 3) return "#000000";
  return "#" + m.slice(0, 3).map((n) => Number(n).toString(16).padStart(2, "0")).join("");
}

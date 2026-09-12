/**
 * Contact form: posts one row to the Supabase `contact_messages` table.
 * Insert-only for the publishable key, like the waitlist: nothing can be read back.
 *
 * Send choreography: the button collapses into a ball, glides to the middle of the screen
 * (inside the form's column), pulses while the request runs, then swells and dissolves into the
 * "sent" line. The fields only fade, they never leave the layout, so the form keeps its height
 * and the footer stays put.
 */

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const BALL = 52; // px, same as .btn-lg height
/** Every beat of the send choreography, in ms. Tuned by eye at double these values, then halved;
 *  scale all four together to change the pace. The CSS reads them as --t-* variables. */
const TIMING = {
  ball: 600, // pill → ball
  pause: 250, // ball sits before it lifts
  glide: 800, // ball → middle of the screen
  hold: 500, // dots pulse after it parks, even if the request was instant
};
/** `?demo` on the URL: button always enabled, nothing is sent. For tuning the animation. */
const DEMO = typeof location !== "undefined" && new URLSearchParams(location.search).has("demo");

type State = "idle" | "sending" | "done" | "invalid" | "error";

function setState(form: HTMLFormElement, state: State, message: string) {
  const status = form.querySelector<HTMLElement>("[data-contact-status]");
  form.dataset.state = state;
  if (status) {
    status.dataset.state = state;
    status.textContent = message;
  }
}

function input(form: HTMLFormElement, name: string) {
  return form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[data-contact-input="${name}"]`);
}

function choice(form: HTMLFormElement, name: string) {
  const set = form.querySelector<HTMLFieldSetElement>(`[data-contact-choice="${name}"]`);
  const picked = set?.querySelector<HTMLInputElement>("input:checked");
  return { set, value: picked?.value ?? "" };
}

function read(form: HTMLFormElement) {
  return {
    name: input(form, "name")?.value.trim() ?? "",
    email: input(form, "email")?.value.trim() ?? "",
    platform: choice(form, "platform").value,
    reason: choice(form, "reason").value,
    message: input(form, "message")?.value.trim() ?? "",
    locale: form.dataset.locale ?? null,
  };
}

function isComplete(v: ReturnType<typeof read>) {
  return Boolean(v.name && v.platform && v.reason && v.message && EMAIL.test(v.email) && v.email.length <= 254);
}

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Where the ball parks and the "sent" line appears, as a y offset from the form's top:
 *  the middle of the screen, kept inside the form so it never lands on the footer or the title. */
function targetY(form: HTMLFormElement) {
  const f = form.getBoundingClientRect();
  const mid = innerHeight / 2;
  const lo = f.top + BALL;
  const hi = f.bottom - BALL;
  return Math.min(Math.max(mid, lo), hi) - f.top;
}

/** Offset from the ball's current centre to its parking spot. */
function delta(form: HTMLFormElement, button: HTMLButtonElement) {
  const f = form.getBoundingClientRect();
  const b = button.getBoundingClientRect();
  return {
    dx: f.left + f.width / 2 - (b.left + b.width / 2),
    dy: f.top + targetY(form) - (b.top + b.height / 2),
  };
}

/** Button → ball (in place) → one glide up to the middle of the screen. The glide starts while the
 *  pill is still rounding off, so it reads as one motion rather than two steps. */
async function collapse(form: HTMLFormElement, button: HTMLButtonElement) {
  form.style.setProperty("--t-ball", `${TIMING.ball}ms`);
  form.style.setProperty("--t-glide", `${TIMING.glide}ms`);
  form.style.setProperty("--t-dots", `${Math.round(TIMING.ball * 0.6)}ms`);
  button.style.width = `${button.offsetWidth}px`;
  void button.offsetWidth; // commit the start width so the transition has something to run from
  form.classList.add("is-sending");
  button.style.width = `${BALL}px`;
  if (reduced()) return;
  await wait(TIMING.ball + TIMING.pause);
  const { dx, dy } = delta(form, button);
  button.style.transform = `translate(${dx}px, ${dy}px)`;
  await wait(TIMING.glide);
}

function restore(form: HTMLFormElement, button: HTMLButtonElement) {
  form.classList.remove("is-sending");
  button.style.transform = "";
  button.style.width = "";
  button.disabled = false;
}

/** The ball swells and fades where it parked; the "sent" line blurs in underneath it. */
function finish(form: HTMLFormElement, button: HTMLButtonElement, message: string) {
  const done = form.querySelector<HTMLElement>("[data-contact-done]");
  const y = targetY(form);
  if (done) {
    done.textContent = message;
    done.style.setProperty("--done-top", `${y - done.offsetHeight / 2}px`);
  }
  if (!reduced()) {
    const m = /translate\(([^)]*)\)/.exec(button.style.transform);
    button.style.transform = `translate(${m?.[1] ?? "0px, 0px"}) scale(1.8)`;
  }
  setState(form, "done", "");
  form.classList.remove("is-sending");
  form.classList.add("is-done");
  setTimeout(() => form.classList.add("is-gone"), 500);
}

async function submit(form: HTMLFormElement) {
  const button = form.querySelector<HTMLButtonElement>("[data-contact-submit]");
  const trap = form.querySelector<HTMLInputElement>("[data-contact-trap]");
  const msg = form.dataset;
  if (!button) return;

  const values = read(form);
  if (!DEMO && !isComplete(values)) {
    // The button is disabled until complete, so this only guards programmatic submits.
    setState(form, "invalid", EMAIL.test(values.email) ? (msg.msgInvalid ?? "") : (msg.msgInvalidEmail ?? ""));
    return;
  }

  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((el) => (el.disabled = true));
  button.disabled = true;
  setState(form, "sending", "");

  // Honeypot filled: play the same show, store nothing.
  const send = DEMO || trap?.value
    ? Promise.resolve(true)
    : fetch(form.dataset.endpoint!, {
        method: "POST",
        headers: {
          apikey: form.dataset.key!,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.ok)
        .catch(() => false);

  const [ok] = await Promise.all([send, collapse(form, button).then(() => wait(TIMING.hold))]);

  if (ok) {
    finish(form, button, msg.msgDone ?? "");
    return;
  }
  restore(form, button);
  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((el) => (el.disabled = false));
  setState(form, "error", msg.msgError ?? "");
}

export function initContact() {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-contact]");
  forms.forEach((form) => {
    const button = form.querySelector<HTMLButtonElement>("[data-contact-submit]");
    const refresh = () => {
      if (button && form.dataset.state !== "sending" && form.dataset.state !== "done") button.disabled = !DEMO && !isComplete(read(form));
    };
    refresh();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.state === "sending" || form.dataset.state === "done") return;
      void submit(form);
    });
    // Any edit re-checks completeness and clears a stale error so the line doesn't nag.
    const onEdit = () => {
      refresh();
      if (form.dataset.state === "invalid" || form.dataset.state === "error") setState(form, "idle", "");
    };
    form.addEventListener("input", onEdit);
    form.addEventListener("change", onEdit);
  });
}

/**
 * Waitlist form: posts one row to the Supabase `waitlist` table.
 * The table is insert-only for the publishable key, so nothing can be read back.
 */

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type State = "idle" | "sending" | "done" | "already" | "invalid" | "error";

function setState(form: HTMLFormElement, state: State, message: string) {
  const status = form.querySelector<HTMLElement>("[data-waitlist-status]");
  form.dataset.state = state;
  if (status) {
    status.dataset.state = state;
    status.textContent = message;
  }
}

async function submit(form: HTMLFormElement) {
  const input = form.querySelector<HTMLInputElement>("[data-waitlist-input]");
  const button = form.querySelector<HTMLButtonElement>("[data-waitlist-submit]");
  const trap = form.querySelector<HTMLInputElement>("[data-waitlist-trap]");
  const msg = form.dataset;
  if (!input || !button) return;

  const email = input.value.trim();
  if (!EMAIL.test(email) || email.length > 254) {
    input.setAttribute("aria-invalid", "true");
    setState(form, "invalid", msg.msgInvalid ?? "");
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");

  // Honeypot filled: act like it worked, store nothing.
  if (trap?.value) {
    setState(form, "done", msg.msgDone ?? "");
    return;
  }

  input.disabled = true;
  button.disabled = true;
  button.textContent = msg.msgSending ?? "";
  setState(form, "sending", "");

  try {
    const res = await fetch(form.dataset.endpoint!, {
      method: "POST",
      headers: {
        apikey: form.dataset.key!,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, locale: form.dataset.locale ?? null }),
    });

    if (res.ok) {
      setState(form, "done", msg.msgDone ?? "");
      return;
    }
    // 409 is the unique index: this address already signed up.
    if (res.status === 409) {
      setState(form, "already", msg.msgAlready ?? "");
      return;
    }
    throw new Error(`waitlist: ${res.status}`);
  } catch {
    setState(form, "error", msg.msgError ?? "");
    input.disabled = false;
    button.disabled = false;
    button.textContent = button.dataset.label ?? "";
    input.focus();
  }
}

export function initWaitlist() {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-waitlist]");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.state === "sending" || form.dataset.state === "done") return;
      void submit(form);
    });
    // Typing again clears a stale error so the line doesn't nag.
    form.querySelector("[data-waitlist-input]")?.addEventListener("input", () => {
      if (form.dataset.state && form.dataset.state !== "idle" && form.dataset.state !== "done") {
        form.querySelector("[data-waitlist-input]")?.removeAttribute("aria-invalid");
        setState(form, "idle", "");
      }
    });
  });
}

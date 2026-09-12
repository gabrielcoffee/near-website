/**
 * Contact form: posts one row to the Supabase `contact_messages` table.
 * Insert-only for the publishable key, like the waitlist: nothing can be read back.
 * A database trigger forwards each row to the inbox (see supabase/functions/contact-notify).
 */

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

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

function markInvalid(el: Element | null | undefined, invalid: boolean) {
  if (!el) return;
  if (invalid) el.setAttribute("aria-invalid", "true");
  else el.removeAttribute("aria-invalid");
}

async function submit(form: HTMLFormElement) {
  const name = input(form, "name");
  const email = input(form, "email");
  const message = input(form, "message");
  const platform = choice(form, "platform");
  const reason = choice(form, "reason");
  const button = form.querySelector<HTMLButtonElement>("[data-contact-submit]");
  const trap = form.querySelector<HTMLInputElement>("[data-contact-trap]");
  const msg = form.dataset;
  if (!name || !email || !message || !button) return;

  const values = {
    name: name.value.trim(),
    email: email.value.trim(),
    platform: platform.value,
    reason: reason.value,
    message: message.value.trim(),
    locale: form.dataset.locale ?? null,
  };

  const badEmail = !EMAIL.test(values.email) || values.email.length > 254;
  const missing = {
    name: !values.name,
    email: !values.email,
    platform: !values.platform,
    reason: !values.reason,
    message: !values.message,
  };
  markInvalid(name, missing.name);
  markInvalid(email, missing.email || badEmail);
  markInvalid(platform.set, missing.platform);
  markInvalid(reason.set, missing.reason);
  markInvalid(message, missing.message);

  if (Object.values(missing).some(Boolean)) {
    setState(form, "invalid", msg.msgInvalid ?? "");
    form.querySelector<HTMLElement>("[aria-invalid] , [aria-invalid] input")?.focus();
    return;
  }
  if (badEmail) {
    setState(form, "invalid", msg.msgInvalidEmail ?? "");
    email.focus();
    return;
  }

  // Honeypot filled: act like it worked, store nothing.
  if (trap?.value) {
    finish(form, msg.msgDone ?? "");
    return;
  }

  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((el) => (el.disabled = true));
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
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`contact: ${res.status}`);
    finish(form, msg.msgDone ?? "");
  } catch {
    setState(form, "error", msg.msgError ?? "");
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((el) => (el.disabled = false));
    button.disabled = false;
    button.textContent = button.dataset.label ?? "";
  }
}

function finish(form: HTMLFormElement, message: string) {
  setState(form, "done", "");
  const done = form.querySelector<HTMLElement>("[data-contact-done]");
  if (done) done.textContent = message;
}

export function initContact() {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-contact]");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.state === "sending" || form.dataset.state === "done") return;
      void submit(form);
    });
    // Any edit clears a stale error so the line doesn't nag.
    form.addEventListener("input", (event) => {
      const el = event.target as HTMLElement | null;
      el?.removeAttribute("aria-invalid");
      el?.closest("fieldset")?.removeAttribute("aria-invalid");
      if (form.dataset.state === "invalid" || form.dataset.state === "error") setState(form, "idle", "");
    });
  });
}

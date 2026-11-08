/**
 * The release note to the news list (the footer's "What's new in Near"), one per App Store version.
 * Same voice and card as the welcome mail (`../waitlist-welcome/render.ts`). The "what's new" lines are
 * the App Store's own release notes, read from that reader's storefront, so they come in whatever
 * language the listing has there (en, pt, es today; English elsewhere).
 */

import type { Email } from "../waitlist-welcome/emails.ts";

export const APP_STORE_URL = "https://apps.apple.com/app/id6815301550";

/** Storefront whose listing language matches the reader's (Apple serves its default localization there). */
export const STOREFRONT: Record<string, string> = {
  en: "us", pt: "br", es: "es", fr: "fr", de: "de", it: "it", ru: "ru",
};

interface Copy {
  subject: string;
  heading: string;
  /** First paragraph when there are release notes to show; the next paragraph is the notes. */
  intro: string;
  /** First paragraph when the version has no notes. */
  introBare: string;
  outro: string;
  sign: string;
  unsubscribe: string;
  unsubscribed: string;
}

const COPY: Record<string, Copy> = {
  en: {
    subject: "what's new in Near {version}",
    heading: "Near {version} is out.",
    intro: "Hey! Gabriel here, from Near. There's a new version on the App Store. What's new:",
    introBare: "Hey! Gabriel here, from Near. There's a new version on the App Store.",
    outro: "If your iPhone doesn't update apps by itself, open the App Store and update Near there. Anything at all, reply to this email, it comes straight to me.",
    sign: "Gabriel",
    unsubscribe: "Unsubscribe",
    unsubscribed: "Done, you're off the list.",
  },
  pt: {
    subject: "o que tem de novo no Near {version}",
    heading: "Saiu o Near {version}.",
    intro: "Oi! Aqui é o Gabriel, do Near. Tem versão nova na App Store. O que mudou:",
    introBare: "Oi! Aqui é o Gabriel, do Near. Tem versão nova na App Store.",
    outro: "Se o seu iPhone não atualiza os apps sozinho, abre a App Store e atualiza o Near por lá. Qualquer coisa, responde esse e-mail que cai direto comigo.",
    sign: "Gabriel",
    unsubscribe: "Sair da lista",
    unsubscribed: "Pronto, você saiu da lista.",
  },
  es: {
    subject: "lo nuevo de Near {version}",
    heading: "Ya salió Near {version}.",
    intro: "¡Hola! Soy Gabriel, de Near. Hay una versión nueva en la App Store. Lo nuevo:",
    introBare: "¡Hola! Soy Gabriel, de Near. Hay una versión nueva en la App Store.",
    outro: "Si tu iPhone no actualiza las apps solo, abre la App Store y actualiza Near desde ahí. Cualquier cosa, responde este correo, me llega directo a mí.",
    sign: "Gabriel",
    unsubscribe: "Darme de baja",
    unsubscribed: "Listo, ya no estás en la lista.",
  },
  fr: {
    subject: "les nouveautés de Near {version}",
    heading: "Near {version} est sorti.",
    intro: "Salut ! C'est Gabriel, de Near. Une nouvelle version est sur l'App Store. Ce qui change :",
    introBare: "Salut ! C'est Gabriel, de Near. Une nouvelle version est sur l'App Store.",
    outro: "Si ton iPhone ne met pas les apps à jour tout seul, ouvre l'App Store et mets Near à jour là-bas. Pour quoi que ce soit, réponds à cet e-mail, ça arrive directement chez moi.",
    sign: "Gabriel",
    unsubscribe: "Se désinscrire",
    unsubscribed: "C'est fait, tu n'es plus sur la liste.",
  },
  de: {
    subject: "neu in Near {version}",
    heading: "Near {version} ist da.",
    intro: "Hey! Hier ist Gabriel von Near. Im App Store gibt es eine neue Version. Das ist neu:",
    introBare: "Hey! Hier ist Gabriel von Near. Im App Store gibt es eine neue Version.",
    outro: "Wenn dein iPhone Apps nicht von selbst aktualisiert, öffne den App Store und aktualisiere Near dort. Was auch immer ist, antworte auf diese Mail, das landet direkt bei mir.",
    sign: "Gabriel",
    unsubscribe: "Abmelden",
    unsubscribed: "Erledigt, du bist von der Liste.",
  },
  it: {
    subject: "le novità di Near {version}",
    heading: "È uscito Near {version}.",
    intro: "Ciao! Sono Gabriel, di Near. C'è una nuova versione sull'App Store. Le novità:",
    introBare: "Ciao! Sono Gabriel, di Near. C'è una nuova versione sull'App Store.",
    outro: "Se il tuo iPhone non aggiorna le app da solo, apri l'App Store e aggiorna Near da lì. Per qualsiasi cosa, rispondi a questa mail, arriva direttamente a me.",
    sign: "Gabriel",
    unsubscribe: "Cancellati",
    unsubscribed: "Fatto, non sei più nella lista.",
  },
  ru: {
    subject: "что нового в Near {version}",
    heading: "Вышел Near {version}.",
    intro: "Привет! Это Габриэл из Near. В App Store новая версия. Что нового:",
    introBare: "Привет! Это Габриэл из Near. В App Store новая версия.",
    outro: "Если iPhone не обновляет приложения сам, открой App Store и обнови Near там. Если что, ответь на это письмо, оно придёт прямо мне.",
    sign: "Габриэл",
    unsubscribe: "Отписаться",
    unsubscribed: "Готово, ты больше не в списке.",
  },
};

export function newsEmailFor(locale: string | null | undefined, version: string, notes: string): Email {
  const c = COPY[String(locale ?? "").slice(0, 2).toLowerCase()] ?? COPY.en;
  const fill = (s: string) => s.replaceAll("{version}", version);
  const lines = notes.trim();
  const body = [lines ? c.intro : c.introBare, lines, APP_STORE_URL, c.outro, c.sign].filter(Boolean).join("\n\n");
  return {
    subject: fill(c.subject),
    heading: fill(c.heading),
    body,
    unsubscribe: c.unsubscribe,
    unsubscribed: c.unsubscribed,
  };
}

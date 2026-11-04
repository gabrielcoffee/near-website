/**
 * The launch email: the note the welcome email promised ("the day it's on the App Store I'll send you a
 * note"). Same voice and layout as the welcome one (`../waitlist-welcome/render.ts`). `{link}` is replaced
 * by the App Store page. Locales without their own copy get English; the list today is pt, en and es.
 */

import type { Email } from "../waitlist-welcome/emails.ts";

export const APP_STORE_URL = "https://apps.apple.com/app/id6815301550";

const EMAILS: Record<string, Email> = {
  en: {
    subject: "Near is out",
    heading: "Near is out.",
    body: `Hey! Gabriel here, from Near.

I promised to let you know the day it came out, and it's here: Near is on the App Store.

{link}

Remember how it works: you can only add someone in person, both phones together. So download it, call that friend you always see and add them the next time you're together.

Anything at all, reply to this email, it comes straight to me.

Thanks for waiting,
Gabriel`,
    unsubscribe: "Unsubscribe",
    unsubscribed: "Done, you're off the list.",
  },
  pt: {
    subject: "o Near saiu",
    heading: "O Near saiu.",
    body: `Oi! Aqui é o Gabriel, do Near.

Prometi te avisar no dia que saísse, e chegou: o Near tá na App Store.

{link}

Lembra como funciona: você só adiciona alguém pessoalmente, os dois com o celular juntos. Então baixa, chama aquele amigo que você vê sempre e adiciona ele na próxima vez que estiverem juntos.

Qualquer coisa, responde esse e-mail que cai direto comigo.

Valeu por esperar,
Gabriel`,
    unsubscribe: "Sair da lista",
    unsubscribed: "Pronto, você saiu da lista.",
  },
  es: {
    subject: "Near ya salió",
    heading: "Near ya salió.",
    body: `¡Hola! Soy Gabriel, de Near.

Prometí avisarte el día que saliera, y llegó: Near ya está en la App Store.

{link}

Acuérdate de cómo funciona: solo puedes agregar a alguien en persona, los dos con el celular juntos. Así que descárgala, llama a ese amigo que ves siempre y agrégalo la próxima vez que estén juntos.

Cualquier cosa, responde este correo, me llega directo a mí.

Gracias por esperar,
Gabriel`,
    unsubscribe: "Salir de la lista",
    unsubscribed: "Listo, ya no estás en la lista.",
  },
};

export function launchEmailFor(locale: string | null | undefined): Email {
  const email = EMAILS[locale ?? "en"] ?? EMAILS.en;
  return { ...email, body: email.body.replace("{link}", APP_STORE_URL) };
}

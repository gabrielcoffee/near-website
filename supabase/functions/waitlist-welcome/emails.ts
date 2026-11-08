/**
 * The welcome emails, one per list (launch, android, news), in the same seven languages as the site.
 *
 * Written in the first person and signed by Gabriel: it should read like a short note from the one
 * person building the app, not a marketing blast. `body` is the plain-text version verbatim;
 * `render.ts` wraps the same text in the HTML card (icon, wordmark, `heading` in Outfit). No
 * unsubscribe footer: the list is opt-in and "reply" covers it. `ru` avoids gendered past tense
 * for the reader, exactly like the site copy does.
 */

export type Locale = "en" | "pt" | "es" | "fr" | "de" | "it" | "ru";

export interface Email {
  subject: string;
  /** Large line at the top of the HTML version; the text version has no heading. */
  heading: string;
  /** Full body, paragraphs separated by blank lines, signature included. */
  body: string;
  /** Footer link label. */
  unsubscribe: string;
  /** What the unsubscribe page says once the row is gone. */
  unsubscribed: string;
}

export const DEFAULT_LOCALE: Locale = "en";

const EMAILS: Record<Locale, Email> = {
  en: {
    subject: "you're on the Near list",
    heading: "You're on the list.",
    body: `Hey! Gabriel here, I'm the one building Near.

Just letting you know I got your email and you're on the list. The app isn't out yet, still finishing it. The day it's on the App Store I'll send you a note here.

Until then, if you want to ask anything or just say hi, reply to this email, it comes straight to me.

Talk soon,
Gabriel`,
    unsubscribe: "Unsubscribe",
    unsubscribed: "Done, you're off the list."
  },
  pt: {
    subject: "você entrou na lista do Near",
    heading: "Você entrou na lista.",
    body: `Oi! Aqui é o Gabriel, sou eu que tô fazendo o Near.

Só passando pra dizer que recebi seu e-mail e você tá na lista. O app ainda não saiu, ainda tô terminando. No dia que estiver na App Store eu te aviso por aqui.

Enquanto isso, se quiser perguntar alguma coisa ou só dar um oi, responde esse e-mail que cai direto comigo.

Até logo,
Gabriel`,
    unsubscribe: "Sair da lista",
    unsubscribed: "Pronto, você saiu da lista."
  },
  es: {
    subject: "estás en la lista de Near",
    heading: "Ya estás en la lista.",
    body: `¡Hola! Soy Gabriel, el que está haciendo Near.

Solo para decirte que recibí tu correo y ya estás en la lista. La app todavía no ha salido, la estoy terminando. El día que esté en la App Store te aviso por aquí.

Mientras tanto, si quieres preguntar algo o solo saludar, responde a este correo, me llega directo a mí.

Hasta pronto,
Gabriel`,
    unsubscribe: "Darme de baja",
    unsubscribed: "Listo, ya no estás en la lista."
  },
  fr: {
    subject: "tu es sur la liste Near",
    heading: "Tu es sur la liste.",
    body: `Salut ! C'est Gabriel, c'est moi qui fais Near.

Juste pour te dire que j'ai bien reçu ton e-mail et que tu es sur la liste. L'app n'est pas encore sortie, je suis en train de la finir. Le jour où elle est sur l'App Store, je te préviens ici.

En attendant, si tu veux demander quelque chose ou juste dire bonjour, réponds à cet e-mail, ça arrive directement chez moi.

À bientôt,
Gabriel`,
    unsubscribe: "Se désinscrire",
    unsubscribed: "C'est fait, tu n'es plus sur la liste."
  },
  de: {
    subject: "du bist auf der Near-Liste",
    heading: "Du stehst auf der Liste.",
    body: `Hey! Hier ist Gabriel, ich bin der, der Near baut.

Nur kurz: deine Mail ist angekommen und du stehst auf der Liste. Die App ist noch nicht draußen, ich bin noch am Fertigmachen. An dem Tag, an dem sie im App Store ist, sag ich dir hier Bescheid.

Bis dahin: wenn du was fragen oder einfach nur hallo sagen willst, antworte einfach auf diese Mail, das landet direkt bei mir.

Bis bald,
Gabriel`,
    unsubscribe: "Abmelden",
    unsubscribed: "Erledigt, du bist von der Liste."
  },
  it: {
    subject: "sei nella lista di Near",
    heading: "Sei nella lista.",
    body: `Ciao! Sono Gabriel, quello che sta facendo Near.

Solo per dirti che ho ricevuto la tua mail e sei nella lista. L'app non è ancora uscita, la sto finendo. Il giorno che sarà sull'App Store ti avviso qui.

Nel frattempo, se vuoi chiedere qualcosa o anche solo salutare, rispondi a questa mail, arriva direttamente a me.

A presto,
Gabriel`,
    unsubscribe: "Cancellati",
    unsubscribed: "Fatto, non sei più nella lista."
  },
  ru: {
    subject: "ты в списке Near",
    heading: "Ты в списке.",
    body: `Привет! Это Габриэл, я делаю Near.

Просто хочу сказать, что твоё письмо дошло и ты в списке. Приложение ещё не вышло, я его доделываю. В день, когда оно появится в App Store, напишу тебе сюда.

А пока, если хочешь что-то спросить или просто поздороваться, ответь на это письмо, оно придёт прямо мне.

До скорого,
Габриэл`,
    unsubscribe: "Отписаться",
    unsubscribed: "Готово, ты больше не в списке."
  },
};

/** The Android list's welcome: one note now, one the day Near is on Android, nothing else. */
const ANDROID: Record<Locale, Email> = {
  en: {
    subject: "you're on the Near Android list",
    heading: "You're on the Android list.",
    body: `Hey! Gabriel here, I'm the one building Near.

Got your email. Near is only on iPhone for now. The day it comes to Android I'll write to you here, once. That's the only email this list sends.

Until then, if you want to ask anything or just say hi, reply to this email, it comes straight to me.

Talk soon,
Gabriel`,
    unsubscribe: "Unsubscribe",
    unsubscribed: "Done, you're off the list.",
  },
  pt: {
    subject: "você entrou na lista do Near pra Android",
    heading: "Você entrou na lista do Android.",
    body: `Oi! Aqui é o Gabriel, sou eu que tô fazendo o Near.

Recebi seu e-mail. Por enquanto o Near é só pra iPhone. No dia que chegar no Android eu te aviso por aqui, uma vez só. É o único e-mail dessa lista.

Enquanto isso, se quiser perguntar alguma coisa ou só dar um oi, responde esse e-mail que cai direto comigo.

Até logo,
Gabriel`,
    unsubscribe: "Sair da lista",
    unsubscribed: "Pronto, você saiu da lista.",
  },
  es: {
    subject: "estás en la lista de Near para Android",
    heading: "Ya estás en la lista de Android.",
    body: `¡Hola! Soy Gabriel, el que está haciendo Near.

Recibí tu correo. Por ahora Near solo está en iPhone. El día que llegue a Android te escribo por aquí, una sola vez. Es el único correo de esta lista.

Mientras tanto, si quieres preguntar algo o solo saludar, responde a este correo, me llega directo a mí.

Hasta pronto,
Gabriel`,
    unsubscribe: "Darme de baja",
    unsubscribed: "Listo, ya no estás en la lista.",
  },
  fr: {
    subject: "tu es sur la liste Near pour Android",
    heading: "Tu es sur la liste Android.",
    body: `Salut ! C'est Gabriel, c'est moi qui fais Near.

J'ai bien reçu ton e-mail. Pour l'instant, Near n'existe que sur iPhone. Le jour où il arrive sur Android, je t'écris ici, une seule fois. C'est le seul e-mail de cette liste.

En attendant, si tu veux demander quelque chose ou juste dire bonjour, réponds à cet e-mail, ça arrive directement chez moi.

À bientôt,
Gabriel`,
    unsubscribe: "Se désinscrire",
    unsubscribed: "C'est fait, tu n'es plus sur la liste.",
  },
  de: {
    subject: "du bist auf der Near-Liste für Android",
    heading: "Du stehst auf der Android-Liste.",
    body: `Hey! Hier ist Gabriel, ich bin der, der Near baut.

Deine Mail ist angekommen. Near gibt es im Moment nur fürs iPhone. An dem Tag, an dem es für Android kommt, schreib ich dir hier, ein einziges Mal. Das ist die einzige Mail von dieser Liste.

Bis dahin: wenn du was fragen oder einfach nur hallo sagen willst, antworte auf diese Mail, das landet direkt bei mir.

Bis bald,
Gabriel`,
    unsubscribe: "Abmelden",
    unsubscribed: "Erledigt, du bist von der Liste.",
  },
  it: {
    subject: "sei nella lista di Near per Android",
    heading: "Sei nella lista Android.",
    body: `Ciao! Sono Gabriel, quello che sta facendo Near.

Ho ricevuto la tua mail. Per ora Near c'è solo su iPhone. Il giorno che arriva su Android ti scrivo qui, una volta sola. È l'unica mail di questa lista.

Nel frattempo, se vuoi chiedere qualcosa o anche solo salutare, rispondi a questa mail, arriva direttamente a me.

A presto,
Gabriel`,
    unsubscribe: "Cancellati",
    unsubscribed: "Fatto, non sei più nella lista.",
  },
  ru: {
    subject: "ты в списке Near для Android",
    heading: "Ты в списке Android.",
    body: `Привет! Это Габриэл, я делаю Near.

Твоё письмо дошло. Пока Near есть только на iPhone. В день, когда он появится на Android, напишу тебе сюда, один раз. Других писем из этого списка не будет.

А пока, если хочешь что-то спросить или просто поздороваться, ответь на это письмо, оно придёт прямо мне.

До скорого,
Габриэл`,
    unsubscribe: "Отписаться",
    unsubscribed: "Готово, ты больше не в списке.",
  },
};

/** The footer list's welcome: a short note every time a new version is out, nothing else. */
const NEWS: Record<Locale, Email> = {
  en: {
    subject: "you'll hear when Near updates",
    heading: "You're in.",
    body: `Hey! Gabriel here, I'm the one building Near.

Got your email. Every time a new version of Near is out, I'll send you a short note with what's new. Nothing else.

If you want to ask anything or just say hi, reply to this email, it comes straight to me.

Talk soon,
Gabriel`,
    unsubscribe: "Unsubscribe",
    unsubscribed: "Done, you're off the list.",
  },
  pt: {
    subject: "você vai saber quando o Near atualizar",
    heading: "Pronto, você tá dentro.",
    body: `Oi! Aqui é o Gabriel, sou eu que tô fazendo o Near.

Recebi seu e-mail. Toda vez que sair uma versão nova do Near, te mando um recado curto com o que mudou. Só isso.

Se quiser perguntar alguma coisa ou só dar um oi, responde esse e-mail que cai direto comigo.

Até logo,
Gabriel`,
    unsubscribe: "Sair da lista",
    unsubscribed: "Pronto, você saiu da lista.",
  },
  es: {
    subject: "te enterarás cuando Near se actualice",
    heading: "Ya estás dentro.",
    body: `¡Hola! Soy Gabriel, el que está haciendo Near.

Recibí tu correo. Cada vez que salga una versión nueva de Near, te mando una nota corta con lo nuevo. Nada más.

Si quieres preguntar algo o solo saludar, responde a este correo, me llega directo a mí.

Hasta pronto,
Gabriel`,
    unsubscribe: "Darme de baja",
    unsubscribed: "Listo, ya no estás en la lista.",
  },
  fr: {
    subject: "tu sauras quand Near se met à jour",
    heading: "C'est noté.",
    body: `Salut ! C'est Gabriel, c'est moi qui fais Near.

J'ai bien reçu ton e-mail. À chaque nouvelle version de Near, je t'envoie un petit mot avec ce qui change. Rien d'autre.

Si tu veux demander quelque chose ou juste dire bonjour, réponds à cet e-mail, ça arrive directement chez moi.

À bientôt,
Gabriel`,
    unsubscribe: "Se désinscrire",
    unsubscribed: "C'est fait, tu n'es plus sur la liste.",
  },
  de: {
    subject: "du erfährst, wenn Near ein Update bekommt",
    heading: "Du bist dabei.",
    body: `Hey! Hier ist Gabriel, ich bin der, der Near baut.

Deine Mail ist angekommen. Jedes Mal, wenn eine neue Version von Near draußen ist, schick ich dir eine kurze Nachricht mit dem, was neu ist. Sonst nichts.

Wenn du was fragen oder einfach nur hallo sagen willst, antworte auf diese Mail, das landet direkt bei mir.

Bis bald,
Gabriel`,
    unsubscribe: "Abmelden",
    unsubscribed: "Erledigt, du bist von der Liste.",
  },
  it: {
    subject: "saprai quando Near si aggiorna",
    heading: "Ci sei.",
    body: `Ciao! Sono Gabriel, quello che sta facendo Near.

Ho ricevuto la tua mail. Ogni volta che esce una nuova versione di Near, ti mando due righe su cosa c'è di nuovo. Nient'altro.

Se vuoi chiedere qualcosa o anche solo salutare, rispondi a questa mail, arriva direttamente a me.

A presto,
Gabriel`,
    unsubscribe: "Cancellati",
    unsubscribed: "Fatto, non sei più nella lista.",
  },
  ru: {
    subject: "ты узнаешь, когда Near обновится",
    heading: "Готово, ты в списке.",
    body: `Привет! Это Габриэл, я делаю Near.

Твоё письмо дошло. Каждый раз, когда выходит новая версия Near, я буду присылать короткую заметку о том, что нового. И больше ничего.

Если хочешь что-то спросить или просто поздороваться, ответь на это письмо, оно придёт прямо мне.

До скорого,
Габриэл`,
    unsubscribe: "Отписаться",
    unsubscribed: "Готово, ты больше не в списке.",
  },
};

export type List = "launch" | "android" | "news";

/** Unknown or missing locale falls back to English, an unknown list to the original waitlist note. */
export function emailFor(locale: string | null | undefined, list: string | null | undefined = "launch"): Email {
  const key = String(locale ?? "").slice(0, 2).toLowerCase() as Locale;
  const set = list === "android" ? ANDROID : list === "news" ? NEWS : EMAILS;
  return set[key] ?? set[DEFAULT_LOCALE];
}

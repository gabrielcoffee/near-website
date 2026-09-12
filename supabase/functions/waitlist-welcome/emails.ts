/**
 * The welcome email, in the same seven languages as the site.
 * Tone matches src/i18n/*: short, second person, slightly playful.
 * `ru` avoids gendered past tense, exactly like the site copy does.
 */

export type Locale = "en" | "pt" | "es" | "fr" | "de" | "it" | "ru";

export interface Email {
  subject: string;
  heading: string;
  lines: string[];
  /** Sits under a rule at the bottom, smaller and muted. */
  footer: string;
}

export const DEFAULT_LOCALE: Locale = "en";

const EMAILS: Record<Locale, Email> = {
  en: {
    subject: "You're on the Near list",
    heading: "You're on the list.",
    lines: [
      "Near is a social app where friends can only be added in person. No algorithm, no ads, nothing generated.",
      "It isn't out yet. We'll write exactly once more, the day it's on the App Store. That's the whole plan.",
      "Questions, ideas, complaints? Just reply to this email — it reaches a person.",
    ],
    footer: "Don't want the launch email? Reply with \"remove\" and you're off the list.",
  },
  pt: {
    subject: "Você está na lista do Near",
    heading: "Você está na lista.",
    lines: [
      "O Near é um app social onde amigos só podem ser adicionados pessoalmente. Sem algoritmo, sem anúncios, nada gerado por IA.",
      "Ainda não lançou. A gente escreve mais uma vez só, no dia que estiver na App Store. É esse o plano inteiro.",
      "Dúvida, ideia, reclamação? Só responder esse e-mail — chega numa pessoa.",
    ],
    footer: "Não quer o e-mail do lançamento? Responde \"sair\" que a gente te tira da lista.",
  },
  es: {
    subject: "Estás en la lista de Near",
    heading: "Estás en la lista.",
    lines: [
      "Near es una app social donde los amigos solo se añaden en persona. Sin algoritmo, sin anuncios, nada generado por IA.",
      "Todavía no ha salido. Te escribimos una vez más, el día que esté en la App Store. Ese es todo el plan.",
      "¿Dudas, ideas, quejas? Responde a este correo — lo lee una persona.",
    ],
    footer: "¿No quieres el correo del lanzamiento? Responde \"baja\" y te quitamos de la lista.",
  },
  fr: {
    subject: "Tu es sur la liste Near",
    heading: "Tu es sur la liste.",
    lines: [
      "Near est une app sociale où on n'ajoute ses amis qu'en personne. Pas d'algorithme, pas de pub, rien de généré.",
      "Ce n'est pas encore sorti. On t'écrira une seule fois de plus, le jour où c'est sur l'App Store. C'est tout le programme.",
      "Une question, une idée, une critique ? Réponds à cet e-mail — il arrive chez quelqu'un.",
    ],
    footer: "Pas envie de l'e-mail de lancement ? Réponds « stop » et on te retire de la liste.",
  },
  de: {
    subject: "Du bist auf der Near-Liste",
    heading: "Du bist auf der Liste.",
    lines: [
      "Near ist eine Social App, in der man Freunde nur persönlich hinzufügen kann. Kein Algorithmus, keine Werbung, nichts Generiertes.",
      "Es ist noch nicht draußen. Wir schreiben genau einmal wieder, an dem Tag, an dem es im App Store ist. Mehr ist nicht geplant.",
      "Fragen, Ideen, Beschwerden? Antworte einfach auf diese Mail — da sitzt ein Mensch.",
    ],
    footer: "Keine Lust auf die Launch-Mail? Antworte mit „raus“ und du bist von der Liste.",
  },
  it: {
    subject: "Sei nella lista di Near",
    heading: "Sei nella lista.",
    lines: [
      "Near è un'app social dove gli amici si aggiungono solo di persona. Niente algoritmo, niente pubblicità, niente generato dall'IA.",
      "Non è ancora uscita. Ti scriviamo una volta sola ancora, il giorno in cui sarà sull'App Store. Il piano è tutto qui.",
      "Domande, idee, lamentele? Rispondi a questa mail — la legge una persona.",
    ],
    footer: "Non vuoi la mail del lancio? Rispondi \"basta\" e ti togliamo dalla lista.",
  },
  ru: {
    subject: "Ты в списке Near",
    heading: "Ты в списке.",
    lines: [
      "Near — социальное приложение, где друзей можно добавить только лично. Без алгоритма, без рекламы, без сгенерированного контента.",
      "Оно ещё не вышло. Мы напишем ровно один раз — в день, когда оно появится в App Store. Это весь план.",
      "Вопросы, идеи, претензии? Просто ответь на это письмо — его читает человек.",
    ],
    footer: "Не нужно письмо о запуске? Ответь «удалить», и мы уберём тебя из списка.",
  },
};

/** Unknown or missing locale falls back to English rather than sending nothing. */
export function emailFor(locale: string | null | undefined): Email {
  const key = String(locale ?? "").slice(0, 2).toLowerCase();
  return EMAILS[key as Locale] ?? EMAILS[DEFAULT_LOCALE];
}

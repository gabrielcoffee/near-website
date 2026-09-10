import type { Dictionary } from "./en";

const fr: Dictionary = {
  meta: {
    title: "Near — les amis que tu vois vraiment",
    description:
      "Near est un réseau social pour les amis que tu vois vraiment. On n'ajoute quelqu'un qu'en personne. Pas de pub, pas d'algorithme, pas de likes.",
  },
  nav: {
    how: "Comment ça marche",
    believe: "Ce qu'on défend",
    next: "À venir",
    cta: "Télécharger l'app",
  },
  hero: {
    title: "Near",
    tagline: "Les amis que tu vois vraiment.",
    scroll: "défiler",
  },
  how: {
    steps: [
      {
        title: "Seulement en vrai",
        body: "Tu ne peux ajouter que quelqu'un qui est à côté de toi. Tu croises un ami ? Vous vous ajoutez dans l'app, sur le moment.",
      },
      {
        title: "Ta grille",
        body: "Tous les gens que tu as vus en vrai, dans une seule grille. Range-les comme tu veux. C'est tout ton réseau.",
      },
      {
        title: "Un fil qui a une fin",
        body: "Les photos et les textes de tes amis, du plus récent au plus ancien. Pas de classement, pas de « suggestions pour toi ».",
      },
      {
        title: "Des mots, pas des cœurs",
        body: "Il n'y a pas de likes. Si quelque chose compte pour toi, dis-le.",
      },
    ],
  },
  next: {
    intro: "Trois nouveautés arrivent. Touche les écrans pour les faire défiler.",
    prev: "Précédent",
    next: "Suivant",
    features: [
      { title: "Plans", body: "Choisis un lieu, choisis les amis, envoie. Tout le monde reçoit une notif et répond : partant ou pas. Pas de groupe WhatsApp, pas de sondage, pas quarante messages pour caler un vendredi." },
      { title: "Posts à deux", body: "Quand tu es au même endroit qu'un ami, vous pouvez publier ensemble. Une photo, vos deux noms dessus. La preuve que vous y étiez vraiment." },
      { title: "Récaps", body: "À la fin de chaque mois et de chaque année : qui tu as vu, combien de fois, où. Pas du temps d'écran. Du vrai temps." },
    ],
  },
  believe: {
    paragraphs: [
      "Toutes les grandes applis sociales sont faites pour te garder dedans. La pub veut tes yeux, l'algorithme ton temps, les likes ton anxiété. Et ça marche. C'est bien ça le problème.",
      "Near est petite exprès. Seulement les gens que tu as rencontrés, seulement ce qu'ils publient, dans l'ordre où c'est arrivé. Quand tes amis n'ont plus rien posté, c'est fini. Si ça ressemble à un Instagram en moins bien, tant mieux. C'en est un.",
    ],
    downgrades: "Ce qu'on a enlevé :",
    items: [
      { title: "Pas d'algorithme, pas de pub, pas de bouillie d'IA", body: "Ton fil, c'est tes amis, du plus récent au plus ancien. Personne n'a payé pour y être, et rien n'a été généré par une IA." },
      { title: "Pas de scroll infini", body: "TikTok est fait pour ne jamais s'arrêter. Le fil de Near s'arrête quand tes amis arrêtent de publier. Et là, tu sors." },
      { title: "Pas de FOMO", body: "Tu ne vois que les gens que tu vois vraiment. Si ce n'est pas sur Near, tu y étais sûrement." },
    ],
  },
  cta: {
    title: "Va voir tes amis.",
    body: "Near est pensée pour l'iPhone.",
    button: "Télécharger sur l'App Store",
    soon: "Bientôt sur l'App Store",
    waitlist: {
      label: "E-mail",
      placeholder: "ton@email.com",
      button: "Rejoindre la liste",
      sending: "Envoi en cours…",
      done: "Tu es sur la liste. On t'écrira une seule fois.",
      already: "Tu es déjà sur la liste.",
      invalid: "Cet e-mail n'a pas l'air valide.",
      error: "Ça n'a pas marché. Réessaie dans un instant.",
    },
  },
  footer: {
    tagline: "Les amis que tu vois vraiment.",
    privacy: "Confidentialité",
    contact: "Contact",
  },
  lang: {
    label: "Langue",
  },
  privacy: {
    title: "Confidentialité",
    intro: "Cette page accueillera la politique de confidentialité de Near. En bref : tes données sont à toi, on ne les vend pas et on n'affiche pas de pub.",
    sections: [
      { title: "Ce qu'on collecte", body: "Ton nom, ta photo, tes favoris, tes publications, commentaires et messages. Ta position seulement quand tu l'ajoutes à une publication." },
      { title: "Ce qu'on ne fait pas", body: "On ne vend pas tes données, on n'affiche pas de pub et on ne donne pas ton contenu à un algorithme." },
      { title: "Contact", body: "Des questions ? Écris-nous." },
    ],
  },
};

export default fr;

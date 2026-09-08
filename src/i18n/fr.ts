import type { Dictionary } from "./en";

const fr: Dictionary = {
  meta: {
    title: "Near — les amis que tu vois vraiment",
    description:
      "Near est un réseau social pour les amis que tu vois vraiment. On n'ajoute quelqu'un qu'en personne. Sans pub, sans algorithme, sans likes.",
  },
  nav: {
    how: "Comment ça marche",
    believe: "Ce qu'on croit",
    next: "Bientôt",
    cta: "Télécharger l'app",
  },
  hero: {
    title: "Near",
    tagline: "Les amis que tu vois vraiment.",
    scroll: "défiler",
  },
  how: {
    title: "Petite app. Vraies personnes.",
    steps: [
      {
        title: "Rencontrez-vous en vrai",
        body: "Tu ne peux ajouter que quelqu'un qui est à côté de toi. Vous appuyez tous les deux, en moins de 30 secondes. C'est toute la poignée de main.",
      },
      {
        title: "Ta grille",
        body: "Toutes les personnes que tu as vraiment rencontrées, dans une seule grille. Déplace-les comme tu veux. C'est tout ton réseau.",
      },
      {
        title: "Un fil qui se termine",
        body: "Des photos et des mots de tes amis, du plus récent au plus ancien. Sans classement, sans « suggestions pour toi ».",
      },
      {
        title: "Des mots, pas des cœurs",
        body: "Il n'y a pas de likes. Si quelque chose compte pour toi, tu le dis.",
      },
    ],
  },
  next: {
    title: "Ce qu'on construit.",
    intro: "Trois choses en route. Touche les écrans pour les faire défiler.",
    prev: "Précédent",
    next: "Suivant",
    features: [
      { title: "Plans", body: "Choisis un lieu, choisis les amis, envoie. Tout le monde reçoit une notification et répond : partant ou pas. Pas de groupe, pas de sondage, pas de quarante messages pour trouver un vendredi." },
      { title: "Posts à deux", body: "Quand les téléphones de deux amis sont dans la même pièce, vous pouvez publier ensemble. Une photo, les deux noms dessus. La preuve que tu y étais vraiment." },
      { title: "Rétrospectives", body: "À la fin de chaque mois, et de chaque année : qui tu as vu, combien de fois, où. Pas du temps d'écran. Du vrai temps." },
    ],
  },
  believe: {
    title: "Instagram, en pire.",
    paragraphs: [
      "Toute grande app sociale est faite pour te garder dedans. La pub veut tes yeux, l'algorithme ton temps, les likes ton anxiété. Ça marche. C'est ça le problème.",
      "Near est petite exprès. Seulement les gens que tu as rencontrés, seulement ce qu'ils publient, dans l'ordre où c'est arrivé. Ça se termine quand tes amis se taisent. Si ça ressemble à un Instagram en pire, tant mieux. C'en est un.",
    ],
    downgrades: "Régressions :",
    items: [
      { title: "Sans algorithme, sans pub, sans bouillie d'IA", body: "Ton fil, c'est tes amis, du plus récent au plus ancien. Personne n'a payé pour y être, et rien n'a été généré." },
      { title: "Sans scroll infini", body: "TikTok est fait pour ne jamais s'arrêter. Le fil de Near s'arrête quand tes amis arrêtent de publier. Ensuite, va dehors." },
      { title: "Sans FOMO", body: "Tu ne vois que les gens que tu vois vraiment. Si ce n'est pas sur Near, tu y étais sûrement." },
    ],
  },
  cta: {
    title: "Va voir tes amis.",
    body: "Near est conçu pour iPhone.",
    button: "Télécharger sur l'App Store",
    soon: "Bientôt sur l'App Store",
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
    intro: "Cette page contiendra la politique de confidentialité de Near. Version courte : tes données sont à toi, on ne les vend pas et on n'affiche pas de pub.",
    sections: [
      { title: "Ce qu'on collecte", body: "Ton nom, ta photo, tes favoris, tes publications, commentaires et messages. Ta position seulement quand tu l'ajoutes à une publication." },
      { title: "Ce qu'on ne fait pas", body: "On ne vend pas tes données, on n'affiche pas de pub et on ne donne pas ton contenu à un algorithme." },
      { title: "Contact", body: "Des questions ? Écris-nous." },
    ],
  },
};

export default fr;

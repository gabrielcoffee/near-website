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
      done: "Tu es sur la liste. Regarde tes mails.",
      already: "Tu es déjà sur la liste.",
      invalid: "Cet e-mail n'a pas l'air valide.",
      error: "Ça n'a pas marché. Réessaie dans un instant.",
    },
  },
  footer: {
    tagline: "Les amis que tu vois vraiment.",
    privacy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact",
  },
  lang: {
    label: "Langue",
  },
  contact: {
    title: "On est tout ouïe !",
    body: "Écris-nous ici. L'appli est encore en développement, et les nouvelles idées sont les bienvenues !",
    form: {
      name: "Nom",
      namePlaceholder: "Ton nom",
      email: "E-mail",
      emailPlaceholder: "toi@email.com",
      phone: "Ton téléphone",
      phones: { ios: "iPhone", android: "Android", other: "Autre" },
      reason: "Qu'est-ce qui t'amène sur Near ?",
      reasons: [
        { key: "scroll", label: "Arrêter de perdre des heures à scroller" },
        { key: "ads", label: "Fuir le trop-plein de pubs" },
        { key: "curious", label: "Juste par curiosité" },
        { key: "data", label: "Garder mes données pour moi" },
      ],
      message: "Message",
      messagePlaceholder: "Qu'est-ce que tu veux nous dire ?",
      button: "Envoyer",
      sending: "Envoi…",
      done: "Envoyé. On te répond vite.",
      invalid: "Remplis tout pour qu'on puisse te répondre.",
      invalidEmail: "Cet e-mail n'a pas l'air correct.",
      error: "Ça n'a pas marché. Réessaie dans un instant.",
    },
  },
  legal: {
    updated: "Dernière mise à jour",
  },
  privacy: {
    title: "Confidentialité",
    intro: "Version courte : Near ne garde que ce qu'il faut pour montrer à tes amis ce que tu publies. On ne vend rien, on n'affiche pas de pub, et il n'y a ni statistiques ni pistage, ni dans l'appli ni sur ce site.",
    sections: [
      {
        title: "Ce qu'on garde",
        body: "Quand tu te connectes avec Apple, on reçoit un identifiant d'utilisateur d'Apple, plus ton nom et ton e-mail si tu choisis de les partager. Ensuite, seulement ce que tu ajoutes toi-même :",
        items: [
          "Ton nom, ta photo de profil et tes favoris.",
          "Tes publications : photos, légendes et, si tu le laisses, le lieu où elles ont été prises.",
          "Tes commentaires et tes messages avec tes amis.",
          "Qui sont tes amis et quand vous vous êtes ajoutés.",
        ],
      },
      {
        title: "Comment marche « à côté »",
        body: "Near n'utilise pas ta position pour trouver tes amis. Quand l'appli est ouverte, ton téléphone partage un code aléatoire avec les téléphones de la même pièce via le réseau local. Le code change toutes les dix minutes, expire au bout de quinze et n'est jamais gardé plus longtemps. Quelqu'un à côté de toi voit ton nom et ta photo. Plus loin, personne ne voit rien.",
      },
      {
        title: "Les autorisations et à quoi elles servent",
        body: "iOS va te les demander. Chacune fait exactement une chose :",
        items: [
          "Réseau local : trouver l'ami qui est à côté de toi.",
          "Appareil photo et photos : des images pour tes publications.",
          "Position, seulement quand tu utilises l'appli : nommer le lieu d'une publication. Tu peux le modifier ou l'enlever avant de publier. Near ne te suit jamais en arrière-plan.",
        ],
      },
      {
        title: "Qui voit quoi",
        body: "Tes publications, commentaires et messages ne sont visibles que par tes amis. Pas de profil public, pas de recherche, pas de page explorer. Ton nom et ta photo de profil sont la seule chose qu'un inconnu peut voir, et seulement quand vous êtes tous les deux dans la même pièce avec l'appli ouverte.",
      },
      {
        title: "Où ça vit",
        body: "Tes données sont stockées chez Supabase, un hébergeur, et arrivent à tes amis par lui. Apple gère la connexion. Les e-mails de ce site partent via Resend. Aucun d'eux n'a le droit d'utiliser tes données pour autre chose, et personne d'autre ne les reçoit. On ne vend pas de données, on n'affiche pas de pub et on n'utilise aucun SDK de statistiques ou de pistage.",
      },
      {
        title: "Tout supprimer",
        body: "Réglages → Supprimer le compte efface ton compte, tes photos, publications, commentaires et messages, tout de suite et pour de bon. Rien de toi ne reste sur les téléphones de tes amis ni sur le nôtre. Si tu préfères, écris-nous et on le fait pour toi.",
      },
      {
        title: "Ce site",
        body: "La liste d'attente garde ton e-mail et ta langue pour t'écrire une fois quand Near sort, plus un petit mot de bienvenue. Le formulaire de contact garde ce que tu as écrit pour qu'on puisse te répondre. Le site ne pose pas de cookies et n'a pas de statistiques. Il retient ta langue dans ton navigateur, rien de plus.",
      },
      {
        title: "Tes droits",
        body: "Tu peux voir, modifier et supprimer tout ce que Near a sur toi depuis l'appli, quand tu veux. Si tu veux une copie de tes données, ou si tu penses qu'on garde quelque chose qu'on ne devrait pas, écris-nous. C'est une personne qui répond. Near est réservé aux 13 ans et plus, et on ne garde pas sciemment de données de plus jeunes.",
      },
      {
        title: "Modifications",
        body: "Si cette page change, la date en haut change avec. Tout ce qui compte, on te le dit dans l'appli.",
      },
    ],
    contact: { title: "Des questions ?", body: "Écris-nous :" },
  },
  terms: {
    title: "Conditions",
    intro: "Des règles simples pour utiliser Near. Courtes, parce qu'il n'y a pas grand-chose : sois une vraie personne, sois correct avec tes amis, et l'appli est à toi.",
    sections: [
      {
        title: "Qui peut utiliser Near",
        body: "Il faut avoir 13 ans ou plus et te connecter avec ton propre identifiant Apple. Un compte par personne. Near est fait pour des gens, pas pour des bots ni des entreprises.",
      },
      {
        title: "Ton contenu",
        body: "Ce que tu publies est à toi. En le publiant, tu laisses Near le stocker et le montrer à tes amis, c'est tout le principe. Ne publie pas ce que tu n'as pas le droit de partager, et souviens-toi que tes amis peuvent faire des captures, comme partout.",
      },
      {
        title: "Les règles",
        body: "Near reste bien parce qu'il est petit. Aide-nous à le garder comme ça :",
        items: [
          "Pas de harcèlement, de menaces ni de haine.",
          "Pas d'images intimes de qui que ce soit sans son accord, et rien d'illégal.",
          "Ne te fais pas passer pour quelqu'un d'autre.",
          "N'essaie pas de simuler la proximité, d'automatiser l'appli, d'en extraire les données ou de t'y introduire.",
        ],
      },
      {
        title: "Si quelqu'un enfreint les règles",
        body: "Si un compte enfreint ces règles, on peut retirer du contenu, suspendre le compte ou le supprimer. Tu peux partir quand tu veux : Réglages → Supprimer le compte, et tout part avec toi.",
      },
      {
        title: "Le service",
        body: "Near est nouveau et fait par une petite équipe. Il va changer, parfois planter, et pourrait un jour fermer. On fera de notre mieux pour te prévenir de tout ce qui est important. Il est fourni tel quel, sans garantie, et notre responsabilité est limitée autant que la loi le permet. Là où la loi te donne des droits que ces conditions ne peuvent pas retirer, ce sont ces droits qui comptent.",
      },
      {
        title: "Modifications",
        body: "Si ces conditions changent, la date en haut change avec. Continuer à utiliser Near après, c'est accepter les nouvelles.",
      },
    ],
    contact: { title: "Des questions ?", body: "Écris-nous :" },
  },
};

export default fr;

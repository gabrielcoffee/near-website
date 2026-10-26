import type { Dictionary, LegalSection } from "./en";

const fr: Dictionary = {
  meta: {
    title: "Near — les amis que tu vois vraiment",
    description:
      "Near est un réseau social pour les amis que tu vois vraiment. On n'ajoute quelqu'un qu'en personne. Pas de pub, pas d'algorithme, pas de likes.",
  },
  nav: {
    how: "Comment ça marche",
    believe: "Ce qu'on défend",
    cta: "Obtenir l'app",
  },
  hero: {
    title: "Near",
    tagline: "Les amis que tu vois vraiment.",
    scroll: "la suite",
  },
  // TODO translate: English until the new copy is approved (2026-10-22).
  how: {
    steps: [
      {
        title: "Only in person",
        body: "On Near you can only add your friends face to face!",
      },
      {
        title: "Relax without losing time",
        body: "5 to 10 minutes is all it takes to see and catch up with all your friends. Then the feed ends.",
      },
      {
        title: "Show your day to day",
        body: "A safe place to share whatever you want, knowing only people you know will see it.",
      },
    ],
  },
  // TODO translate: English until the new copy is approved (2026-10-22).
  believe: {
    paragraphs: [
      "On average, people spend 2 hours and 21 minutes a day on social media. That's 36 days a year looking at a screen, and it doesn't just take time: it takes sleep, focus and self-esteem.",
      "Near is made to be the opposite. Everyone here is someone you've actually met, so there's no reason to keep scrolling: you see your friends and get on with your day.",
      "We hope most of your life happens away from a screen. And when something feels worth sharing, what better place than one where you know everyone?",
    ],
  },
  without: {
    title: "What you won't find on Near",
    items: [
      { title: "Brands and ads", body: "You're here to see your friends, not to buy products." },
      { title: "An algorithm", body: "Your friends, newest first. That's it." },
      { title: "Endless scroll", body: "The feed ends when your friends stop posting." },
      { title: "Strangers", body: "Nope, only your real friends, people you've met in person." },
    ],
  },
  cta: {
    title: "Va voir tes amis.",
    body: "Near est pensée pour l'iPhone.",
    button: "Télécharger sur l'App Store",
    beta: "Tester la bêta",
    betaNote: "Gratuite sur TestFlight. Bientôt sur l'App Store.",
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
      done: "Message envoyé.",
      invalid: "Remplis tout pour qu'on puisse te répondre.",
      invalidEmail: "Cet e-mail n'a pas l'air correct.",
      error: "Ça n'a pas marché. Réessaie dans un instant.",
    },
  },
  legal: {
    updated: "Dernière mise à jour",
    contents: "Sur cette page",
  },
  privacy: {
    title: "Confidentialité",
    intro: "Version courte : Near ne garde que ce qu'il faut pour montrer à tes amis ce que tu publies. On ne vend rien, on n'affiche pas de pub, et il n'y a ni statistiques ni pistage, ni dans l'appli ni sur ce site.",
    sections: [
      {
        title: "Qui est responsable de tes données",
        body: "Near, l'appli iPhone et ce site, est gérée par {entity}, qui décide de ce qu'il advient de tes données personnelles. Pour tout ce qui touche à la vie privée, y compris tes droits, écris à l'adresse en bas de cette page. C'est une vraie personne qui répond.",
      },
      {
        title: "Ce qu'on garde",
        body: "Tu te connectes avec Apple ou ton e-mail et un mot de passe, et tu peux relier les deux à ton compte dans les Réglages. D'Apple, on reçoit un identifiant d'utilisateur, plus ton nom et ton e-mail si tu choisis de les partager ; avec un e-mail, on garde ton adresse et une forme chiffrée de ton mot de passe, jamais le mot de passe lui-même. Ensuite, seulement ce que tu ajoutes toi-même :",
        items: [
          "Ton nom d'affichage, ta photo de profil, et ta date de naissance et ta courte bio si tu les renseignes.",
          "Tes publications : photos et vidéos, légendes et, si tu le laisses, le lieu où elles ont été prises. Archive une publication et toi seul la vois jusqu'à ce que tu la remettes ; supprime-la et elle disparaît avec ses commentaires.",
          "Tes stories : la photo ou la vidéo, et quels amis l'ont regardée. Tes amis voient une story pendant 24 heures, puis elle expire et est supprimée. Avec Near Spark, tes stories expirées restent dans une archive visible par toi uniquement, et celles que tu épingles sur ton profil dans À la une restent visibles pour tes amis.",
          "Tes messages avec tes amis : le texte, les photos, les vidéos, les messages vocaux, les GIF et les stickers, l'heure d'envoi et l'heure de lecture. Si tu en annules l'envoi, il disparaît pour vous deux.",
          "Tes messages vocaux : tu les enregistres dans l'appli et ils sont stockés sur nos serveurs et chez Cloudflare. Seules les deux personnes de la conversation peuvent les écouter, et si tu en annules l'envoi, il disparaît pour vous deux.",
          "Tes commentaires sur les publications de tes amis : des mots, une photo, un GIF, un sticker ou, avec Near Spark, un commentaire vocal. Une photo ou un commentaire vocal est stocké sur nos serveurs et chez Cloudflare.",
          "Qui sont tes amis et quand vous vous êtes ajoutés, et qui tu as bloqué.",
          "Les signalements que tu nous envoies à propos d'une publication, d'une story, d'un commentaire, d'un message ou d'une personne. Une story ou un message signalé (un message vocal aussi) est conservé jusqu'à 7 jours, même après son expiration ou l'annulation de son envoi, pour qu'on puisse l'examiner. Notre équipe de modération l'ouvre, tout comme la photo d'un commentaire signalé, via des liens à durée de vie courte.",
          "Les retours que tu nous envoies depuis l'app : ce que tu as écrit, avec la version de l'app, celle d'iOS et le modèle de ton téléphone, pour qu'on les lise et qu'on corrige ce qu'il faut. Ils sont supprimés avec ton compte.",
          "Notifications : une courte liste de ce que tes amis ont fait (une amitié, un commentaire sur ton post, un anniversaire, un nouveau post), gardée 60 jours. Si tu autorises les notifications push, le jeton de ton téléphone, pour pouvoir te prévenir. Ton fuseau horaire, pour que l'anniversaire arrive le matin. Chaque type a son propre interrupteur dans les Réglages.",
          "Near Spark : Apple traite le paiement. On reçoit un identifiant de transaction, le produit, les dates et l'état actif ou non de ton abonnement, jamais les détails de ta carte. Tant qu'il est actif, une petite étincelle s'affiche après ton nom partout où il apparaît dans l'appli, donc quiconque voit ton nom sait que tu l'as.",
        ],
      },
      {
        title: "Comment marche « à côté »",
        body: "Near n'utilise pas ta position pour trouver tes amis. Quand Ajouter un ami est ouvert, ton téléphone partage un code aléatoire en Bluetooth avec les téléphones juste à côté de toi. Le code change toutes les dix minutes, expire au bout de quinze et n'est jamais gardé plus longtemps. Quelqu'un à côté de toi voit ton nom et ta photo. Plus loin, personne ne voit rien.",
      },
      {
        title: "Les autorisations et à quoi elles servent",
        body: "iOS va te les demander. Chacune fait exactement une chose :",
        items: [
          "Bluetooth : trouver l'ami qui est à côté de toi, seulement quand Ajouter un ami est ouvert.",
          "Appareil photo et photothèque : photos et vidéos pour tes publications, tes stories et tes messages, et ta photo de profil. Near n'ajoute à tes photos que lorsque tu lui demandes d'enregistrer une story, ou une photo ou une vidéo d'une discussion.",
          "Micro : le son des vidéos que tu enregistres, tes messages vocaux et tes commentaires vocaux.",
          "Notifications : un nouvel ami, un commentaire sur ton post, l'anniversaire d'un ami, un nouveau post d'un ami. Rien d'autre, jamais. Demandé seulement une fois que tu as un ami.",
          "Position, seulement quand tu utilises l'appli : nommer le lieu d'une publication. Tu peux le modifier ou l'enlever avant de publier. Near ne te suit jamais en arrière-plan.",
        ],
      },
      {
        title: "Sur ton téléphone",
        body: "Near garde sur ton téléphone une copie de ta liste d'amis, de ton profil et des photos et vidéos de tes amis pour qu'ils s'ouvrent tout de suite au lieu d'être téléchargés deux fois. C'est un cache : il reste dans l'appli et disparaît quand tu te déconnectes, supprimes ton compte ou supprimes l'appli. Un post que tu enregistres en brouillon reste lui aussi uniquement sur ton téléphone : il n'est jamais envoyé ni inclus dans ta sauvegarde iCloud, il t'attend si tu te déconnectes et disparaît quand tu supprimes ton compte ou l'appli. Les photos et vidéos que tu publies sont stockées sans données de localisation : les balises EXIF et GPS sont retirées.",
      },
      {
        title: "GIF et stickers",
        body: "La recherche et la navigation de GIF et de stickers vont directement de l'appli à KLIPY, un service de GIF tiers, sans passer par nos serveurs. KLIPY reçoit les mots que tu cherches, l'adresse IP de ton téléphone et un identifiant pseudonyme dérivé de ton compte, pas ton nom ni ton e-mail. Un GIF ou un sticker envoyé est un lien vers la copie de KLIPY, pas un fichier qu'on stocke : celui qui le voit le charge depuis KLIPY, qui voit donc aussi son adresse IP. Annule l'envoi du message et le lien disparaît pour vous deux. Ce que KLIPY fait de ces données est expliqué dans sa [politique de confidentialité](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Qui voit quoi",
        body: "Tes publications et tes stories ne sont visibles que par tes amis. Un commentaire, que ce soit des mots, une photo, un GIF, un sticker ou ta voix, est visible par toute personne qui peut voir la publication où il se trouve, y compris les amis de son auteur, qui ne sont pas forcément les tiens ; ils voient ton nom et ta photo de profil avec. Un message, messages vocaux et GIF compris, seulement par les deux personnes concernées. Une story est visible par tes amis pendant 24 heures. Qui l'a regardée n'est montré qu'à la personne qui l'a publiée. Avec Near Spark, tes stories expirées restent dans une archive visible par toi uniquement, et les stories À la une que tu épingles sur ton profil sont visibles par tes amis. Tes amis voient aussi combien de posts et d'amis tu as, et lesquels de tes amis ils connaissent aussi ; les autres restent un nombre. Pas de profil public, pas de recherche, pas de page explorer. À part un commentaire sous une publication qu'il peut voir, ton nom et ta photo de profil sont la seule chose qu'un inconnu peut voir, et seulement quand vous êtes tous les deux dans la même pièce avec l'appli ouverte. Bloque quelqu'un et aucun de vous deux ne reverra l'autre.",
      },
      {
        title: "Où ça vit",
        body: "Tes données sont stockées chez Supabase, un hébergeur, et arrivent à tes amis par lui. Les photos, vidéos, messages vocaux et commentaires vocaux sont stockés et diffusés par Cloudflare. Apple gère la connexion avec Apple et les paiements de Near Spark : on reçoit seulement un identifiant de transaction et l'état de ton abonnement, jamais les détails de ta carte. Les e-mails de Near et de ce site partent via Resend. Aucun d'eux n'a le droit d'utiliser tes données pour autre chose, et personne d'autre ne les reçoit. On ne vend pas de données, on n'affiche pas de pub et on n'utilise aucun SDK de statistiques ou de pistage. Les GIF et les stickers font exception : ton téléphone parle directement à KLIPY, un service de GIF tiers, qui a sa propre [politique de confidentialité](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Tout supprimer",
        body: "Réglages → Confidentialité et sécurité → Supprimer le compte te déconnecte et efface ton compte 30 jours plus tard. D'ici là, personne ne te voit : ton profil, tes publications, tes stories et tes commentaires sont masqués pour tes amis, et personne à côté ne peut te trouver. Tu changes d'avis ? Reconnecte-toi avant la date et tout est comme tu l'as laissé. Ensuite, ton compte, tes photos, vidéos, publications, stories, messages, commentaires et amitiés sont effacés pour de bon et, si tu utilises Apple pour te connecter, Near renonce aussi à son accès à ton compte Apple. Rien de toi ne reste sur les téléphones de tes amis ni sur le nôtre. On t'écrit quand la suppression est programmée, quelques jours avant, puis quand c'est fait. Si tu nous dis pourquoi tu pars, on garde ta réponse sans ton compte, uniquement pour améliorer Near. Si tu préfères, écris-nous et on le fait pour toi.",
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
        title: "Qui est derrière Near",
        body: "Near est une appli iPhone créée et gérée par {entity}. Dans ces conditions, « Near » et « nous » désignent celle ou celui qui gère le service ; « toi » désigne la personne qui l'utilise. Pour tout ce qui concerne ces conditions, écris à l'adresse en bas de cette page.",
      },
      {
        title: "Qui peut utiliser Near",
        body: "Il faut avoir 13 ans ou plus et te connecter avec ton propre compte Apple ou ton propre e-mail. Un compte par personne. Near est fait pour des gens, pas pour des bots ni des entreprises.",
      },
      {
        title: "Ton contenu",
        body: "Ce que tu publies, mets dans une story ou envoies dans un message est à toi. En le partageant, tu laisses Near le stocker et le montrer aux amis avec qui tu l'as partagé, c'est tout le principe. Un commentaire est montré à toute personne qui peut voir la publication où il se trouve. Ne publie pas ce que tu n'as pas le droit de partager, et souviens-toi que tes amis peuvent faire des captures, comme partout.",
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
        title: "Signalements et blocage",
        body: "Chaque publication, story, commentaire, message et profil a une option Signaler, et tu peux bloquer n'importe qui depuis son profil : vous ne serez plus amis et aucun de vous deux ne reverra l'autre. On lit chaque signalement en moins de 24 heures. Il n'y a aucune tolérance pour les contenus ou les comportements abusifs : on supprime ce qui enfreint ces règles et, si besoin, le compte derrière.",
      },
      {
        title: "Si quelqu'un enfreint les règles",
        body: "Si un compte enfreint ces règles, on peut retirer du contenu, suspendre le compte ou le supprimer, sans préavis quand le contenu est illégal ou fait du mal à quelqu'un. Tu peux partir quand tu veux : Réglages → Confidentialité et sécurité → Supprimer le compte. Tu as 30 jours pour changer d'avis, ensuite tout part avec toi.",
      },
      {
        title: "Near Spark",
        body: "Near Spark est un abonnement facultatif, mensuel ou annuel, acheté via l'App Store. Il se renouvelle automatiquement à la fin de chaque période, au prix affiché dans l'appli, jusqu'à ce que tu le résilies. Les nouveaux abonnés éligibles ont la première semaine gratuite ; Apple décide qui est éligible, et tu es facturé à la fin de la semaine si tu n'as pas résilié avant. Tu peux résilier à tout moment dans les réglages de ton identifiant Apple, au moins 24 heures avant la date de renouvellement, et tu gardes Near Spark jusqu'à la fin de la période que tu as payée. Apple gère le paiement et tout remboursement selon ses propres conditions : les remboursements se demandent à Apple. Si le prix change, Apple te prévient d'abord et te demande ton accord. Near peut aussi t'offrir des jours de Near Spark : en ce moment, trois jours quand tu es le premier ami de quelqu'un de nouveau sur Near, jusqu'à trois fois. Ces jours sont un avantage promotionnel, ils ne font pas partie de ton abonnement Apple, et on peut les modifier ou les arrêter à tout moment. Une chose à savoir : l'abonnement est géré par Apple, pas par nous, donc supprimer ton compte Near n'y met pas fin. Si tu as Near Spark, résilie-le dans les réglages de ton identifiant Apple avant de partir, et Apple arrête de te facturer. Tout ce qui est en dehors de Near Spark reste gratuit.",
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

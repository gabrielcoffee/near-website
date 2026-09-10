import type { Dictionary } from "./en";

const it: Dictionary = {
  meta: {
    title: "Near — gli amici che vedi davvero",
    description:
      "Near è un social per gli amici che vedi davvero. Puoi aggiungere qualcuno solo di persona. Niente pubblicità, niente algoritmo, niente like.",
  },
  nav: {
    how: "Come funziona",
    believe: "In cosa crediamo",
    next: "In arrivo",
    cta: "Scarica l'app",
  },
  hero: {
    title: "Near",
    tagline: "Gli amici che vedi davvero.",
    scroll: "scorri",
  },
  how: {
    steps: [
      {
        title: "Solo di persona",
        body: "Puoi aggiungere solo chi ti sta accanto. Hai incontrato un amico? Vi aggiungete dall'app, lì sul momento.",
      },
      {
        title: "La tua griglia",
        body: "Tutte le persone che hai visto dal vivo, in un'unica griglia. Sistemale come vuoi. Questa è tutta la tua rete.",
      },
      {
        title: "Un feed che finisce",
        body: "Foto e post dei tuoi amici, dal più recente al più vecchio. Niente classifiche, niente “consigliati per te”.",
      },
      {
        title: "Parole, non cuori",
        body: "Non ci sono like. Se qualcosa ti sta a cuore, dillo.",
      },
    ],
  },
  next: {
    intro: "Tre novità in arrivo. Tocca gli schermi per sfogliarle.",
    prev: "Precedente",
    next: "Successivo",
    features: [
      { title: "Piani", body: "Scegli un posto, scegli gli amici, invia. Tutti ricevono una notifica e rispondono: ci sono o no. Niente gruppo WhatsApp, niente sondaggi, niente quaranta messaggi per organizzare un venerdì." },
      { title: "Post a due", body: "Quando sei nello stesso posto di un amico, potete pubblicare insieme. Una foto, con i nomi di tutti e due. La prova che c'eravate davvero." },
      { title: "Riepiloghi", body: "Alla fine di ogni mese, e di ogni anno: chi hai visto, quante volte, dove. Non è tempo di utilizzo. È tempo vissuto." },
    ],
  },
  believe: {
    paragraphs: [
      "Ogni grande social è fatto per tenerti incollato. La pubblicità vuole i tuoi occhi, l'algoritmo il tuo tempo, i like la tua ansia. E funziona. Il problema è proprio questo.",
      "Near è piccola apposta. Solo persone che hai incontrato, solo quello che pubblicano, nell'ordine in cui è successo. Quando i tuoi amici smettono di postare, finisce. Se ti sembra un Instagram peggiore, bene. Lo è.",
    ],
    downgrades: "Cosa abbiamo tolto:",
    items: [
      { title: "Niente algoritmo, niente pubblicità, niente robaccia IA", body: "Nel tuo feed ci sono solo i tuoi amici, dal più recente. Nessuno ha pagato per esserci, e niente è generato dall'IA." },
      { title: "Niente scroll infinito", body: "TikTok è fatto per non finire mai. Il feed di Near finisce quando i tuoi amici smettono di postare. A quel punto, esci." },
      { title: "Niente FOMO", body: "Vedi solo le persone che vedi davvero. Se una cosa non è su Near, probabilmente c'eri anche tu." },
    ],
  },
  cta: {
    title: "Vai a trovare i tuoi amici.",
    body: "Near è pensata per iPhone.",
    button: "Scarica dall'App Store",
    soon: "Presto sull'App Store",
    waitlist: {
      label: "Email",
      placeholder: "nome@email.it",
      button: "Mettimi in lista",
      sending: "Invio…",
      done: "Sei in lista. Ti scriviamo una volta sola.",
      already: "Sei già in lista.",
      invalid: "Questa email non sembra valida.",
      error: "Non ha funzionato. Riprova tra poco.",
    },
  },
  footer: {
    tagline: "Gli amici che vedi davvero.",
    privacy: "Privacy",
    contact: "Contatti",
  },
  lang: {
    label: "Lingua",
  },
  privacy: {
    title: "Privacy",
    intro: "Qui ci sarà l'informativa sulla privacy di Near. In breve: i tuoi dati sono tuoi, non li vendiamo e non mostriamo pubblicità.",
    sections: [
      { title: "Cosa raccogliamo", body: "Nome, foto, preferiti, post, commenti e messaggi. La posizione solo quando la aggiungi a un post." },
      { title: "Cosa non facciamo", body: "Non vendiamo i tuoi dati, non mostriamo pubblicità e non diamo i tuoi contenuti in pasto a un algoritmo." },
      { title: "Contatti", body: "Domande? Scrivici." },
    ],
  },
};

export default it;

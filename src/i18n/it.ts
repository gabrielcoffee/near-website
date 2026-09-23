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
      done: "Sei in lista. Controlla la posta.",
      already: "Sei già in lista.",
      invalid: "Questa email non sembra valida.",
      error: "Non ha funzionato. Riprova tra poco.",
    },
  },
  footer: {
    tagline: "Gli amici che vedi davvero.",
    privacy: "Privacy",
    terms: "Termini",
    contact: "Contatti",
  },
  lang: {
    label: "Lingua",
  },
  contact: {
    title: "Siamo tutt'orecchi!",
    body: "Scrivici da qui. L'app è ancora in sviluppo, e le idee nuove sono benvenute!",
    form: {
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "tua@email.com",
      phone: "Il tuo telefono",
      phones: { ios: "iPhone", android: "Android", other: "Altro" },
      reason: "Cosa ti porta su Near?",
      reasons: [
        { key: "scroll", label: "Smettere di perdere ore a scrollare" },
        { key: "ads", label: "Sfuggire alla valanga di pubblicità" },
        { key: "curious", label: "Solo curiosità" },
        { key: "data", label: "Tenere i miei dati per me" },
      ],
      message: "Messaggio",
      messagePlaceholder: "Cosa vuoi raccontarci?",
      button: "Invia",
      sending: "Invio…",
      done: "Messaggio inviato.",
      invalid: "Compila tutto così possiamo risponderti.",
      invalidEmail: "Questa email non sembra giusta.",
      error: "Non ha funzionato. Riprova tra un attimo.",
    },
  },
  legal: {
    updated: "Ultimo aggiornamento",
  },
  privacy: {
    title: "Privacy",
    intro: "Versione breve: Near conserva solo quello che serve per mostrare ai tuoi amici quello che pubblichi. Non vendiamo niente, non mettiamo pubblicità e non c'è nessuna analitica né tracciamento, né nell'app né su questo sito.",
    sections: [
      {
        title: "Cosa conserviamo",
        body: "Quando accedi con Apple o Google riceviamo da loro un ID utente, più il tuo nome e la tua email se scegli di condividerli. Dopo, solo quello che aggiungi tu:",
        items: [
          "Il tuo nome, la foto profilo e, se li compili, la data di nascita e una breve bio.",
          "I tuoi post: foto, didascalie e, se lo lasci, il posto in cui sono state scattate.",
          "I tuoi commenti sui post dei tuoi amici.",
          "Chi sono i tuoi amici, quando vi siete aggiunti e chi hai bloccato.",
          "Le segnalazioni che ci mandi su un post, un commento o una persona.",
        ],
      },
      {
        title: "Come funziona il “vicino”",
        body: "Near non usa la tua posizione per trovare gli amici. Con l'app aperta, il tuo telefono condivide un codice casuale con i telefoni nella stessa stanza tramite la rete locale. Il codice cambia ogni dieci minuti, scade dopo quindici e non viene mai conservato oltre. Chi ti sta accanto vede il tuo nome e la tua foto. Chi è più lontano non vede niente.",
      },
      {
        title: "I permessi e a cosa servono",
        body: "iOS te li chiederà. Ognuno fa esattamente una cosa:",
        items: [
          "Rete locale: trovare l'amico che hai accanto.",
          "Fotocamera e foto: immagini per i tuoi post.",
          "Posizione, solo mentre usi l'app: dare un nome al posto di un post. Puoi modificarlo o toglierlo prima di pubblicare. Near non ti segue mai in background.",
        ],
      },
      {
        title: "Chi vede cosa",
        body: "I tuoi post e i tuoi commenti li vedono solo i tuoi amici. Non c'è un profilo pubblico, né una ricerca, né una pagina esplora. Il tuo nome e la tua foto profilo sono l'unica cosa che uno sconosciuto può vedere, e solo mentre siete nella stessa stanza con l'app aperta. Blocca qualcuno e nessuno dei due vedrà più l'altro.",
      },
      {
        title: "Dove stanno",
        body: "I tuoi dati stanno su Supabase, un fornitore di hosting, e arrivano ai tuoi amici tramite lui. Apple o Google gestisce l'accesso. Le email di questo sito partono tramite Resend. Nessuno di loro può usare i tuoi dati per altro, e nessun altro li riceve. Non vendiamo dati, non mettiamo pubblicità e non usiamo nessun SDK di analitica o tracciamento.",
      },
      {
        title: "Cancellare tutto",
        body: "Impostazioni → Elimina account cancella il tuo account, le tue foto, i post e i commenti, subito e per sempre. Niente di tuo resta sui telefoni dei tuoi amici né sul nostro. Se preferisci, scrivici e lo facciamo noi.",
      },
      {
        title: "Questo sito",
        body: "La lista d'attesa conserva la tua email e la tua lingua per scriverti una volta quando Near esce, più un breve benvenuto. Il modulo di contatto conserva quello che hai scritto per poterti rispondere. Il sito non usa cookie né analitiche. Ricorda la tua lingua nel tuo browser, niente di più.",
      },
      {
        title: "I tuoi diritti",
        body: "Puoi vedere, cambiare e cancellare tutto quello che Near ha su di te dall'app, quando vuoi. Se vuoi una copia dei tuoi dati, o pensi che conserviamo qualcosa che non dovremmo, scrivici. Risponde una persona. Near è per chi ha almeno 13 anni, e non conserviamo consapevolmente dati di chi è più giovane.",
      },
      {
        title: "Modifiche",
        body: "Se questa pagina cambia, la data in alto cambia con lei. Tutto quello che conta te lo diciamo nell'app.",
      },
    ],
    contact: { title: "Domande", body: "Scrivici:" },
  },
  terms: {
    title: "Termini",
    intro: "Regole semplici per usare Near. Brevi, perché non c'è molto: sii una persona vera, sii per bene con i tuoi amici, e l'app è tua.",
    sections: [
      {
        title: "Chi può usare Near",
        body: "Devi avere almeno 13 anni e accedere con il tuo account Apple o Google. Un account a persona. Near è per le persone, non per bot o aziende.",
      },
      {
        title: "I tuoi contenuti",
        body: "Quello che pubblichi è tuo. Pubblicandolo lasci che Near lo conservi e lo mostri ai tuoi amici, che è tutto il punto. Non pubblicare quello che non hai il diritto di condividere, e ricorda che i tuoi amici possono fare screenshot, come ovunque.",
      },
      {
        title: "Le regole",
        body: "Near resta bello perché è piccolo. Aiutaci a tenerlo così:",
        items: [
          "Niente molestie, minacce o odio.",
          "Niente immagini intime di nessuno senza il suo consenso, e niente di illegale.",
          "Non fingere di essere qualcun altro.",
          "Non provare a fingere di essere vicino, automatizzare l'app, estrarne i dati o entrarci di nascosto.",
        ],
      },
      {
        title: "Segnalazioni e blocco",
        body: "Ogni post, commento e profilo ha un tasto per segnalare, e puoi bloccare chiunque dal suo profilo: smetterete di essere amici e nessuno dei due vedrà più l'altro. Leggiamo ogni segnalazione entro 24 ore. Non c'è tolleranza per contenuti o comportamenti molesti: rimuoviamo quello che rompe queste regole e, quando serve, l'account dietro.",
      },
      {
        title: "Se qualcuno rompe le regole",
        body: "Se un account rompe queste regole possiamo rimuovere contenuti, sospendere l'account o eliminarlo, senza preavviso se il contenuto è illegale o fa male a qualcuno. Puoi andartene quando vuoi: Impostazioni → Elimina account, e tutto se ne va con te.",
      },
      {
        title: "Il servizio",
        body: "Near è nuovo e lo fa una squadra piccola. Cambierà, a volte si romperà e un giorno potrebbe chiudere. Faremo del nostro meglio per avvisarti di qualsiasi cosa grossa. È fornito così com'è, senza garanzia, e la nostra responsabilità è limitata fin dove la legge lo permette. Dove la legge ti dà diritti che questi termini non possono toglierti, valgono quei diritti.",
      },
      {
        title: "Modifiche",
        body: "Se questi termini cambiano, la data in alto cambia con loro. Se continui a usare Near dopo, valgono quelli nuovi.",
      },
    ],
    contact: { title: "Domande", body: "Scrivici:" },
  },
};

export default it;

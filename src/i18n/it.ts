import type { Dictionary, LegalSection, PlusRow } from "./en";

const it: Dictionary = {
  meta: {
    title: "Near — gli amici che vedi davvero",
    description:
      "Near è un social per gli amici che vedi davvero. Puoi aggiungere qualcuno solo di persona. Niente pubblicità, niente algoritmo, niente like.",
  },
  nav: {
    how: "Come funziona",
    also: "Anche in Near",
    plus: "Near Spark",
    believe: "In cosa crediamo",
    cta: "Scarica l'app",
  },
  hero: {
    title: "Near",
    tagline: "Gli amici che vedi davvero.",
    scroll: "c'è altro",
  },
  how: {
    steps: [
      {
        title: "Solo di persona",
        body: "Puoi aggiungere solo chi ti sta accanto. Hai incontrato un amico? Vi aggiungete dall'app, lì sul momento.",
      },
      {
        title: "I tuoi amici",
        body: "Tutte le persone che hai visto dal vivo, in un'unica lista. Questa è tutta la tua rete.",
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
  also: {
    intro: "Tocca gli schermi per sfogliarle.",
    features: [
      { title: "Storie", body: "Scegli quanto dura, da 1 a 48 ore. E chi la vede." },
      { title: "Messaggi", body: "Rispondi a una storia e la conversazione inizia lì. Con Near Spark." },
      { title: "Qualità piena", body: "Foto e video restano come li hai fatti. Per tutti." },
    ],
  },
  plus: {
    intro: "Near è gratis. Near Spark è per chi ne vuole di più.",
    free: "Gratis",
    features: [
      { title: "Parla con chi hai davvero incontrato.", body: "Messaggi solo tra amici." },
      { title: "Più nitido di Instagram.", body: "Foto a 4032 px, quasi 4 volte Instagram. Video a 60 fps." },
      { title: "Le tue storie non spariscono.", body: "Tutto quello che hai pubblicato resta in un archivio solo tuo." },
      { title: "Un'icona tutta tua.", body: "Icone alternative disegnate a mano." },
    ],
    labels: { instagram: "Instagram · 1080 px", near: "Near Spark · 4032 px", video: "1080p · 60 fps", highlights: "In evidenza", archive: "Archivio", reply: "Ha risposto alla tua storia", soon: "Presto", you: "Tu" },
    plans: { title: "Piani", monthly: "Mensile", yearly: "Annuale", perMonth: "/ mese", perYear: "/ anno", equals: "{price} al mese", save: "Risparmi il {pct}", trial: "Prima settimana gratis, in entrambi.", soon: "Presto sull'App Store." },
    more: {
      title: "E il resto",
      rows: [
      { label: "Risposte a post e storie", free: false, plus: true },
      { label: "Foto", free: "2048 px", plus: "4032 px" },
      { label: "Video", free: "30 fps", plus: "60 fps" },
      { label: "Amici, feed e storie", free: true, plus: true },
      { label: "Mai pubblicità", free: true, plus: true },
      { label: "Stessa qualità per tutti", free: true, plus: true },
      ] as PlusRow[],
    },
  },
  stack: { prev: "Precedente", next: "Successivo" },
  believe: {
    paragraphs: [
      "Ogni grande social è fatto per tenerti incollato. Near è piccola apposta.",
    ],
    items: [
      { title: "Niente algoritmo, niente pubblicità, niente robaccia IA", body: "I tuoi amici, dal più recente. Nient'altro." },
      { title: "Niente scroll infinito", body: "Il feed finisce quando i tuoi amici smettono di postare." },
      { title: "Niente FOMO", body: "Vedi solo le persone che vedi davvero." },
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
    contents: "In questa pagina",
  },
  privacy: {
    title: "Privacy",
    intro: "Versione breve: Near conserva solo quello che serve per mostrare ai tuoi amici quello che pubblichi. Non vendiamo niente, non mettiamo pubblicità e non c'è nessuna analitica né tracciamento, né nell'app né su questo sito.",
    sections: [
      {
        title: "Cosa conserviamo",
        body: "Accedi con Apple, con Google o con la tua email e una password, e nelle Impostazioni puoi collegarne più di uno al tuo account. Da Apple o Google riceviamo un ID utente, più il tuo nome e la tua email se scegli di condividerli; con l'email conserviamo il tuo indirizzo e una forma cifrata della password, mai la password in sé. Dopo, solo quello che aggiungi tu:",
        items: [
          "Il tuo nome, la foto profilo e, se li compili, la data di nascita e una breve bio.",
          "I tuoi post: foto e video, didascalie e, se lo lasci, il posto in cui sono stati scattati. Se archivi un post lo vedi solo tu finché non lo riporti indietro; se lo elimini sparisce, con i suoi commenti.",
          "Le tue storie: la foto o il video, e quali amici l'hanno guardata. I tuoi amici vedono una storia per 24 ore, poi scade e viene eliminata. Con Near Spark le tue storie scadute restano in un archivio che vedi solo tu, e quelle che fissi sul profilo come In evidenza restano visibili ai tuoi amici.",
          "I tuoi messaggi con gli amici: il testo, le foto, i video, i messaggi vocali, le GIF e gli sticker, quando li hai inviati e quando sono stati letti. Se ne annulli l'invio, sparisce per entrambi.",
          "I tuoi messaggi vocali: li registri nell'app e sono conservati sui nostri server e su Cloudflare. Solo le due persone della conversazione possono ascoltarli, e se ne annulli l'invio sparisce per entrambi.",
          "I tuoi commenti sui post dei tuoi amici: parole, una foto, una GIF, uno sticker o, con Near Spark, un commento vocale. Una foto o un commento vocale è conservato sui nostri server e su Cloudflare.",
          "Chi sono i tuoi amici, quando vi siete aggiunti e chi hai bloccato.",
          "Le segnalazioni che ci mandi su un post, una storia, un commento, un messaggio o una persona. Una storia o un messaggio segnalato (anche un messaggio vocale) viene conservato fino a 7 giorni, anche dopo che è scaduto o è stato annullato, così possiamo esaminarlo. Il nostro team di moderazione lo apre, come la foto di un commento segnalato, tramite link di breve durata.",
          "Il feedback che ci mandi dall'app: quello che hai scritto, con la versione dell'app, quella di iOS e il modello del telefono, così possiamo leggerlo e sistemare le cose. Viene cancellato insieme al tuo account.",
          "Near Spark: Apple gestisce il pagamento. Riceviamo un ID di transazione, il prodotto, le date e se il tuo abbonamento è attivo, mai i dati della tua carta. Finché è attivo, una piccola scintilla compare dopo il tuo nome ovunque appaia nell'app, quindi chi vede il tuo nome può capire che ce l'hai.",
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
          "Fotocamera e libreria foto: foto e video per i tuoi post, le tue storie e i tuoi messaggi, e la tua foto profilo. Near aggiunge qualcosa alle tue foto solo quando gli chiedi di salvare una storia, o una foto o un video di una chat.",
          "Microfono: l'audio dei video che registri, i tuoi messaggi vocali e i tuoi commenti vocali.",
          "Posizione, solo mentre usi l'app: dare un nome al posto di un post. Puoi modificarlo o toglierlo prima di pubblicare. Near non ti segue mai in background.",
        ],
      },
      {
        title: "Sul tuo telefono",
        body: "Near tiene sul tuo telefono una copia delle foto e dei video dei tuoi amici, così si aprono subito senza scaricarli due volte. È una cache: resta dentro l'app e sparisce quando esci dall'account, elimini l'account o elimini l'app. Anche un post che salvi come bozza resta solo sul tuo telefono: non viene mai caricato né incluso nel backup di iCloud, ti aspetta se esci dall'account e sparisce quando elimini l'account o l'app. Le foto e i video che pubblichi vengono conservati senza dati di posizione: i tag EXIF e GPS vengono rimossi.",
      },
      {
        title: "GIF e sticker",
        body: "La ricerca e la navigazione di GIF e sticker vanno direttamente dall'app a KLIPY, un servizio di GIF di terze parti, senza passare dai nostri server. KLIPY riceve le parole che cerchi, l'indirizzo IP del tuo telefono e un identificativo pseudonimo ricavato dal tuo account, non il tuo nome né la tua email. Una GIF o uno sticker che invii è un link alla copia di KLIPY, non un file che conserviamo: chi lo vede lo carica da KLIPY, che vede quindi anche il suo indirizzo IP. Se annulli l'invio del messaggio, il link sparisce per entrambi. Cosa fa KLIPY con questi dati lo spiega la sua [informativa sulla privacy](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Chi vede cosa",
        body: "I tuoi post e le tue storie li vedono solo i tuoi amici. Un commento, che sia fatto di parole, una foto, una GIF, uno sticker o la tua voce, lo vede chiunque possa vedere il post a cui appartiene, compresi gli amici di chi l'ha pubblicato, che possono non essere tuoi amici; insieme vedono il tuo nome e la tua foto profilo. Un messaggio, anche vocale o con una GIF, lo vedono solo le due persone coinvolte. I tuoi amici vedono una storia per 24 ore. Chi ha guardato una storia lo vede solo la persona che l'ha pubblicata. Con Near Spark le tue storie scadute restano in un archivio che vedi solo tu, e le storie In evidenza che fissi sul profilo le vedono i tuoi amici. I tuoi amici vedono anche quanti post e amici hai, e quali dei tuoi amici conoscono anche loro; gli altri restano un numero. Non c'è un profilo pubblico, né una ricerca, né una pagina esplora. A parte un commento sotto un post che può vedere, il tuo nome e la tua foto profilo sono l'unica cosa che uno sconosciuto può vedere, e solo mentre siete nella stessa stanza con l'app aperta. Blocca qualcuno e nessuno dei due vedrà più l'altro.",
      },
      {
        title: "Dove stanno",
        body: "I tuoi dati stanno su Supabase, un fornitore di hosting, e arrivano ai tuoi amici tramite lui. Foto, video, messaggi vocali e commenti vocali sono conservati e consegnati da Cloudflare. Apple o Google gestisce l'accesso con loro, e Apple gestisce i pagamenti di Near Spark: noi riceviamo solo un ID di transazione e lo stato del tuo abbonamento, mai i dati della tua carta. Le email di Near e di questo sito partono tramite Resend. Nessuno di loro può usare i tuoi dati per altro, e nessun altro li riceve. Non vendiamo dati, non mettiamo pubblicità e non usiamo nessun SDK di analitica o tracciamento. Per GIF e sticker è diverso: il tuo telefono parla direttamente con KLIPY, un servizio di GIF di terze parti, che ha una sua [informativa sulla privacy](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Cancellare tutto",
        body: "Impostazioni → Privacy e sicurezza → Elimina account ti disconnette e cancella il tuo account 30 giorni dopo. Fino ad allora nessuno ti vede: il tuo profilo, i post, le storie e i commenti restano nascosti ai tuoi amici, e nessuno vicino a te può trovarti. Ci hai ripensato? Rientra prima della data e trovi tutto come l'hai lasciato. Dopo, il tuo account, le foto, i video, i post, le storie, i messaggi, i commenti e le amicizie vengono cancellati per sempre e, se accedi con Apple, Near rinuncia anche al suo accesso al tuo Account Apple. Niente di tuo resta sui telefoni dei tuoi amici né sul nostro. Ti scriviamo quando l'eliminazione è programmata, qualche giorno prima e quando è fatta. Se ci dici perché te ne vai, teniamo la risposta senza il tuo account, solo per migliorare Near. Se preferisci, scrivici e lo facciamo noi.",
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
        body: "Devi avere almeno 13 anni e accedere con il tuo account Apple o Google o con la tua email. Un account a persona. Near è per le persone, non per bot o aziende.",
      },
      {
        title: "I tuoi contenuti",
        body: "Quello che pubblichi, metti in una storia o invii in un messaggio è tuo. Condividendolo lasci che Near lo conservi e lo mostri ai tuoi amici, che è tutto il punto. Un commento lo vede chiunque possa vedere il post a cui appartiene. Non pubblicare quello che non hai il diritto di condividere, e ricorda che i tuoi amici possono fare screenshot, come ovunque.",
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
        body: "Ogni post, storia, commento, messaggio e profilo ha un tasto per segnalare, e puoi bloccare chiunque dal suo profilo: smetterete di essere amici e nessuno dei due vedrà più l'altro. Leggiamo ogni segnalazione entro 24 ore. Non c'è tolleranza per contenuti o comportamenti molesti: rimuoviamo quello che rompe queste regole e, quando serve, l'account dietro.",
      },
      {
        title: "Se qualcuno rompe le regole",
        body: "Se un account rompe queste regole possiamo rimuovere contenuti, sospendere l'account o eliminarlo, senza preavviso se il contenuto è illegale o fa male a qualcuno. Puoi andartene quando vuoi: Impostazioni → Privacy e sicurezza → Elimina account. Hai 30 giorni per ripensarci, poi tutto se ne va con te.",
      },
      {
        title: "Near Spark",
        body: "Near Spark è un abbonamento facoltativo, mensile o annuale, acquistato tramite l'App Store. Si rinnova automaticamente alla fine di ogni periodo, al prezzo mostrato nell'app, finché non lo annulli. I nuovi abbonati idonei hanno la prima settimana gratis; è Apple a decidere chi è idoneo, e alla fine della settimana ti viene addebitato il costo se non annulli prima. Puoi annullarlo quando vuoi nelle impostazioni del tuo ID Apple, almeno 24 ore prima della data di rinnovo, e mantieni Near Spark fino alla fine del periodo che hai pagato. Il pagamento e gli eventuali rimborsi li gestisce Apple secondo i suoi termini, quindi i rimborsi si chiedono ad Apple. Se il prezzo cambia, Apple ti avvisa prima e ti chiede di accettare. Near può anche regalarti giorni di Near Spark: oggi, tre giorni quando sei il primo amico di qualcuno appena arrivato su Near, fino a tre volte. Quei giorni sono un vantaggio promozionale, non fanno parte del tuo abbonamento Apple, e possiamo cambiarli o toglierli in qualsiasi momento. Una cosa da sapere: l'abbonamento è gestito da Apple, non da noi, quindi eliminare il tuo account Near non lo interrompe. Se hai Near Spark, annullalo nelle impostazioni del tuo ID Apple prima di andartene, e Apple smette di addebitarti. Tutto quello che non è Near Spark resta gratis.",
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

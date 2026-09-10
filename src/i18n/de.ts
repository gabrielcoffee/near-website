import type { Dictionary } from "./en";

const de: Dictionary = {
  meta: {
    title: "Near — Freunde, die du wirklich siehst",
    description:
      "Near ist eine Social-App für die Freunde, die du wirklich siehst. Hinzufügen geht nur persönlich. Keine Werbung, kein Algorithmus, keine Likes.",
  },
  nav: {
    how: "So funktioniert's",
    believe: "Wofür wir stehen",
    next: "Demnächst",
    cta: "App holen",
  },
  hero: {
    title: "Near",
    tagline: "Freunde, die du wirklich siehst.",
    scroll: "scrollen",
  },
  how: {
    steps: [
      {
        title: "Nur persönlich",
        body: "Du kannst nur jemanden hinzufügen, der neben dir steht. Freund getroffen? Dann fügt ihr euch in der App hinzu, direkt vor Ort.",
      },
      {
        title: "Dein Raster",
        body: "Alle, die du wirklich getroffen hast, in einem Raster. Ordne sie an, wie du willst. Das ist dein ganzes Netzwerk.",
      },
      {
        title: "Ein Feed mit Ende",
        body: "Fotos und Texte deiner Freunde, das Neueste zuerst. Kein Ranking, kein „Vorschläge für dich“.",
      },
      {
        title: "Worte statt Herzen",
        body: "Es gibt keine Likes. Wenn dir etwas wichtig ist, sag es.",
      },
    ],
  },
  next: {
    intro: "Drei Neuheiten sind in Arbeit. Tipp auf die Screens, um weiterzublättern.",
    prev: "Zurück",
    next: "Weiter",
    features: [
      { title: "Pläne", body: "Ort wählen, Freunde wählen, abschicken. Alle bekommen eine Benachrichtigung und sagen zu oder ab. Kein Gruppenchat, keine Umfrage, keine vierzig Nachrichten, bis ein Freitag steht." },
      { title: "Gemeinsame Posts", body: "Wenn du mit einem Freund am selben Ort bist, könnt ihr zusammen posten. Ein Foto, beide Namen drauf. Der Beweis, dass ihr wirklich da wart." },
      { title: "Rückblicke", body: "Am Ende jedes Monats und jedes Jahres: wen du gesehen hast, wie oft, wo. Keine Bildschirmzeit. Echte Zeit." },
    ],
  },
  believe: {
    paragraphs: [
      "Jede große Social-App ist darauf gebaut, dich festzuhalten. Werbung will deine Augen, der Algorithmus deine Zeit, Likes deine Unsicherheit. Und es funktioniert. Genau das ist das Problem.",
      "Near ist absichtlich klein. Nur Leute, die du getroffen hast, nur was sie posten, in der Reihenfolge, in der es passiert ist. Wenn deine Freunde nichts mehr posten, ist Schluss. Klingt nach einem schlechteren Instagram? Gut so. Ist es auch.",
    ],
    downgrades: "Bewusst weggelassen:",
    items: [
      { title: "Kein Algorithmus, keine Werbung, kein KI-Müll", body: "In deinem Feed sind nur deine Freunde, das Neueste zuerst. Niemand hat dafür bezahlt, und nichts davon ist KI-generiert." },
      { title: "Kein endloses Scrollen", body: "TikTok ist so gebaut, dass es nie aufhört. Der Feed von Near hört auf, wenn deine Freunde nichts mehr posten. Dann ab nach draußen." },
      { title: "Kein FOMO", body: "Du siehst nur Leute, die du auch wirklich siehst. Was nicht auf Near ist, hast du wahrscheinlich selbst erlebt." },
    ],
  },
  cta: {
    title: "Triff deine Freunde.",
    body: "Near ist fürs iPhone gemacht.",
    button: "Im App Store laden",
    soon: "Bald im App Store",
    waitlist: {
      label: "E-Mail",
      placeholder: "deine@email.de",
      button: "Auf die Warteliste",
      sending: "Wird gesendet…",
      done: "Du stehst auf der Liste. Wir schreiben dir genau einmal.",
      already: "Du stehst schon auf der Liste.",
      invalid: "Diese E-Mail-Adresse stimmt wohl nicht.",
      error: "Hat nicht geklappt. Versuch es gleich noch mal.",
    },
  },
  footer: {
    tagline: "Freunde, die du wirklich siehst.",
    privacy: "Datenschutz",
    contact: "Kontakt",
  },
  lang: {
    label: "Sprache",
  },
  privacy: {
    title: "Datenschutz",
    intro: "Auf dieser Seite steht bald die Datenschutzerklärung von Near. Kurzfassung: Deine Daten gehören dir, wir verkaufen sie nicht und zeigen keine Werbung.",
    sections: [
      { title: "Was wir sammeln", body: "Deinen Namen, dein Foto, deine Favoriten, Beiträge, Kommentare und Nachrichten. Deinen Standort nur, wenn du ihn zu einem Beitrag hinzufügst." },
      { title: "Was wir nicht tun", body: "Wir verkaufen deine Daten nicht, zeigen keine Werbung und geben deine Inhalte keinem Algorithmus." },
      { title: "Kontakt", body: "Fragen? Schreib uns." },
    ],
  },
};

export default de;

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
      done: "Du stehst auf der Liste. Schau in dein Postfach.",
      already: "Du stehst schon auf der Liste.",
      invalid: "Diese E-Mail-Adresse stimmt wohl nicht.",
      error: "Hat nicht geklappt. Versuch es gleich noch mal.",
    },
  },
  footer: {
    tagline: "Freunde, die du wirklich siehst.",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
  },
  lang: {
    label: "Sprache",
  },
  contact: {
    title: "Wir sind ganz Ohr!",
    body: "Schreib uns hier. Die App ist noch in Entwicklung, und neue Ideen sind willkommen!",
    form: {
      name: "Name",
      namePlaceholder: "Dein Name",
      email: "E-Mail",
      emailPlaceholder: "du@email.com",
      phone: "Dein Handy",
      phones: { ios: "iPhone", android: "Android", other: "Anderes" },
      reason: "Was bringt dich zu Near?",
      reasons: [
        { key: "scroll", label: "Nicht mehr stundenlang scrollen" },
        { key: "ads", label: "Weg von der Werbeflut" },
        { key: "curious", label: "Nur neugierig" },
        { key: "data", label: "Meine Daten für mich behalten" },
      ],
      message: "Nachricht",
      messagePlaceholder: "Was willst du uns erzählen?",
      button: "Senden",
      sending: "Wird gesendet…",
      done: "Nachricht gesendet.",
      invalid: "Füll alles aus, damit wir antworten können.",
      invalidEmail: "Die E-Mail sieht nicht richtig aus.",
      error: "Hat nicht geklappt. Versuch es gleich noch mal.",
    },
  },
  legal: {
    updated: "Zuletzt aktualisiert",
  },
  privacy: {
    title: "Datenschutz",
    intro: "Kurzfassung: Near speichert nur, was nötig ist, damit deine Freunde sehen, was du postest. Wir verkaufen nichts, zeigen keine Werbung, und es gibt weder Analytics noch Tracking, weder in der App noch auf dieser Seite.",
    sections: [
      {
        title: "Was wir speichern",
        body: "Wenn du dich mit Apple oder Google anmeldest, bekommen wir von ihnen eine Nutzer-ID, dazu deinen Namen und deine E-Mail, falls du sie teilst. Danach nur, was du selbst hinzufügst:",
        items: [
          "Deinen Anzeigenamen, dein Profilfoto, und dein Geburtsdatum und deine kurze Bio, falls du sie ausfüllst.",
          "Deine Posts: Fotos, Texte und, wenn du es dranlässt, den Ort, an dem sie entstanden sind.",
          "Deine Kommentare zu den Posts deiner Freunde.",
          "Wer deine Freunde sind und wann ihr euch hinzugefügt habt, und wen du blockiert hast.",
          "Meldungen, die du uns zu einem Post, einem Kommentar oder einer Person schickst.",
        ],
      },
      {
        title: "Wie „in der Nähe“ funktioniert",
        body: "Near nutzt nicht deinen Standort, um Freunde zu finden. Solange die App offen ist, teilt dein Handy über das lokale Netzwerk einen zufälligen Code mit den Handys im selben Raum. Der Code wechselt alle zehn Minuten, läuft nach fünfzehn ab und wird darüber hinaus nie gespeichert. Wer neben dir steht, sieht deinen Namen und dein Foto. Wer weiter weg ist, sieht nichts.",
      },
      {
        title: "Berechtigungen und wofür sie da sind",
        body: "iOS wird dich danach fragen. Jede macht genau eine Sache:",
        items: [
          "Lokales Netzwerk: den Freund finden, der neben dir steht.",
          "Kamera und Fotos: Bilder für deine Posts.",
          "Standort, nur während du die App nutzt: den Ort eines Posts benennen. Du kannst ihn vor dem Posten ändern oder entfernen. Near verfolgt dich nie im Hintergrund.",
        ],
      },
      {
        title: "Wer was sieht",
        body: "Deine Posts und Kommentare sehen nur deine Freunde. Es gibt kein öffentliches Profil, keine Suche und keine Entdecken-Seite. Dein Name und dein Profilfoto sind das Einzige, was ein Fremder sehen kann, und nur, solange ihr beide im selben Raum seid und die App offen habt. Blockierst du jemanden, seht ihr euch beide nie wieder.",
      },
      {
        title: "Wo es liegt",
        body: "Deine Daten liegen bei Supabase, einem Hosting-Anbieter, und kommen über ihn zu deinen Freunden. Apple oder Google übernimmt die Anmeldung. E-Mails von dieser Seite gehen über Resend raus. Keiner von ihnen darf deine Daten für etwas anderes nutzen, und sonst bekommt sie niemand. Wir verkaufen keine Daten, zeigen keine Werbung und nutzen kein Analytics- oder Tracking-SDK.",
      },
      {
        title: "Alles löschen",
        body: "Einstellungen → Account löschen entfernt deinen Account, deine Fotos, Posts und Kommentare, sofort und endgültig. Nichts von dir bleibt auf den Handys deiner Freunde oder bei uns. Wenn dir das lieber ist, schreib uns, und wir erledigen es für dich.",
      },
      {
        title: "Diese Website",
        body: "Die Warteliste speichert deine E-Mail und deine Sprache, damit wir dir einmal schreiben können, wenn Near erscheint, plus ein kurzes Willkommen. Das Kontaktformular speichert, was du geschrieben hast, damit wir antworten können. Die Seite setzt keine Cookies und hat kein Analytics. Sie merkt sich deine Sprache in deinem Browser, mehr nicht.",
      },
      {
        title: "Deine Rechte",
        body: "Du kannst alles, was Near über dich hat, jederzeit in der App sehen, ändern und löschen. Wenn du eine Kopie deiner Daten willst oder glaubst, wir speichern etwas, das wir nicht sollten, schreib uns. Es antwortet ein Mensch. Near ist für Leute ab 13, und wir speichern wissentlich keine Daten von Jüngeren.",
      },
      {
        title: "Änderungen",
        body: "Wenn sich diese Seite ändert, ändert sich das Datum oben mit. Alles Wichtige sagen wir dir in der App.",
      },
    ],
    contact: { title: "Fragen", body: "Schreib uns:" },
  },
  terms: {
    title: "Nutzungsbedingungen",
    intro: "Einfache Regeln für Near. Kurz, weil es nicht viel gibt: Sei ein echter Mensch, sei anständig zu deinen Freunden, und die App gehört dir.",
    sections: [
      {
        title: "Wer Near nutzen darf",
        body: "Du musst mindestens 13 sein und dich mit deinem eigenen Apple- oder Google-Account anmelden. Ein Account pro Person. Near ist für Menschen, nicht für Bots oder Firmen.",
      },
      {
        title: "Deine Inhalte",
        body: "Was du postest, gehört dir. Mit dem Posten erlaubst du Near, es zu speichern und deinen Freunden zu zeigen, darum geht es ja. Poste nichts, was du nicht teilen darfst, und denk dran, dass deine Freunde Screenshots machen können, wie überall.",
      },
      {
        title: "Die Regeln",
        body: "Near bleibt gut, weil es klein ist. Hilf mit, dass es so bleibt:",
        items: [
          "Keine Belästigung, keine Drohungen, kein Hass.",
          "Keine intimen Bilder von anderen ohne deren Einverständnis, und nichts Illegales.",
          "Gib dich nicht als jemand anderes aus.",
          "Täusche keine Nähe vor, automatisiere die App nicht, lies sie nicht aus und versuch nicht, einzubrechen.",
        ],
      },
      {
        title: "Melden und Blockieren",
        body: "Jeder Post, Kommentar und jedes Profil hat eine Melden-Option, und du kannst jeden über sein Profil blockieren: ihr seid dann keine Freunde mehr und keiner von euch sieht den anderen je wieder. Wir lesen jede Meldung innerhalb von 24 Stunden. Es gibt keine Toleranz für missbräuchliche Inhalte oder missbräuchliches Verhalten: wir entfernen, was gegen diese Regeln verstößt, und wenn nötig den Account dahinter.",
      },
      {
        title: "Wenn jemand die Regeln bricht",
        body: "Bricht ein Account diese Regeln, können wir Inhalte entfernen, den Account sperren oder löschen, ohne Vorwarnung, wenn der Inhalt illegal ist oder jemandem schadet. Du kannst jederzeit gehen: Einstellungen → Account löschen, und alles geht mit dir.",
      },
      {
        title: "Der Dienst",
        body: "Near ist neu und wird von einem kleinen Team gemacht. Es wird sich ändern, manchmal kaputtgehen und könnte eines Tages eingestellt werden. Wir tun unser Bestes, dich vor allem Großen zu warnen. Es wird bereitgestellt, wie es ist, ohne Gewähr, und unsere Haftung ist beschränkt, soweit das Gesetz es erlaubt. Wo das Gesetz dir Rechte gibt, die diese Bedingungen nicht nehmen können, gelten diese Rechte.",
      },
      {
        title: "Änderungen",
        body: "Wenn sich diese Bedingungen ändern, ändert sich das Datum oben mit. Nutzt du Near danach weiter, gelten die neuen.",
      },
    ],
    contact: { title: "Fragen", body: "Schreib uns:" },
  },
};

export default de;

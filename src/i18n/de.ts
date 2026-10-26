import type { Dictionary, LegalSection } from "./en";

const de: Dictionary = {
  meta: {
    title: "Near — Freunde, die du wirklich siehst",
    description:
      "Near ist eine Social-App für die Freunde, die du wirklich siehst. Hinzufügen geht nur persönlich. Keine Werbung, kein Algorithmus, keine Likes.",
  },
  nav: {
    how: "So funktioniert's",
    believe: "Wofür wir stehen",
    cta: "App holen",
  },
  hero: {
    title: "Near",
    tagline: "Freunde, die du wirklich siehst.",
    scroll: "da kommt mehr",
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
    title: "Triff deine Freunde.",
    body: "Near ist fürs iPhone gemacht.",
    button: "Im App Store laden",
    beta: "Beta testen",
    betaNote: "Kostenlos über TestFlight. Bald im App Store.",
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
    contents: "Auf dieser Seite",
  },
  privacy: {
    title: "Datenschutz",
    intro: "Kurzfassung: Near speichert nur, was nötig ist, damit deine Freunde sehen, was du postest. Wir verkaufen nichts, zeigen keine Werbung, und es gibt weder Analytics noch Tracking, weder in der App noch auf dieser Seite.",
    sections: [
      {
        title: "Wer für deine Daten verantwortlich ist",
        body: "Für Near, die iPhone-App und diese Seite, ist {entity} verantwortlich und entscheidet, was mit deinen personenbezogenen Daten passiert. Bei allem rund um Datenschutz, auch zu deinen Rechten, schreib an die Adresse am Ende dieser Seite. Es antwortet ein Mensch.",
      },
      {
        title: "Was wir speichern",
        body: "Du meldest dich mit Apple oder deiner E-Mail und einem Passwort an und kannst in den Einstellungen beides mit deinem Account verbinden. Von Apple bekommen wir eine Nutzer-ID, dazu deinen Namen und deine E-Mail, falls du sie teilst; bei E-Mail speichern wir deine Adresse und eine verschlüsselte Form deines Passworts, nie das Passwort selbst. Danach nur, was du selbst hinzufügst:",
        items: [
          "Deinen Anzeigenamen, dein Profilfoto, und dein Geburtsdatum und deine kurze Bio, falls du sie ausfüllst.",
          "Deine Posts: Fotos und Videos, Bildunterschriften und, wenn du es dranlässt, den Ort, an dem sie entstanden sind. Archivierst du einen Post, siehst nur du ihn, bis du ihn zurückholst; löschst du ihn, ist er samt Kommentaren weg.",
          "Deine Stories: das Foto oder Video und welche Freunde es gesehen haben. Deine Freunde sehen eine Story 24 Stunden lang, danach läuft sie ab und wird gelöscht. Mit Near Spark bleiben deine abgelaufenen Stories in einem Archiv, das nur du siehst, und die, die du als Highlights an dein Profil pinnst, bleiben für deine Freunde sichtbar.",
          "Deine Nachrichten mit Freunden: der Text, Fotos, Videos, Sprachnachrichten, GIFs und Sticker, wann du sie gesendet hast und wann sie gelesen wurden. Ziehst du eine Nachricht zurück, verschwindet sie für euch beide.",
          "Deine Sprachnachrichten: Du nimmst sie in der App auf, und sie liegen auf unseren Servern und bei Cloudflare. Nur die zwei in der Unterhaltung können sie hören, und ziehst du eine zurück, verschwindet sie für euch beide.",
          "Deine Kommentare zu den Posts deiner Freunde: Text, ein Foto, ein GIF, ein Sticker oder, mit Near Spark, ein Sprachkommentar. Ein Foto oder ein Sprachkommentar liegt auf unseren Servern und bei Cloudflare.",
          "Wer deine Freunde sind und wann ihr euch hinzugefügt habt, und wen du blockiert hast.",
          "Meldungen, die du uns zu einem Post, einer Story, einem Kommentar, einer Nachricht oder einer Person schickst. Eine gemeldete Story oder Nachricht (auch eine Sprachnachricht) wird bis zu 7 Tage aufbewahrt, auch nachdem sie abgelaufen ist oder zurückgezogen wurde, damit wir sie prüfen können. Unser Moderationsteam öffnet sie, ebenso das Foto eines gemeldeten Kommentars, über kurzlebige Links.",
          "Feedback, das du uns aus der App schickst: was du geschrieben hast, mit App-Version, iOS-Version und Handymodell, damit wir es lesen und Dinge verbessern können. Es wird mit deinem Konto gelöscht.",
          "Mitteilungen: eine kurze Liste dessen, was deine Freunde gemacht haben (eine Freundschaft, ein Kommentar zu deinem Post, ein Geburtstag, ein neuer Post), 60 Tage aufbewahrt. Wenn du Push-Mitteilungen erlaubst, das Geräte-Token deines Handys, damit wir es erreichen. Deine Zeitzone, damit ein Geburtstag morgens ankommt. Jede Art hat ihren eigenen Schalter in den Einstellungen.",
          "Near Spark: Apple wickelt die Zahlung ab. Wir erhalten eine Transaktions-ID, das Produkt, die Daten und ob dein Abo aktiv ist, nie deine Kartendaten. Solange es aktiv ist, steht ein kleiner Funke hinter deinem Namen, überall in der App, wo er erscheint, also sieht jeder, der deinen Namen sieht, dass du es hast.",
        ],
      },
      {
        title: "Wie „in der Nähe“ funktioniert",
        body: "Near nutzt nicht deinen Standort, um Freunde zu finden. Solange „Freund hinzufügen“ offen ist, teilt dein Handy per Bluetooth einen zufälligen Code mit den Handys direkt neben dir. Der Code wechselt alle zehn Minuten, läuft nach fünfzehn ab und wird darüber hinaus nie gespeichert. Wer neben dir steht, sieht deinen Namen und dein Foto. Wer weiter weg ist, sieht nichts.",
      },
      {
        title: "Berechtigungen und wofür sie da sind",
        body: "iOS wird dich danach fragen. Jede macht genau eine Sache:",
        items: [
          "Bluetooth: den Freund finden, der neben dir steht, nur solange „Freund hinzufügen“ offen ist.",
          "Kamera und Fotos: Fotos und Videos für deine Posts, Stories und Nachrichten und dein Profilbild. Near fügt deinen Fotos nur etwas hinzu, wenn du es bittest, eine Story oder ein Foto oder Video aus einem Chat zu speichern.",
          "Mikrofon: der Ton in den Videos, die du aufnimmst, deine Sprachnachrichten und deine Sprachkommentare.",
          "Mitteilungen: ein neuer Freund, ein Kommentar zu deinem Post, der Geburtstag eines Freundes, ein neuer Post eines Freundes. Sonst nichts, nie. Gefragt wird erst, wenn du einen Freund hast.",
          "Standort, nur während du die App nutzt: den Ort eines Posts benennen. Du kannst ihn vor dem Posten ändern oder entfernen. Near verfolgt dich nie im Hintergrund.",
        ],
      },
      {
        title: "Auf deinem Handy",
        body: "Near legt eine Kopie deiner Freundesliste, deines Profils und der Fotos und Videos deiner Freunde auf deinem Handy ab, damit sie sofort aufgehen und nicht zweimal geladen werden. Das ist ein Cache: Er bleibt in der App und verschwindet, wenn du dich abmeldest, dein Konto löschst oder die App löschst. Auch ein Post, den du als Entwurf speicherst, bleibt nur auf deinem Handy: Er wird nie hochgeladen und landet nicht in deinem iCloud-Backup, wartet auf dich, wenn du dich abmeldest, und verschwindet, wenn du dein Konto oder die App löschst. Fotos und Videos, die du postest, werden ohne Standortdaten gespeichert: Die EXIF- und GPS-Angaben werden entfernt.",
      },
      {
        title: "GIFs und Sticker",
        body: "Die Suche und das Stöbern nach GIFs und Stickern gehen direkt von der App zu KLIPY, einem GIF-Dienst eines Drittanbieters, nicht über unsere Server. KLIPY erhält deine Suchbegriffe, die IP-Adresse deines Handys und eine pseudonyme Kennung, die aus deinem Account abgeleitet wird, nicht deinen Namen oder deine E-Mail. Ein GIF oder Sticker, den du schickst, ist ein Link auf die Kopie bei KLIPY, keine Datei, die wir speichern: Wer es sieht, lädt es von KLIPY, also sieht KLIPY auch dessen IP-Adresse. Ziehst du die Nachricht zurück, verschwindet der Link für euch beide. Was KLIPY mit diesen Daten macht, steht in der [Datenschutzerklärung](https://klipy.com/support/privacy-policy) von KLIPY.",
      },
      {
        title: "Wer was sieht",
        body: "Deine Posts und Stories sehen nur deine Freunde. Einen Kommentar, ob Text, Foto, GIF, Sticker oder Stimme, sieht jeder, der den Post sehen kann, unter dem er steht, auch die Freunde der Person, die ihn gepostet hat, und die müssen nicht deine Freunde sein; sie sehen dazu deinen Namen und dein Profilfoto. Eine Nachricht, auch eine Sprachnachricht oder ein GIF, sehen nur die zwei, die darin schreiben. Eine Story sehen deine Freunde 24 Stunden lang. Wer eine Story gesehen hat, sieht nur die Person, die sie gepostet hat. Mit Near Spark bleiben deine abgelaufenen Stories in einem Archiv, das nur du siehst, und die Highlights, die du an dein Profil pinnst, sehen deine Freunde. Deine Freunde sehen auch, wie viele Posts und Freunde du hast, und welche deiner Freunde sie auch kennen; der Rest bleibt eine Zahl. Es gibt kein öffentliches Profil, keine Suche und keine Entdecken-Seite. Abgesehen von einem Kommentar unter einem Post, den er sehen kann, sind dein Name und dein Profilfoto das Einzige, was ein Fremder sehen kann, und nur, solange ihr beide im selben Raum seid und die App offen habt. Blockierst du jemanden, seht ihr euch beide nie wieder.",
      },
      {
        title: "Wo es liegt",
        body: "Deine Daten liegen bei Supabase, einem Hosting-Anbieter, und kommen über ihn zu deinen Freunden. Fotos, Videos, Sprachnachrichten und Sprachkommentare speichert und liefert Cloudflare aus. Apple übernimmt die Anmeldung mit Apple und wickelt die Zahlungen für Near Spark ab: Wir erhalten nur eine Transaktions-ID und den Status deines Abos, nie deine Kartendaten. E-Mails von Near und von dieser Seite gehen über Resend raus. Keiner von ihnen darf deine Daten für etwas anderes nutzen, und sonst bekommt sie niemand. Wir verkaufen keine Daten, zeigen keine Werbung und nutzen kein Analytics- oder Tracking-SDK. Bei GIFs und Stickern ist es anders: Dein Handy spricht direkt mit KLIPY, einem GIF-Dienst eines Drittanbieters, und dafür gilt dessen eigene [Datenschutzerklärung](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Alles löschen",
        body: "Einstellungen → Datenschutz & Sicherheit → Account löschen meldet dich ab und löscht deinen Account 30 Tage später. Bis dahin sieht dich niemand: Dein Profil, deine Posts, Stories und Kommentare sind für deine Freunde unsichtbar, und in der Nähe findet dich keiner. Anders überlegt? Melde dich vor dem Datum wieder an, und alles ist so, wie du es verlassen hast. Danach werden dein Account, deine Fotos, Videos, Posts, Stories, Nachrichten, Kommentare und Freundschaften endgültig gelöscht, und wenn du dich mit Apple anmeldest, gibt Near auch seinen Zugriff auf deinen Apple Account auf. Nichts von dir bleibt auf den Handys deiner Freunde oder bei uns. Wir schreiben dir, wenn die Löschung geplant ist, ein paar Tage vorher und wenn sie erledigt ist. Wenn du uns sagst, warum du gehst, speichern wir die Antwort ohne deinen Account, nur um Near besser zu machen. Wenn dir das lieber ist, schreib uns, und wir erledigen es für dich.",
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
        title: "Wer wir sind",
        body: "Near ist eine iPhone-App, gemacht und betrieben von {entity}. In diesen Bedingungen stehen „Near“, „wir“ und „uns“ für den Betreiber des Dienstes; „du“ ist, wer ihn nutzt. Bei allem rund um diese Bedingungen schreib an die Adresse am Ende dieser Seite.",
      },
      {
        title: "Wer Near nutzen darf",
        body: "Du musst mindestens 13 sein und dich mit deinem eigenen Apple-Account oder deiner eigenen E-Mail anmelden. Ein Account pro Person. Near ist für Menschen, nicht für Bots oder Firmen.",
      },
      {
        title: "Deine Inhalte",
        body: "Was du postest, in eine Story stellst oder in einer Nachricht schickst, gehört dir. Mit dem Teilen erlaubst du Near, es zu speichern und deinen Freunden zu zeigen, darum geht es ja. Einen Kommentar sieht jeder, der den Post sehen kann, unter dem er steht. Poste nichts, was du nicht teilen darfst, und denk dran, dass deine Freunde Screenshots machen können, wie überall.",
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
        body: "Jeder Post, jede Story, jeder Kommentar, jede Nachricht und jedes Profil hat eine Melden-Option, und du kannst jeden über sein Profil blockieren: ihr seid dann keine Freunde mehr und keiner von euch sieht den anderen je wieder. Wir lesen jede Meldung innerhalb von 24 Stunden. Es gibt keine Toleranz für missbräuchliche Inhalte oder missbräuchliches Verhalten: wir entfernen, was gegen diese Regeln verstößt, und wenn nötig den Account dahinter.",
      },
      {
        title: "Wenn jemand die Regeln bricht",
        body: "Bricht ein Account diese Regeln, können wir Inhalte entfernen, den Account sperren oder löschen, ohne Vorwarnung, wenn der Inhalt illegal ist oder jemandem schadet. Du kannst jederzeit gehen: Einstellungen → Datenschutz & Sicherheit → Account löschen. Du hast 30 Tage, um es dir anders zu überlegen, danach geht alles mit dir.",
      },
      {
        title: "Near Spark",
        body: "Near Spark ist ein optionales Abo, monatlich oder jährlich, das du über den App Store abschließt. Es verlängert sich am Ende jedes Zeitraums automatisch, zu dem Preis, der in der App steht, bis du kündigst. Neue Abonnenten, die dafür infrage kommen, bekommen die erste Woche gratis; Apple entscheidet, wer infrage kommt, und nach der Woche wird abgebucht, wenn du nicht vorher kündigst. Du kannst jederzeit in deinen Apple-ID-Einstellungen kündigen, spätestens 24 Stunden vor dem Verlängerungsdatum, und behältst Near Spark bis zum Ende des Zeitraums, den du bezahlt hast. Apple wickelt die Zahlung und jede Erstattung nach eigenen Bedingungen ab, Erstattungen beantragst du also bei Apple. Ändert sich der Preis, sagt Apple es dir vorher und fragt nach deiner Zustimmung. Near kann dir auch kostenlose Near Spark-Tage schenken: derzeit drei Tage, wenn du der erste Freund von jemandem bist, der neu bei Near ist, bis zu dreimal. Diese Tage sind ein Werbevorteil und gehören nicht zu deinem Apple-Abo, und wir können sie jederzeit ändern oder beenden. Gut zu wissen: Das Abo liegt bei Apple, nicht bei uns. Wenn du dein Near-Konto löschst, läuft es deshalb weiter. Hast du Near Spark, kündige es vorher in deinen Apple-ID-Einstellungen, dann stellt Apple die Abbuchung ein. Alles außerhalb von Near Spark bleibt kostenlos.",
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

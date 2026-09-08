const en = {
  meta: {
    title: "Near — friends you actually see",
    description:
      "Near is a social app for the friends you actually see. Add people only in person. No ads, no algorithm, no likes.",
  },
  nav: {
    how: "How it works",
    believe: "What we believe",
    next: "Coming next",
    cta: "Get the app",
  },
  hero: {
    title: "Near",
    tagline: "Friends you actually see.",
    scroll: "scroll",
  },
  how: {
    title: "Small app. Real people.",
    steps: [
      {
        title: "Meet in person",
        body: "You can only add someone standing next to you. Both of you tap, within 30 seconds. That's the whole handshake.",
      },
      {
        title: "Your grid",
        body: "Everyone you've actually met, in one grid. Drag them around. That's your whole network.",
      },
      {
        title: "A feed that ends",
        body: "Photos and words from your friends, newest first. No ranking, no “suggested for you”.",
      },
      {
        title: "Words, not hearts",
        body: "There are no likes. If you care about something, you say it.",
      },
    ],
  },
  next: {
    title: "What we're building.",
    intro: "Three things on the way. Tap the screens to flip through.",
    prev: "Previous",
    next: "Next",
    features: [
      { title: "Plans", body: "Pick a place, pick the friends, send it. Everyone gets one notification and answers in or out. No group chat, no poll, no forty messages to find a Friday." },
      { title: "Together posts", body: "When two friends' phones are in the same room, you can post together. One photo, both names on it. Proof you were actually there." },
      { title: "Recaps", body: "At the end of every month, and every year: who you saw, how often, where. Not screen time. Real time." },
    ],
  },
  believe: {
    title: "Instagram, but worse.",
    paragraphs: [
      "Every big social app is built to keep you inside it. Ads need your eyes, algorithms need your time, likes need your anxiety. It works. That's the problem.",
      "Near is small on purpose. Only people you've met, only what they post, in the order it happened. It's done when your friends are done. If that sounds like a worse Instagram, good. It is.",
    ],
    downgrades: "Downgrades:",
    items: [
      { title: "No algorithm, no ads, no AI slop", body: "Your feed is your friends, newest first. Nobody paid to be there, and nothing in it was generated." },
      { title: "No endless scroll", body: "TikTok is built to never end. Near's feed ends when your friends stop posting. Then go outside." },
      { title: "No FOMO", body: "You only see people you actually see. If it's not on Near, you were probably there." },
    ],
  },
  cta: {
    title: "Go see your friends.",
    body: "Near is made for iPhone.",
    button: "Download on the App Store",
    soon: "Coming soon to the App Store",
  },
  footer: {
    tagline: "Friends you actually see.",
    privacy: "Privacy",
    contact: "Contact",
  },
  lang: {
    label: "Language",
  },
  privacy: {
    title: "Privacy",
    intro: "This page will hold the Near privacy policy. Short version: your data is yours, we don't sell it, and we don't show ads.",
    sections: [
      { title: "What we collect", body: "Your name, photo, favorites, posts, comments and messages. Your location only when you attach it to a post." },
      { title: "What we don't do", body: "We don't sell your data, we don't run ads, and we don't feed your content to an algorithm." },
      { title: "Contact", body: "Questions? Write to us." },
    ],
  },
};

export default en;
export type Dictionary = typeof en;

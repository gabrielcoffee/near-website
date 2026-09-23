export type LegalSection = { title: string; body: string; items?: string[] };

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
    steps: [
      {
        title: "Meet in person",
        body: "You can only add someone who's right next to you. Ran into a friend? You add each other in the app, right there.",
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
    waitlist: {
      label: "Email address",
      placeholder: "your@email.com",
      button: "Join the waitlist",
      sending: "Sending…",
      done: "You're on the list. Check your inbox.",
      already: "You're already on the list.",
      invalid: "That email doesn't look right.",
      error: "Didn't work. Try again in a moment.",
    },
  },
  footer: {
    tagline: "Friends you actually see.",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
  },
  lang: {
    label: "Language",
  },
  contact: {
    title: "We're all ears!",
    body: "Reach us here. The app is still in development, and new ideas are welcome!",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Your phone",
      phones: { ios: "iPhone", android: "Android", other: "Something else" },
      reason: "What brings you to Near?",
      reasons: [
        { key: "scroll", label: "Stop losing hours scrolling" },
        { key: "ads", label: "Escape the ad overload" },
        { key: "curious", label: "Just curious" },
        { key: "data", label: "Keep my data to myself" },
      ],
      message: "Message",
      messagePlaceholder: "What do you want to tell us?",
      button: "Send",
      sending: "Sending…",
      done: "Message sent.",
      invalid: "Fill in everything so we can reply.",
      invalidEmail: "That email doesn't look right.",
      error: "Didn't work. Try again in a moment.",
    },
  },
  legal: {
    updated: "Last updated",
  },
  privacy: {
    title: "Privacy",
    intro: "Short version: Near stores only what it needs to show your friends what you post. We don't sell anything, we don't run ads, and there is no analytics or tracking in the app or on this site.",
    sections: [
      {
        title: "What we store",
        body: "When you sign in with Apple or Google we get a user ID from them, plus your name and email if you choose to share them. After that, only what you add yourself:",
        items: [
          "Your display name, profile photo, and the birthday and short bio if you fill them in.",
          "Your posts: photos, captions and, if you keep it on, the place they were taken.",
          "Your comments on your friends' posts.",
          "Who your friends are and when you added each other, and anyone you've blocked.",
          "Reports you send us about a post, a comment or a person.",
        ],
      },
      {
        title: "How “nearby” works",
        body: "Near doesn't use your location to find friends. While the app is open, your phone shares a random code with phones in the same room over the local network. The code changes every ten minutes, expires after fifteen, and is never kept beyond that. Someone next to you sees your name and photo. Nobody further away sees anything.",
      },
      {
        title: "Permissions and what they're for",
        body: "iOS will ask you for these. Each one does exactly one thing:",
        items: [
          "Local network: finding the friend next to you.",
          "Camera and photo library: pictures for your posts.",
          "Location, only while using the app: naming the place of a post. You can edit or remove it before posting. Near never tracks you in the background.",
        ],
      },
      {
        title: "Who sees what",
        body: "Your posts and comments are visible to your friends only. There is no public profile, no search and no explore page. Your name and profile photo are the only things a stranger can see, and only while you're both in the same room with the app open. Block someone and neither of you sees the other again.",
      },
      {
        title: "Where it lives",
        body: "Your data is stored with Supabase, a hosting provider, and reaches your friends through them. Apple or Google handles sign-in. Emails from this site go out through Resend. None of them may use your data for anything else, and nobody else gets it. We don't sell data, don't show ads, and don't run any analytics or tracking SDK.",
      },
      {
        title: "Deleting everything",
        body: "Settings → Delete Account removes your account, your photos, posts and comments, immediately and for good. Nothing of yours stays on your friends' phones or ours. If you'd rather, write to us and we'll do it for you.",
      },
      {
        title: "This website",
        body: "The waitlist keeps your email and language so we can write once when Near launches, plus a short welcome. The contact form keeps what you typed so we can reply. The site sets no cookies and runs no analytics. It remembers your language in your browser, nothing more.",
      },
      {
        title: "Your rights",
        body: "You can see, change and delete everything Near has about you from the app, at any time. If you want a copy of your data, or think we hold something we shouldn't, write to us. A person answers. Near is for people 13 and older, and we don't knowingly keep data from anyone younger.",
      },
      {
        title: "Changes",
        body: "If this page changes, the date at the top changes with it. Anything that matters, we'll tell you in the app.",
      },
    ] as LegalSection[],
    contact: { title: "Questions", body: "Write to us:" },
  },
  terms: {
    title: "Terms",
    intro: "Plain rules for using Near. Short, because there isn't much to it: be a real person, be decent to your friends, and the app is yours to use.",
    sections: [
      {
        title: "Who can use Near",
        body: "You need to be 13 or older and sign in with your own Apple or Google account. One account per person. Near is for people, not bots or businesses.",
      },
      {
        title: "Your content",
        body: "What you post is yours. By posting it you let Near store it and show it to your friends, which is the whole point. Don't post what you don't have the right to share, and remember your friends can screenshot, like anywhere else.",
      },
      {
        title: "The rules",
        body: "Near stays good because it's small. Keep it that way:",
        items: [
          "No harassment, threats or hate.",
          "No intimate images of anyone without their consent, and nothing illegal.",
          "Don't pretend to be someone else.",
          "Don't fake being nearby, automate the app, scrape it or try to break into it.",
        ],
      },
      {
        title: "Reporting and blocking",
        body: "Every post, comment and profile has a Report option, and you can block anyone from their profile: you'll be removed as friends and neither of you will see the other again. We read every report within 24 hours. There is no tolerance for abusive content or abusive people: we remove what breaks these rules and, when needed, the account behind it.",
      },
      {
        title: "Enforcement",
        body: "If an account breaks these rules we can remove content, suspend the account or delete it, without notice when the content is illegal or hurts someone. You can leave any time: Settings → Delete Account, and everything goes with you.",
      },
      {
        title: "The service",
        body: "Near is new and made by a small team. It will change, sometimes break, and might one day shut down. We'll do our best to warn you about anything big. It is provided as is, without warranty, and our liability is limited as far as the law allows. Where the law gives you rights these terms can't take away, those rights win.",
      },
      {
        title: "Changes",
        body: "If these terms change, the date at the top changes with it. Keep using Near after that and the new terms apply.",
      },
    ] as LegalSection[],
    contact: { title: "Questions", body: "Write to us:" },
  },
};

export default en;
export type Dictionary = typeof en;

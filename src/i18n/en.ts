/** One block of a legal page. `body` may be several paragraphs; `items` render as a bullet list after the
 *  body, and `after` is an optional closing paragraph under the list. */
/** One line of the Free vs Near Spark table. `true` renders a check mark, a string renders as text. */
export type PlusRow = { label: string; free: string | boolean; plus: string | boolean };
export type LegalSection = { title: string; body: string | string[]; items?: string[]; after?: string };

const en = {
  meta: {
    title: "Near — friends you actually see",
    description:
      "Near is a social app for the friends you actually see. Add people only in person. No ads, no algorithm, no likes.",
  },
  nav: {
    how: "How it works",
    also: "Also in Near",
    plus: "Near Spark",
    believe: "What we believe",
    cta: "Get the app",
  },
  hero: {
    title: "Near",
    tagline: "Friends you actually see.",
    scroll: "there's more",
  },
  how: {
    steps: [
      {
        title: "Meet in person",
        body: "You can only add someone who's right next to you. Ran into a friend? You add each other in the app, right there.",
      },
      {
        title: "Your friends",
        body: "Everyone you've actually met, in one list. That's your whole network.",
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
  also: {
    intro: "Tap the screens to flip through.",
    features: [
      { title: "Stories", body: "Photos and videos for your friends, gone after 24 hours. You see exactly who watched." },
      { title: "Messages", body: "Reply to a story and the chat starts right there. With Near Spark." },
      { title: "Sharp for everyone", body: "No 1080 px cap, and no quality drop on posts few people see. Every post looks the way you shot it." },
    ],
  },
  plus: {
    intro: "Near is free. Near Spark is for the friend who wants more of it.",
    free: "Free",
    features: [
      { title: "Talk to the people you've actually met.", body: "Messages only between friends." },
      { title: "Sharper than Instagram.", body: "Photos at 4032 px, nearly 4× Instagram. Video at 60 fps, up to 3 minutes." },
      { title: "Your stories don't disappear.", body: "They stay in a private archive, and the best ones can be pinned to your profile." },
      { title: "Say it out loud.", body: "Voice comments on your friends' posts. Everyone can listen; posting one is Near Spark." },
    ],
    labels: { instagram: "Instagram · 1080 px", near: "Near Spark · 4032 px", video: "1080p · 60 fps · 3 min", highlights: "Highlights", archive: "Archive", reply: "Replied to your story", voice: "Voice comment", you: "You" },
    plans: { title: "Plans", monthly: "Monthly", yearly: "Yearly", perMonth: "/ month", perYear: "/ year", equals: "{price} a month", save: "Save {pct}", trial: "First week free, on both.", soon: "Coming soon to the App Store." },
    more: {
      title: "And the rest",
      rows: [
      { label: "Messages", free: "Reading", plus: true },
      { label: "Voice comments", free: "Listening", plus: true },
      { label: "Photos", free: "2048 px", plus: "4032 px" },
      { label: "Video", free: "30 fps · 1 min", plus: "60 fps · 3 min" },
      { label: "Story archive and Highlights", free: false, plus: true },
      { label: "Posts archive", free: true, plus: true },
      { label: "Friends, feed and stories", free: true, plus: true },
      { label: "No ads, ever", free: true, plus: true },
      { label: "No quality drop on posts few people see", free: true, plus: true },
      ] as PlusRow[],
    },
  },
  stack: { prev: "Previous", next: "Next" },
  believe: {
    paragraphs: [
      "Every big social app is built to keep you inside it. Near is small on purpose.",
    ],
    items: [
      { title: "No algorithm, no ads, no AI slop", body: "Your friends, newest first. Nothing else." },
      { title: "No endless scroll", body: "The feed ends when your friends stop posting." },
      { title: "No FOMO", body: "You only see people you actually see." },
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
    contents: "On this page",
  },
  privacy: {
    title: "Privacy",
    intro: "Short version: Near stores only what it needs to show your friends what you post. We don't sell anything, we don't run ads, and there is no analytics or tracking in the app or on this site.",
    sections: [
      {
        title: "What we store",
        body: "You sign in with Apple, Google, or your email and a password, and you can connect more than one of them to your account in Settings. From Apple or Google we get a user ID, plus your name and email if you choose to share them; with email we keep your address and a scrambled form of your password, never the password itself. After that, only what you add yourself:",
        items: [
          "Your display name, profile photo, and the birthday and short bio if you fill them in.",
          "Your posts: photos and videos, captions and, if you keep it on, the place they were taken. Archive a post and only you can see it until you bring it back; delete it and it's gone, with its comments.",
          "Your stories: the photo or video, and which friends have watched it. Your friends can see a story for 24 hours, then it expires and is deleted. With Near Spark, your expired stories stay in an archive only you can see, and the ones you pin to your profile as Highlights stay visible to your friends.",
          "Your messages with friends: the text, photos, videos, voice messages, GIFs and stickers, when you sent it and when it was read. Unsend a message and it disappears for both of you.",
          "Your voice messages: recorded in the app and stored on our servers and Cloudflare. Only the two people in the conversation can hear one, and if you unsend it, it disappears for both of you.",
          "Your comments on your friends' posts: words, a photo, a GIF, a sticker or, with Near Spark, a voice comment. A photo or a voice comment is stored on our servers and Cloudflare.",
          "Who your friends are and when you added each other, and anyone you've blocked.",
          "Reports you send us about a post, a story, a comment, a message or a person. A reported story or message (a voice message too) is kept for up to 7 days, even after it expires or is unsent, so we can review it. Our moderation team opens it, and the photo of a reported comment, through short-lived links.",
          "Feedback you send from the app: what you typed, with the app version, iOS version and phone model, so we can read it and fix things. It is deleted with your account.",
          "Near Spark: Apple is the payment processor. We receive a transaction ID, the product, the dates and whether your subscription is active, never your card details. While it's active, a small spark shows after your name wherever it appears in the app, so anyone who sees your name can tell you have it.",
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
          "Camera and photo library: photos and videos for your posts, stories and messages, and your profile picture. Near only adds to your photos when you ask it to save a story, or a photo or video from a chat.",
          "Microphone: the sound in the videos you record, your voice messages and your voice comments.",
          "Location, only while using the app: naming the place of a post. You can edit or remove it before posting. Near never tracks you in the background.",
        ],
      },
      {
        title: "On your phone",
        body: "Near keeps a copy of your friends' photos and videos on your phone so they open instantly instead of downloading twice. It's a cache: it stays inside the app and goes when you sign out, delete your account or delete the app. A post you save as a draft stays only on your phone too: it's never uploaded or included in your iCloud backup, it waits for you if you sign out, and it goes when you delete your account or the app. The photos and videos you post are stored without location data: the EXIF and GPS tags are stripped.",
      },
      {
        title: "GIFs and stickers",
        body: "Searching and browsing GIFs and stickers goes straight from the app to KLIPY, a third-party GIF service, not through our servers. KLIPY receives your search words, your phone's IP address and a pseudonymous ID derived from your account, not your name or email. A GIF or sticker you send is a link to KLIPY's copy, not a file we store: whoever sees it loads it from KLIPY, so KLIPY sees their IP address too. Unsend the message and the link disappears for both of you. What KLIPY does with this is in its [privacy policy](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Who sees what",
        body: "Your posts and stories are visible to your friends only. A comment, whether words, a photo, a GIF, a sticker or a voice comment, is visible to anyone who can see the post it's on, which includes the post author's friends, who may not be your friends; they see your name and profile photo with it. A message, voice messages and GIFs included, is visible only to the two people in it. A story is visible to your friends for 24 hours. Who watched a story is shown only to the person who posted it. With Near Spark, your expired stories stay in an archive only you can see, and the Highlights you pin to your profile are visible to your friends. Your friends also see how many posts and friends you have, and which of your friends they know too; the rest stay a number. There is no public profile, no search and no explore page. Apart from a comment on a post they can see, your name and profile photo are the only things a stranger can see, and only while you're both in the same room with the app open. Block someone and neither of you sees the other again.",
      },
      {
        title: "Where it lives",
        body: "Your data is stored with Supabase, a hosting provider, and reaches your friends through them. Photos, videos, voice messages and voice comments are stored and delivered by Cloudflare. Apple or Google handles signing in with them, and Apple handles Near Spark payments: we only receive a transaction ID and the status of your subscription, never your card details. Emails from Near and from this site go out through Resend. None of them may use your data for anything else, and nobody else gets it. We don't sell data, don't show ads, and don't run any analytics or tracking SDK. GIFs and stickers are the exception: your phone talks to KLIPY, a third-party GIF service, directly, under its own [privacy policy](https://klipy.com/support/privacy-policy).",
      },
      {
        title: "Deleting everything",
        body: "Settings → Privacy & security → Delete account signs you out and deletes your account 30 days later. Until then nobody sees you: your profile, posts, stories and comments are hidden from your friends, and nobody nearby can find you. Changed your mind? Sign back in before the date and everything is as you left it. After that, your account, photos, videos, posts, stories, messages, comments and friendships are deleted for good, and if you signed in with Apple, Near also gives up its access to your Apple Account. Nothing of yours stays on your friends' phones or ours. We email you when it's scheduled, a few days before, and once it's done. If you tell us why you're leaving, we keep the answer without your account, only to make Near better. If you'd rather, write to us and we'll do it for you.",
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
        body: "You need to be 13 or older and sign in with your own Apple or Google account or your own email. One account per person. Near is for people, not bots or businesses.",
      },
      {
        title: "Your content",
        body: "What you post, put in a story or send in a message is yours. By sharing it you let Near store it and show it to the friends you shared it with, which is the whole point. A comment is shown to anyone who can see the post it's on. Don't share what you don't have the right to, and remember your friends can screenshot, like anywhere else.",
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
        body: "Every post, story, comment, message and profile has a Report option, and you can block anyone from their profile: you'll be removed as friends and neither of you will see the other again. We read every report within 24 hours. There is no tolerance for abusive content or abusive people: we remove what breaks these rules and, when needed, the account behind it.",
      },
      {
        title: "Enforcement",
        body: "If an account breaks these rules we can remove content, suspend the account or delete it, without notice when the content is illegal or hurts someone. You can leave any time: Settings → Privacy & security → Delete account. You have 30 days to change your mind, then everything goes with you.",
      },
      {
        title: "Near Spark",
        body: "Near Spark is an optional subscription bought through the App Store, monthly or yearly. It renews automatically at the end of each period, at the price shown in the app, until you cancel. New subscribers who are eligible get the first week free; Apple decides who is eligible, and you are charged when the week ends unless you cancel first. You can cancel any time in your Apple ID settings, at least 24 hours before the renewal date, and you keep Near Spark until the end of the period you've paid for. Apple handles the payment and any refund under its own terms, so refunds are requested from Apple. If the price changes, Apple tells you first and asks you to agree. Near may also give you free days of Near Spark: today, three days when you're the first friend of someone new to Near, up to three times. Those days are a promotional benefit, not part of your Apple subscription, and we can change or stop them at any time. One thing to know: the subscription lives with Apple, not with us, so deleting your Near account doesn't end it. If you have Near Spark, cancel it in your Apple ID settings before you go, and Apple stops charging you. Everything outside Near Spark stays free.",
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

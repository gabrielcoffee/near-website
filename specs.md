# Near — MVP Specification

**Tagline:** Friends you actually see.

**Platform:** iOS only, UIKit (not SwiftUI)
**Backend:** Supabase
**Auth:** Apple Sign-In only
**Font:** Outfit
**Design language:** Native Apple iOS — system components (UITabBarController, UINavigationController, etc.) should match first-party Apple apps in feel, spacing, and behavior.

---

## Philosophy

Near gives real-life friendships more power through technology. It does not replace presence — it rewards it. Friends can only be added in person. There are no ads, no algorithms, no strangers. The feed is small by design: only people you've physically met.

---

## Friend Adding — Local Discovery & Mutual Tap

The core trust mechanic. Both users must be physically nearby AND both must tap within 30 seconds.

### Flow

1. **Presence** — On foreground, each phone mints a random ephemeral token (UUID). A `publish_presence` RPC stores it server-side (TTL 15 min), rotating every 10 min.

2. **Local broadcast** — Token goes in a Bonjour TXT record `t`, advertised over `_near._tcp` with `includePeerToPeer` = AWDL (peer-to-peer Wi-Fi). Wi-Fi radio must be on; no network connection required. `NWBrowser` collects nearby tokens simultaneously.

3. **Resolve** — Seen tokens hit a `resolve_token` RPC. Server returns `user_id`, `display_name`, and `avatar_path`. Only then does a bubble appear on the Home screen. No physical radius check beyond Bonjour/AWDL range (~same room/building).

4. **Mutual tap** — User A taps User B's bubble → `tap_peer` RPC with B's token. Server replies:
   - `pending` → 30-second window, A's bubble shows outgoing-pending state
   - `matched` → B already tapped A inside the window → friendship row created
   - `already_friends` → no-op

5. **Realtime** — Each phone subscribes to `taps` filtered by `target_id = me`, plus `friendships` inserts. An incoming tap flips B's bubble to incoming-pending; a friendship insert flips both to `.matched`.

### Security Gate

`HandshakeCoordinator.handleIncomingTap` drops any tap whose `tapper_id` is not in local `NearbyStore`. This local-discovery check IS the proximity model — the server alone cannot prove co-presence. Both users must be physically near (Bonjour sees each other) AND both must tap within 30 seconds.

---

## Navigation

### Tab Bar (3 tabs — standard UITabBarController)

| Tab | Label | Content |
|-----|-------|---------|
| 1 | Home | Friends grid |
| 2 | Feed | Chronological feed of all friends' posts |
| 3 | Profile | User's own posts (chronological list) |

### Top Bar

- **"+" button** — Capture: create a new post
- **Notifications icon**
- **Chat icon** — access to conversations

---

## Screens

### Home — Friends Grid

The main screen. A grid displaying all the user's friends.

- Each cell shows the friend's photo and name
- The user's own card can appear on the grid
- The user can reorganize the grid (drag to reorder)
- Default order: by most recent interaction
- Nearby users who aren't friends yet appear as discovery bubbles (part of the friend-adding flow)
- Tapping a friend opens the **Friend Modal**

### Friend Modal

A modal overlay that appears when tapping a friend on the grid.

**Content:**
- Friend's profile photo (large)
- Friend's name
- Their favorite things (1–4 items selected during onboarding)

**Actions (3 buttons):**
- **Chat** — opens 1:1 conversation with this friend
- **View Posts** — shows this friend's posts (filtered feed)
- **⋯ (three-dot menu, top right)** — contains Unfriend option

### Feed

A chronological feed showing posts from all friends. No algorithm, no ranking — purely reverse-chronological.

**Each post contains:**
- Photo
- Text (caption)
- Location
- Author info (name, avatar)
- Comments section

**Interactions:**
- Comments only — no likes, no reactions, no hearts
- Comments require actual words, not passive engagement

### Capture (triggered by "+" in top bar)

The post creation flow.

**Steps:**
1. Take or select a photo
2. Write text (caption)
3. Location attaches automatically (with option to edit/remove)
4. Post

### Chat

1:1 messaging between friends.

- Accessible from the Friend Modal and from a conversations list (top bar chat icon)
- Basic text messaging for MVP

### Profile

The user's own screen.

- User's photo, name, and their favorite things
- Chronological list of their own posts
- Settings / account management accessible from here

---

## Onboarding

### Flow

1. **Welcome screen** — App name, tagline
2. **Sign in with Apple**
3. **Set up profile** — Name, photo
4. **Pick your favorites** — Select 1–4 categories from a 4×3 grid, then answer what the favorites are

### Favorites Grid (4×3)

| | Column 1 | Column 2 | Column 3 |
|---|----------|----------|----------|
| Row 1 | 🎵 Song / Album | 🎤 Artist | ✍️ Writer |
| Row 2 | 🍕 Food | 🎬 Movie / Show | 🐾 Animal |
| Row 3 | 📖 Book | ⚽ Sport | 📍 Place |
| Row 4 | 🎮 Game | 🍺 Drink | 🌍 Language |

User selects 1–4 categories, then fills in their answer for each selected category. These appear on their profile and on the Friend Modal when others view them.

---

## Data Model (Supabase)

### Tables

**users**
- id (UUID, from Apple Sign-In)
- display_name
- avatar_path
- created_at

**user_favorites**
- user_id (FK → users)
- category (enum: song_album, artist, writer, food, movie_show, animal, book, sport, place, game, drink, language)
- value (text — the user's answer)

**friendships**
- id
- user_a (FK → users)
- user_b (FK → users)
- created_at

**presence_tokens**
- token (UUID, ephemeral)
- user_id (FK → users)
- expires_at (TTL 15 min)

**taps**
- id
- tapper_id (FK → users)
- target_token (UUID)
- target_id (FK → users)
- status (pending, matched, expired)
- created_at

**posts**
- id
- author_id (FK → users)
- photo_path
- text
- location_name
- latitude
- longitude
- created_at

**comments**
- id
- post_id (FK → posts)
- author_id (FK → users)
- text
- created_at

**messages**
- id
- sender_id (FK → users)
- receiver_id (FK → users)
- text
- created_at
- read_at

---

## What Is NOT in the MVP

- General discovery / explore page
- Groups
- Feed algorithm or ranking
- Likes, reactions, or any passive engagement
- Stories or ephemeral content
- Video posts
- Friend timeline (per-friend moment history)
- Streaks or gamification
- Push notifications (can be added post-MVP)
- Android

---

## Code Conventions

These rules are for whoever writes the code (including Claude Code). They keep the project readable and consistent.

### Project Structure

```
Near/
├── App/              AppDelegate, SceneDelegate
├── Models/           Data structures (User, Post, Friendship, etc.)
├── Views/            Reusable UI components (FriendCell, PostCard, etc.)
├── Controllers/      Screen-level view controllers
├── Services/         Supabase, Bonjour, Presence, Handshake
├── Extensions/       UIColor+Theme, UIView+Layout, helpers
└── Resources/        Assets, Outfit font files
```

One type per file. File name matches the type name (e.g. `FriendCell.swift` contains `FriendCell`).

### Formatting

- One empty line between methods, and between logical groups of properties.
- One empty line separating a subview's configuration from the next subview inside a setup method (each component visually separated from the next).
- Group related setup into their own `private func setupX()` methods rather than one long `viewDidLoad`.

### Comments

- Use `// MARK: -` section headers to divide a file into logical parts (Lifecycle, Setup, Data, Actions, etc.). Xcode renders these as navigable dividers.
- A one-line comment may sit above a major block that does many things, to say what it does.
- No comment longer than one line.
- Don't comment the obvious — comment intent, not mechanics.

### Example

```swift
import UIKit

// MARK: - Friend Cell

class FriendCell: UICollectionViewCell {

    private let avatarView = UIImageView()
    private let nameLabel = UILabel()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Setup

    private func setupViews() {

        avatarView.layer.cornerRadius = Theme.radius
        avatarView.clipsToBounds = true
        avatarView.backgroundColor = Theme.surface

        contentView.addSubview(avatarView)

        nameLabel.font = Theme.outfit(Theme.fontCaption, weight: .medium)
        nameLabel.textColor = Theme.textPrimary
        nameLabel.textAlignment = .center

        contentView.addSubview(nameLabel)

        setupConstraints()
    }

    // MARK: - Configure

    func configure(with user: User) {
        nameLabel.text = user.displayName
    }

}
```

### Linting

- Use SwiftLint with a `.swiftlint.yml` in the project root.
- Enforce: line length, spacing rules above, no force-unwrap warnings, consistent naming.

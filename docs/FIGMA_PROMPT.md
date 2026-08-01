# Figma AI Design Prompt
## "bas." Personal Portfolio Website

**Purpose:** Gunakan prompt ini untuk generate design di Figma AI, atau sebagai brief untuk designer.

---

## Responsive Breakpoint Strategy (Standard Container: 1024px)

> [!IMPORTANT]
> Seluruh halaman menggunakan **Container Max-Width 1024px (centered)** agar artboard seragam di Figma. Untuk halaman editorial/bacaan (`/now`, `/uses`, Blog Post), kolom konten berada di dalam kontainer 1024px dengan batas lebar bacaan (prose width) 720–860px.

| Breakpoint | Lebar Artboard | Perilaku Layout | Navigation Style |
|---|---|---|---|
| **Desktop Wide** | `1440px` | Container 1024px di tengah, split-panel 48% (sticky kiri) / 52% (kanan) | Sticky Sidebar Kiri |
| **Desktop** | `1024px` | Container 1024px penuh, split-panel proporsional | Sticky Sidebar Kiri |
| **Tablet** | `768px` | 2-kolom grid beralih ke stack vertikal, padding samping 24px | Top Glass Capsule Navbar |
| **Mobile** | `375px` | 100% Single-column, touch target ≥ 44x44px, padding samping 16px | Top Sticky Header + Hamburger Overlay |

---

## Master Prompt (Copy-Paste ke Figma AI)

### Prompt 1: Full Homepage Design

```
Design a premium personal portfolio website homepage for a frontend developer with the brand name "bas." (with period).

LAYOUT STRUCTURE (inspired by brittanychiang.com):
- Desktop: Split-panel layout — left side (48% width) is a sticky sidebar with name, title, navigation links, and social icons. Right side (52% width) is scrollable content.
- Mobile: Single column layout with hamburger menu.
- Max content width: 1024px, centered.

COLOR SYSTEM (inspired by GreatFrontEnd - NO PURPLE OR INDIGO):
- Background: Pure White #FFFFFF
- Card backgrounds: #FFFFFF with 1px #E5E7EB border and 12px border-radius
- Primary accent: Emerald Green #059669 (GreatFrontEnd mint/emerald theme)
- Heading text: #111827 (near-black)
- Body text: #374151 (dark gray)
- Muted/date text: #6B7280 (medium gray)
- Status badge: #059669 green text on #ECFDF5 mint background
- Tech stack pills: #ECFDF5 background, #059669 text, #D1FAE5 border, fully rounded
- Glass navbar: White with 72% opacity, backdrop blur, subtle shadow

TYPOGRAPHY:
- Font: Inter (sans-serif) for all text, JetBrains Mono for code
- Hero name: 48px, bold, tracking tight, #111827
- Subtitle: 20px, regular, #374151
- Body: 16px, regular, line-height 1.625, #374151
- Section labels: 12px, uppercase, letter-spacing wide, #6B7280

HERO SECTION:
- Status pill: "Available for Work" with green dot indicator (animated pulse), mint green background
- Large name: "Ilyas Bashirah" in #111827
- Below name: "bas." in brand emerald #059669 as a monogram/logo
- Tagline: "Crafting interfaces with intention." in #374151
- Bio snippet: 2-3 lines about frontend development + learning Japanese
- Two CTA buttons: Primary "View Writing" (#059669 solid, white text, rounded-md) and Secondary "GitHub" (white bg, #111827 text, #E5E7EB border)
- Black-and-white/duotone circular profile photo (200px) with subtle emerald border accent
- Social icons row: GitHub, LinkedIn, Email — in #6B7280, hover to #111827

LEFT SIDEBAR (sticky on desktop):
- Brand mark: "bas." in emerald green
- Navigation links with indicator lines (like Brittany Chiang): About, Experience, Writing, Now, Uses, Contact
- Active nav link has a wider emerald green line indicator
- Social icons at bottom

SECTIONS (right side, scrollable):

1. About Section:
   - Brief about text with highlighted tech mentions in emerald green
   - "I also study Japanese (日本語)" mentioned casually
   - Tech stack grid: pills showing React, Next.js, TypeScript, Tailwind, Framer Motion

2. Experience Timeline:
   - Vertical timeline with emerald green node dots
   - Each entry: Company name (linked), Role title, Date range in #6B7280
   - Tech pills per role
   - Hover effect: card background shifts to #F9FAFB with subtle shadow

3. Featured Writing:
   - 3 latest blog post cards
   - Each card: Title (#111827), date + "4 min read" (#6B7280), tag pill (#ECFDF5 background, #059669 text), hover arrow
   - "View all writing →" link in emerald green
   
4. Now (What I'm Focused On):
   - Section title: "Now" with subtitle "What I'm currently working on"
   - "Currently Working On" — 2-3 bullet points of professional focus areas (no progress bars for these)
   - "Current Exploration" — 🇯🇵 日本語 (JLPT N5) with a single progress bar at 40% — this is a personal hobby, not a professional skill
   - GitHub-style contribution heatmap (5-level emerald green squares: #F3F4F6 empty → #ECFDF5 → #A7F3D0 → #10B981 → #059669 max) — labeled as "Weekly Activity" showing consistency
   - "View full /now page →" link in emerald green
   - NOTE: Do NOT show progress bars for React, TypeScript, CSS etc — these are already proven by 5+ years experience

5. Contact Section:
   - Clean centered form: Name, Email, Message inputs
   - Input styling: White bg, #E5E7EB border, #059669 focus ring
   - Submit button: "Send Message" primary emerald green button
   
6. Footer:
   - "© 2026 bas. Built with Next.js" in #6B7280
   - Social links row

DESIGN FEEL:
- Apple-like precision and generous whitespace (90px+ section gaps)
- Subtle, sophisticated shadows (not heavy drop shadows)
- Clean card layouts with 1px borders
- Smooth hover states (slight translateY and shadow increase)
- Premium, minimal, intentional — every element has purpose
- NO gradients on backgrounds, keep it flat and clean
- Generous padding inside cards (24-32px)
```

---

### Prompt 2: Dark Mode Variant

```
Create a dark mode variant of the "bas." portfolio design.

DARK MODE COLOR MAPPING:
- Page Background: #0A0A0B (near-black)
- Card background: #141415 with 1px rgba(255,255,255,0.1) border
- Heading text: #F9FAFB
- Body text: #D1D5DB
- Muted text: #9CA3AF
- Brand accent: #34D399 (bright mint green for dark mode)
- Glass navbar: #141415 with 72% opacity, backdrop blur
- Tech pills: rgba(16,185,129,0.1) bg, #34D399 text
- Status badge: #34D399 text on rgba(16,185,129,0.1) bg
- Hover effect: card shifts to #1F2937
- Heatmap: darker base squares (#1F2937), mint green active squares
- Focus ring: #34D399
- Hover states: rgba(255,255,255,0.06) background shift

Keep the same layout, typography scale, and spacing. Only change colors.
The dark mode should feel like GreatFrontEnd's dark mode — clean, high contrast, not muddy.
```

---

### Prompt 3: Blog Post Page

```
Design a blog post reading page for the "bas." portfolio website.

LAYOUT:
- Page container max-width: 1024px, centered
- Editorial prose column max-width: 720px (centered inside 1024px container for optimal line length and readability)
- Generous side margins (24px on mobile, 40px+ on desktop)
- Table of contents sidebar on desktop (right side, sticky, only on wide screens)

HEADER:
- Back arrow + "All posts" link
- Post title: 36px, bold, #111827
- Meta row: Date, "5 min read" badge, tag pills
- Author info: Small avatar + "Ilyas Bashirah" + "bas."

CONTENT (Article body):
- Prose typography: 18px, line-height 1.8, #374151
- Headings: H2 at 28px semibold, H3 at 22px semibold
- Code blocks: JetBrains Mono, #111827 background, syntax highlighting, rounded-lg, copy button top-right
- Inline code: #F3F4F6 bg, #059669 text, rounded-sm, small padding
- Blockquotes: Left emerald green border, #F9FAFB background, italic text
- Lists: Proper spacing, emerald green bullet points
- Links: #059669 with underline on hover
- Images: Rounded-lg with subtle caption below
- Interactive VocabCard component for Japanese kanji study (flip card animation)
- Author bio card at bottom of post
- Reading progress bar at very top of page (thin emerald green line)

Keep the Apple-like clean aesthetic. Generous whitespace between paragraphs (1.5em).
```

---

### Prompt 4: Multi-Breakpoint Responsive Layouts (Tablet 768px & Mobile 375px)

```
Create the responsive variants for Tablet (768px width) and Mobile (375px width) of the "bas." portfolio website (covering Homepage, /now, /uses, and Blog Post).

1. TABLET BREAKPOINT (768px):
- Split-panel homepage: Left sidebar shifts to top header navigation OR reduced 35% width column.
- Navigation: Capsule navbar centered at top with links (About, Experience, Writing, Now, Uses, Contact).
- Tool/Project Cards: 2-column grid maintained with 16px gap.
- Heatmap: Full width container with horizontal scroll if needed.
- Section spacing: 72px between sections.

2. MOBILE BREAKPOINT (375px):
- Layout: 100% Single column layout across all pages (no sidebar split).
- Navigation: Hamburger menu icon → opens full-screen glass navigation overlay.
- Hero section: Stacked vertically — circular photo centered above name.
- Sticky headings: Sticky background (#FFFFFF/75% opacity) with backdrop blur on scroll.
- Cards & Blog Posts: Full width with 16px horizontal padding.
- Timeline: Simplified vertical list, no connecting lines on mobile.
- Heatmap: Horizontally scrollable container with touch hint.
- Font sizes: Reduced via clamp() fluid typography (e.g. Hero H1 36px instead of 48px).
- Touch-friendly tap targets: Minimum 44x44px for all buttons, pills, and links.
- Section spacing: 64px between sections.

Keep the same GreatFrontEnd Emerald/Mint Green color system (#059669 / #34D399) and design language across all breakpoints.
```

---

### Prompt 5: Component Library Sheet

```
Design a component library/design system sheet for "bas." portfolio showing all UI components:

1. Button Component:
   - Primary (emerald solid), Secondary (white bordered), Ghost (transparent)
   - Sizes: sm, md, lg
   - States: default, hover, focus, disabled

2. Card Component:
   - Default, Interactive (hover state), Feature (accent border)
   - With image header, with icon header

3. Navigation Component:
   - Glass Capsule Navbar (desktop)
   - Mobile Hamburger + Overlay menu
   - Sticky Sidebar layout

4. Blog Post Card Component:
   - Standard card, Featured large card, Compact list item

5. Now Page Components:
   - Activity heatmap grid
   - Current focus card
   - 日本語 (Japanese) progress tracker

6. UI Primitives:
   - Tech pill / tag badge
   - Status badge with pulsing dot
   - Input field & Textarea
   - Theme toggle button (sun/moon)

7. Typography Scale:
   - Display, H1, H2, H3, Body, Body Small, Caption, Code

---

### Prompt 6: `/now` Full Page Design

```
Design a dedicated "/now" page for the "bas." personal portfolio website (inspired by Derek Sivers' now page concept).

LAYOUT STRUCTURE:
- Page container max-width: 1024px, centered
- Content column max-width: 780px (centered inside 1024px container for clean editorial structure)
- Clean top header with "bas." logo and navigation links
- Page title: "Now" (48px, bold, #111827) with subtitle: "What I'm currently focused on — updated July 2026"

CONTENT SECTIONS:
1. Current Professional Focus:
   - 2-3 detailed cards on current engineering work and architectural focus
   - Styled with clean white cards, 1px #E5E7EB borders, #059669 icon accents
   - NO progress bars for frontend/development skills

2. Personal Exploration & Hobbies:
   - Japanese Language (🇯🇵 日本語 - JLPT N5 Preparation): 
     - Clean progress tracker card showing vocabulary/kanji milestones at 40%
     - Vocabulary flip-card study widget preview
   - Reading & Learning list (books or technical articles currently reading)

3. Weekly Engineering Activity (GitHub Heatmap):
   - Full 52-week contribution heatmap grid using emerald scale (#F3F4F6 empty → #ECFDF5 → #A7F3D0 → #10B981 → #059669 max)
   - Legend at bottom right showing "Less → More"
   - Subtitle: "Consistency across personal & open-source projects"

4. Footer with last updated timestamp ("Inspired by nownownow.com")

DESIGN FEEL:
- Minimalist, intentional, structured like a senior engineer's live journal
- Consistent 24px card padding and 80px section spacing
```

---

### Prompt 7: `/uses` Page Design (Developer Workspace & Tools)

```
Design a "/uses" page (developer setup and tools showcase) for the "bas." personal portfolio website.

LAYOUT STRUCTURE:
- Page container max-width: 1024px, centered
- Content grid max-width: 860px (centered inside 1024px container)
- Header with "bas." logo, title "Uses" (48px, bold, #111827), and subtitle "Editor, terminal, hardware, and productivity tools I use daily."

CATEGORIZED TOOL CARDS (Grid layout: 2 columns on desktop):
1. Editor & Terminal:
   - VS Code (custom theme, font: JetBrains Mono + ligature settings)
   - Terminal setup (Zsh, Starship prompt, Alacritty/iTerm2)

2. Hardware & Desk Setup:
   - MacBook Pro / Apple Silicon workstation
   - External display & ergonomic peripherals

3. Development Stack & Testing Tooling:
   - Next.js 14+, TypeScript, Tailwind CSS 4, pnpm
   - Quality gates: Vitest, Playwright, Storybook 8 ("bas. Design System"), Husky + Commitlint

4. Productivity & Design:
   - Figma, Raycast, Linear / Notion

CARD DESIGN:
- Each tool item: Tool icon/logo, Tool name (#111827, bold 16px), Tag pill (e.g., "Editor", "Hardware" in #ECFDF5 mint bg, #059669 text), and a 1-2 sentence description of why/how I use it.
- Apple-like clean grid with 16px gap between cards, 1px border (#E5E7EB), subtle hover elevation.
```

---

## Design Checklist

Use this checklist after generating designs:

- [ ] NO purple/violet anywhere — only emerald green (#059669 / #34D399)
- [ ] All text passes WCAG AA contrast (4.5:1 normal, 3:1 large)
- [ ] Focus states visible on all interactive elements
- [ ] Consistent 4px spacing grid
- [ ] Mobile touch targets ≥ 44x44px
- [ ] Hero photo is black-and-white / duotone
- [ ] Glass navbar has proper blur + subtle border
- [ ] Status badge dot has pulse animation indicator
- [ ] Cards have 1px border (not heavy shadows)
- [ ] Section gaps are generous (80-112px)
- [ ] Typography uses Inter font family
- [ ] Brand mark "bas." is consistent across all views
- [ ] Navigation menu includes: About, Experience, Writing, Now, Uses, Contact
- [ ] NO progress bars for professional skills (React, TypeScript, CSS) on homepage or /now page
- [ ] JLPT N5 Japanese language progress bar is present only as a personal hobby exploration
- [ ] Heatmap uses 5-level GreatFrontEnd emerald green palette (#F3F4F6 → #ECFDF5 → #A7F3D0 → #10B981 → #059669)

# Product Requirements Document (PRD)
## Personal Portfolio & Blog Website — "bas."

**Document Version:** 2.1  
**Last Updated:** 2026-07-31  
**Author:** Ilyas Bashirah (assisted by AI)  
**Status:** Draft → Reviewed & Updated

---

## 1. Executive Summary

### 1.1 Product Vision
Membangun personal portfolio website premium yang menggabungkan estetika **GreatFrontEnd's clean design system** dengan **Apple's signature smooth animations**, menggunakan struktur navigasi terinspirasi dari **Brittany Chiang's portfolio**. Website ini bukan hanya portfolio statis, tetapi juga platform blog & personal journal yang menunjukkan thought leadership dan aktivitas profesional secara berkelanjutan.

### 1.2 Branding

| Property | Value |
|---|---|
| **Brand Name** | `bas.` (lowercase, dengan titik — minimalis, memorable, profesional) |
| **Tagline** | "Crafting interfaces with intention." |
| **Domain (temp)** | `bas-portfolio.vercel.app` (Vercel free tier) |
| **Brand Rationale** | "bas" dari Bashirah — pendek, mudah diucapkan global, titik memberi kesan finished/complete seperti kalimat yang tuntas. Clean seperti estetika Apple. |

### 1.3 Target Audience
- Recruiters & Hiring Managers (tech companies)
- Fellow developers & engineers
- Potential collaborators / freelance clients
- Learning community (blog readers)

---

## 2. Design Philosophy

### 2.1 Core Design Pillars

| Pillar | Referensi | Implementasi |
|---|---|---|
| **Color System** | GreatFrontEnd | Neutral-first palette, emerald green accent (#059669 / #34D399), semantic colors, dark/light mode |
| **Animation** | Apple.com | Scroll-triggered reveals, smooth page transitions, micro-interactions |
| **Structure** | Brittany Chiang | Split-panel on desktop (sticky sidebar + scrolling content), single-column mobile |
| **Typography** | Modern sans-serif | Inter (body) + JetBrains Mono (code) dari Google Fonts |
| **Imagery** | GreatFrontEnd tone | Hero photo hitam-putih/duotone, subtle gradient overlays |

### 2.2 Design Tone
- **Clean & intentional** — setiap elemen punya alasan
- **Alive, not boring** — micro-animations pada hover, scroll, dan transitions
- **Professional warmth** — tidak terlalu korporat, ada sentuhan personal (blog tentang belajar bahasa Jepang)
- **Monochromatic hero** — foto profil B&W/duotone sesuai nada GreatFrontEnd

---

## 3. Information Architecture

### 3.1 Sitemap

```
bas.
├── / (Home — Hero + About + Experience + Featured Writing + Now)
├── /blog
│   ├── /blog/[slug] (Individual post)
│   └── /blog/tags/[tag] (Tag filter)
├── /now (What I'm working on, exploring, reading — updated weekly)
├── /uses (Tools, setup, tech stack — /uses page convention)
├── /projects (Coming soon — placeholder, Storybook as first project)
├── /resume (Downloadable PDF / View)
└── /colophon (Tech stack, credits — optional)
```

### 3.2 Page Sections — Home (`/`)

| # | Section | Description |
|---|---|---|
| 1 | **Navigation** | Floating glass navbar capsule (sticky, backdrop-blur) |
| 2 | **Hero** | B&W photo, nama, title, status badge, CTA buttons |
| 3 | **About** | Brief bio, personal touch (belajar 日本語), tech stack pills |
| 4 | **Experience** | Timeline vertikal, perusahaan, role, tech pills |
| 5 | **Featured Writing** | 3 latest blog posts, link "View all writing →" |
| 6 | **Now** | What I'm currently working on, exploring, and reading — shows consistency |
| 7 | **Contact** | Clean form (Name, Email, Message) + social links |
| 8 | **Footer** | Copyright, social icons, "Built with Next.js" |

### 3.3 Page — Blog (`/blog`)

| Feature | Detail |
|---|---|
| **Layout** | List view dengan filter pills (All, Frontend, Japanese, Insights) |
| **Blog Card** | Title, date, read time, tags, excerpt |
| **Content** | MDX-powered, code syntax highlighting, embedded charts |
| **Categories** | `frontend`, `japanese`, `insights`, `productivity` |

### 3.4 Page — Now (`/now`)

> Inspired by [nownownow.com](https://nownownow.com/) — a page that tells you what a person is focused on right now.

| Feature | Detail |
|---|---|
| **Currently Working On** | Brief descriptions of current professional focus (e.g., "Building design systems at [Company]") |
| **Current Exploration** | What I'm deep-diving into — NOT "learning" (framing for senior) |
| **🇯🇵 日本語 Progress** | JLPT N5 progress bar — this is personal/hobby, so OK to show as learning |
| **Activity Heatmap** | GitHub-style contribution grid — shows **consistency**, not "learning" |
| **Recent Reading** | Books/articles currently reading |
| **Update Frequency** | Manual/JSON-based, di-update mingguan |
| **Goal** | Show thought leadership & consistency, NOT "still learning" |

> **⚠️ Framing Rule:** NEVER show progress bars for professional skills (React, TypeScript, etc.) — these are already proven by 5+ years of experience. Only show progress for personal hobbies (日本語) or explicitly exploratory topics.

### 3.5 Page — Uses (`/uses`)

| Feature | Detail |
|---|---|
| **Editor & Terminal** | VS Code, extensions, terminal setup |
| **Dev Tools** | Browsers, design tools, productivity apps |
| **Hardware** | Laptop, peripherals, desk setup |
| **Stack** | Preferred tech stack per project type |
| **Goal** | SEO long-tail keywords, community engagement |

### 3.6 Page — Projects (`/projects`)

> **Note:** Section ini akan diisi nanti. Untuk sementara:
> - **"bas. Design System"** — Storybook-documented component library dari website ini sendiri (deployed ke URL terpisah)
> - Placeholder cards untuk project mendatang
> - Showcase 1-2 "project ide" yang bisa dibangun sebagai portfolio piece (saran di Section 9)

---

## 4. Functional Requirements

### 4.1 Must-Have (P0)

| ID | Feature | Description |
|---|---|---|
| F-01 | **Dark/Light Mode** | Toggle switch, persist ke localStorage, light default, system preference detect |
| F-02 | **Responsive Design** | Mobile-first, breakpoints: 375px, 768px, 1024px, 1440px |
| F-03 | **Blog System** | MDX content, code highlighting, reading time calc, tag filtering |
| F-04 | **SEO Optimization** | Meta tags, OG images, structured data, sitemap.xml, robots.txt |
| F-05 | **Now Page** | Activity heatmap, current focus, 日本語 progress, recent reading |
| F-06 | **Contact Form** | Server action atau API route, email notification |
| F-07 | **Accessibility (a11y)** | WCAG 2.1 AA, keyboard nav, screen reader, skip links, focus management |
| F-08 | **Scroll Animations** | Intersection Observer / Framer Motion, Apple-like smooth reveals |
| F-09 | **i18n Ready** | next-intl atau next-i18next, English default, framework siap multi-lang |

### 4.2 Should-Have (P1)

| ID | Feature | Description |
|---|---|---|
| F-10 | **RSS Feed** | `/feed.xml` untuk blog subscribers |
| F-11 | **Table of Contents** | Auto-generated TOC pada blog posts panjang |
| F-12 | **Search** | Client-side blog search (flexsearch / fuse.js) |
| F-13 | **Reading Progress** | Scroll progress bar pada blog post pages |
| F-14 | **Copy Code Button** | One-click copy pada code blocks |
| F-15 | **OG Image Generation** | Dynamic OG images per blog post (Satori / @vercel/og) |

### 4.3 Nice-to-Have (P2)

| ID | Feature | Description |
|---|---|---|
| F-16 | **View Counter** | Post view count (via Vercel KV / Upstash) |
| F-17 | **Guestbook** | Simple visitor guestbook |
| F-18 | **Spotify Now Playing** | Currently listening widget |
| F-19 | **Command Palette** | ⌘K navigation (cmdk library) |
| F-20 | **Diagram Generator** | Mermaid.js support dalam MDX blog posts |

---

## 5. Non-Functional Requirements

### 5.1 Performance

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size | < 150KB (first load JS) |

### 5.2 SEO Requirements

| Requirement | Implementation |
|---|---|
| Meta Tags | title, description, og:*, twitter:* per page |
| Structured Data | JSON-LD: Person, WebSite, BlogPosting |
| Sitemap | Auto-generated `sitemap.xml` via Next.js |
| Robots | `robots.txt` + meta robots per page |
| Canonical URLs | Self-referencing canonical tags |
| Heading Hierarchy | Single `<h1>` per page, proper H2-H6 |
| Semantic HTML | `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` |
| Image Alt Text | Semua images punya descriptive alt |
| hreflang (future) | Ready untuk i18n expansion |

### 5.3 Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|---|---|
| Color Contrast | ≥ 4.5:1 for normal text, ≥ 3:1 for large text |
| Keyboard Navigation | Full site navigable via keyboard |
| Skip Links | "Skip to content" link |
| Focus Indicators | Visible focus rings (emerald green-based) |
| ARIA Labels | Proper labels on interactive elements |
| Reduced Motion | `prefers-reduced-motion` media query support |
| Screen Reader | Semantic HTML + aria-label + sr-only text |

### 5.4 Deployment

| Property | Value |
|---|---|
| Platform | Vercel (free tier) |
| Domain | `*.vercel.app` (custom domain nanti) |
| CI/CD | Vercel auto-deploy from GitHub main branch |
| Environment | Production + Preview (per PR) |
| Analytics | Vercel Analytics (free tier) |

---

## 6. Content Strategy

### 6.1 Blog Content Pillars

| Pillar | Topik Contoh | Frekuensi |
|---|---|---|
| **Frontend Engineering** | React patterns, CSS techniques, performance tips | 2x/bulan |
| **日本語 Journey** | JLPT study notes, kanji breakdown, grammar tips | 1x/minggu |
| **Tech Insights** | Tool reviews, industry trends, career thoughts | 1x/bulan |
| **Productivity** | Dev workflow, learning methods, book reviews | 1x/bulan |

### 6.2 Now Page Data

```json
{
  "currentWork": [
    "Building design systems with React + TypeScript",
    "Exploring advanced animation patterns with Framer Motion",
    "Deep-diving into Web Performance optimization"
  ],
  "personalGoals": [
    { "name": "🇯🇵 日本語 (JLPT N5)", "progress": 40, "color": "#DC2626" }
  ],
  "reading": [
    { "title": "Designing Data-Intensive Applications", "author": "Martin Kleppmann" }
  ],
  "heatmap": "// Daily activity entries updated weekly"
}
```

---

## 7. Technical Architecture (High-Level)

> Detail arsitektur codebase akan dibahas di dokumen terpisah: `docs/ARCHITECTURE.md`

### 7.1 Tech Stack Overview

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 + CSS Custom Properties (design tokens) |
| Animation | Framer Motion |
| Content | MDX (next-mdx-remote / contentlayer) |
| Charts | Recharts / Nivo |
| Icons | Lucide React |
| Font | Inter + JetBrains Mono (Google Fonts / next/font) |
| Deployment | Vercel |
| Package Manager | pnpm |
| Linting | ESLint + Prettier |
| Git Hooks | Husky + lint-staged |
| Commit Convention | Commitlint (@commitlint/config-conventional) |
| Unit Testing | Vitest + React Testing Library |
| E2E Testing | Playwright |
| Component Docs | Storybook 8 |
| AI Tooling | MCP servers (filesystem, git, browser) |

### 7.2 Key Architecture Decisions

1. **App Router** — Server Components by default untuk performance
2. **MDX for Blog** — Markdown + JSX untuk interactive blog posts
3. **CSS Custom Properties** — Design tokens yang work across themes
4. **Static Generation** — Blog posts di-generate at build time (SSG)
5. **Incremental Static Regeneration** — Untuk Now page data
6. **Edge Runtime** — Contact form API route untuk global performance
7. **Husky + lint-staged** — Enforce code quality on every commit
8. **Commitlint** — Enforce conventional commit messages
9. **Storybook** — Component documentation + visual testing (also deployable as portfolio project)
10. **MCP Integration** — Model Context Protocol servers untuk AI-assisted development

---

## 8. Design Tokens Summary

> Full design token specification: `docs/DESIGN_TOKENS.md`

### 8.1 Color System Preview

```
Light Mode:
  Background: #FFFFFF (white) → #F9FAFB (gray-50)
  Foreground: #111827 (gray-900) → #6B7280 (gray-500)
  Accent:     #059669 (emerald-600) — GreatFrontEnd accent
  Success:    #059669 (emerald-600)
  
Dark Mode:
  Background: #0A0A0B (neutral-950) → #171717 (neutral-900)
  Foreground: #F9FAFB (gray-50) → #9CA3AF (gray-400)
  Accent:     #34D399 (emerald-400) — GreatFrontEnd accent
  Success:    #34D399 (emerald-400)
```

---

## 9. Project Ideas (untuk `/projects` section)

> Karena Anda belum punya personal projects, berikut saran portfolio pieces yang bisa dibangun seiring waktu:

| Project | Description | Tech | Effort |
|---|---|---|---|
| **Kanji Flashcard App** | SRS-based flashcard untuk belajar kanji Jepang | Next.js, localStorage | 2 minggu |
| **bas. Design System** | Storybook-documented component library from this website | React, Storybook, TypeScript | Built-in |
| **CSS Art Gallery** | Collection of pure CSS illustrations/animations | CSS, HTML | Ongoing |
| **Dev Tool CLI** | CLI tool yang solve problem spesifik Anda | Node.js, Commander | 1 minggu |
| **This Website** | Portfolio website ini sendiri bisa jadi project showcase | Next.js, MDX | - |

---

## 10. Success Metrics

| Metric | Target | Measurement |
|---|---|---|
| Lighthouse Score (avg) | ≥ 95 all categories | Lighthouse CI |
| Blog Posts Published | ≥ 4/month (across all pillars) | Content calendar |
| Now Page Updated | Weekly | JSON data commits |
| Organic Traffic | ≥ 500 visits/month (6 months) | Vercel Analytics |
| Contact Form Submissions | ≥ 2/month | Form analytics |
| Storybook Components Documented | 100% of UI components | Storybook |
| GitHub Stars | ≥ 50 (if open source) | GitHub |

---

## 11. Milestones & Timeline

| Phase | Milestone | Duration | Status |
|---|---|---|---|
| **Phase 0** | PRD + Design Tokens + Figma Prompt + Agent Skills | 1 day | ✅ Done |
| **Phase 1** | Next.js Setup + Design System + Dev Tooling (Husky, Commitlint, Storybook) | 3-4 days | ⬜ Planned |
| **Phase 2** | Layout Components + Navigation + Storybook stories | 3-4 days | ⬜ Planned |
| **Phase 3** | Home Page (Hero, About, Experience, Now, Contact) | 3-4 days | ⬜ Planned |
| **Phase 4** | Blog System (MDX, listing, individual posts) | 3-4 days | ⬜ Planned |
| **Phase 5** | Now Page + Uses Page | 2-3 days | ⬜ Planned |
| **Phase 6** | Dark Mode, Animations, Polish | 2-3 days | ⬜ Planned |
| **Phase 7** | SEO, a11y Audit, Performance, Testing | 1-2 days | ⬜ Planned |
| **Phase 8** | Deploy to Vercel + Final QA | 1 day | ⬜ Planned |

**Estimated Total:** 20-28 hari kerja

---

## 12. Open Questions

1. ~~Branding name~~ → ✅ Resolved: `bas.`
2. ~~Default theme~~ → ✅ Resolved: Light mode default
3. ~~Languages~~ → ✅ Resolved: English only, i18n ready
4. ~~Learning Dashboard framing~~ → ✅ Resolved: Reframed as `/now` page (senior-appropriate)
5. ~~Dev tooling~~ → ✅ Resolved: Husky + Commitlint + Storybook + Vitest + Playwright
6. Contact form backend — Vercel Serverless + Resend/SendGrid? Atau 3rd party form service?
7. Blog analytics — Perlu view counter per post? (P2)
8. Open source — Apakah repo akan public di GitHub?
9. Hero photo — Apakah sudah punya foto profesional, atau pakai placeholder dulu?

---

## Appendix A: Reference Websites

| Website | Inspiration |
|---|---|
| [GreatFrontEnd](https://www.greatfrontend.com/) | Color system, clean UI, neutral palette |
| [Apple.com](https://www.apple.com/) | Scroll animations, smooth transitions, premium feel |
| [Brittany Chiang](https://brittanychiang.com/) | Site structure, split layout, experience section |
| [Leerob.io](https://leerob.io/) | Next.js blog reference, MDX usage |
| [Josh W Comeau](https://www.joshwcomeau.com/) | Blog interactivity, teaching approach |

## Appendix B: Related Documents

| Document | Path | Purpose |
|---|---|---|
| Design Tokens | `docs/DESIGN_TOKENS.md` | Complete color, typography, spacing, animation tokens |
| Figma AI Prompt | `docs/FIGMA_PROMPT.md` | Prompt untuk generate design di Figma AI |
| Architecture | `docs/ARCHITECTURE.md` | Next.js codebase architecture (Phase 1) |
| Agent Skills | `.agents/skills/` | Agentic development skills & rules |
| Agent Rules | `.agents/AGENTS.md` | Project-scoped conventions & rules |
| Execution Plan | `docs/EXECUTION_PLAN.md` | Detailed sprint plan + estimation |
| MCP Config | `.mcp.json` | MCP server configuration (Phase 1) |
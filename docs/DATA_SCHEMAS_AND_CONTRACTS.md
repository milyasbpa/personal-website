# Data Schemas & TypeScript Contracts
## "bas." Personal Portfolio Website

**Document Version:** 2.0  
**Methodology:** Agentic Development Life Cycle (ADLC)  
**Strictness:** TypeScript Strict Mode (`noImplicitAny: true`, zero `any`)  
**Purpose:** Kontrak baku antara layer Data (`data/`, `api/`), layer Alur (`fragments/`), dan layer UI (`components/`) pada **3 Fitur Utama** (`homepage`, `blogs`, `blog`).

---

## 1. Core Global Types (`src/core/types/`)

### 1.1 Theme & Site Metadata (`src/core/types/common.types.ts`)
```ts
export type ThemeMode = 'light' | 'dark' | 'system';

export interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter';
  url: string;
  label: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: {
    name: string;
    handle: string;
    email: string;
    location: string;
  };
  navigation: NavigationLink[];
  socials: SocialLink[];
}
```

---

## 2. Feature-Scoped Schemas (`src/features/**/types/`)

### 2.1 Feature 1: `homepage` (`src/features/homepage/types/homepage.types.ts`)
Halaman utama (`/`) menggabungkan bagian Hero, About, Experience, Now/Self-Exploration, dan Contact.
```ts
export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  startDate: string;        // Format: 'YYYY-MM' or 'Month YYYY'
  endDate: string | 'Present';
  isCurrent: boolean;
  location: string;
  description: string[];
  techStack: string[];      // e.g. ['React', 'Next.js', 'TypeScript', 'Tailwind']
}

export interface HeroIntroData {
  name: string;
  monogram: string;         // "bas."
  tagline: string;
  bioSnippet: string;
  statusText: string;       // "Available for Work"
  statusActive: boolean;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

/**
 * CRITICAL RULE: Never show progress bars for professional skills (React, TS, CSS).
 * Only use `progressPercentage` for personal hobbies such as Japanese language study.
 */
export interface NowFocusItem {
  id: string;
  title: string;
  description: string;
  category: 'engineering' | 'architecture' | 'open-source';
  url?: string;
}

export interface JapaneseMilestone {
  targetLevel: string;      // "JLPT N5"
  progressPercentage: number; // e.g. 40
  kanjiLearnedCount: number;
  currentResource: string;
  notes: string;
}

export type HeatmapLevel = 0 | 1 | 2 | 3 | 4;

export interface HeatmapDay {
  date: string;             // Format: 'YYYY-MM-DD'
  count: number;
  level: HeatmapLevel;      // Maps to GreatFrontEnd/Bibit green scale (#F3F4F6 -> #00AB6B)
}

export interface HeatmapWeek {
  days: HeatmapDay[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errorCode?: string;
}

export interface HomepageData {
  hero: HeroIntroData;
  experience: ExperienceItem[];
  now: {
    lastUpdated: string;
    professionalFocus: NowFocusItem[];
    japaneseExploration: JapaneseMilestone;
    githubActivity: {
      totalContributions: number;
      weeks: HeatmapWeek[];
    };
  };
}
```

---

### 2.2 Feature 2: `blogs` (`src/features/blogs/types/blogs.types.ts`)
Halaman daftar artikel blog (`/writing`).
```ts
export interface ArticleFrontmatter {
  title: string;
  date: string;             // Format: 'YYYY-MM-DD'
  summary: string;
  tags: string[];
  published: boolean;
  slug: string;
  featured?: boolean;
}

export interface ArticleMetadata extends ArticleFrontmatter {
  readingTimeMinutes: number;
  wordCount: number;
}

export interface BlogListPageData {
  articles: ArticleMetadata[];
  availableTags: string[];
}
```

---

### 2.3 Feature 3: `blog` (`src/features/blog/types/blog.types.ts`)
Halaman detail artikel blog (`/writing/[slug]`).
```ts
import type { ArticleMetadata } from '../../blogs/types/blogs.types';

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface ArticleDetail {
  metadata: ArticleMetadata;
  content: string;          // Compiled MDX content string
  tableOfContents: TableOfContentsItem[];
}

/**
 * Props for VocabCard MDX custom component in blog posts
 */
export interface VocabCardProps {
  kanji: string;
  hiragana: string;
  romaji: string;
  meaningEnglish: string;
  exampleSentence?: string;
}
```

---

## 3. JSON Data Contract Compliance (`src/features/**/data/*.json`)

Dalam alur pengembangan, file JSON statis wajib memvalidasi skema TypeScript di atas:
- **`src/features/homepage/data/experience.json`**: Harus mematuhi `ExperienceItem[]`.
- **`src/features/homepage/data/now-activity.json`**: Harus mematuhi `HomepageData['now']`.
- **`src/features/blogs/data/articles-metadata.json`**: Harus mematuhi `ArticleMetadata[]`.

### Aturan Data Binding dalam Fragment (`fragments/`)
- Setiap `Fragment` wajib mendeklarasikan *explicit return type* atau tipe data yang di-fetch sebelum dikirim ke komponen UI.
- Dilarang keras menggunakan tipe data `any` atau `Record<string, unknown>` saat me-render komponen di lapis presentasi.

import { ExperienceItem, PostItem, LanguageItem } from '../types';

export const TECH_PILLS: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Vercel',
    url: '#',
    role: 'Senior Frontend Engineer',
    dates: 'Jan 2023 — Present',
    location: 'Remote · San Francisco, CA',
    desc: 'Building the Next.js App Router DX and developer-facing dashboard tooling used by 1M+ developers globally.',
    fullDesc:
      'As a Senior Frontend Engineer at Vercel, I work at the intersection of developer experience and product engineering — owning the App Router documentation tooling, internal component libraries, and the Vercel Dashboard used by over a million developers worldwide. I collaborate closely with the Next.js core team to ship features that shape how modern web apps are built.',
    points: [
      'Led the frontend rebuild of the Vercel Dashboard analytics page — reduced initial load time by 42% through route-level code splitting and streaming SSR.',
      'Architected a shared component library (70+ components) used across 4 product teams, with full Storybook documentation and automated visual regression tests.',
      'Designed and shipped the App Router migration guide tooling — an interactive step-by-step UI used by 200K+ developers.',
      'Established frontend performance budgets and Lighthouse CI gates across the monorepo, catching regressions before production.',
      'Mentored 2 junior engineers through structured code reviews and weekly 1:1 architecture sessions.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
  },
  {
    company: 'Linear',
    url: '#',
    role: 'Frontend Engineer',
    dates: 'Mar 2021 — Dec 2022',
    location: 'Remote · San Francisco, CA',
    desc: 'Shipped real-time collaboration features, keyboard-first UX patterns, and performance-critical rendering work.',
    fullDesc:
      'At Linear, I worked on one of the fastest and most keyboard-native project management tools in the industry. My focus was on real-time collaboration infrastructure, virtual rendering performance, and crafting the interaction design that Linear is known for — snappy, opinionated, and zero-friction.',
    points: [
      'Built real-time presence indicators and collaborative cursor tracking using WebSockets and CRDT-based state sync.',
      'Implemented a virtualized list renderer for issues and projects — handled 10,000+ items with consistent 60fps scroll.',
      'Designed and shipped the keyboard shortcut system (command palette, global keybindings) that became a core product differentiator.',
      'Reduced bundle size by 31% through tree-shaking audits, dynamic imports, and migrating to lighter icon sets.',
      'Collaborated directly with design to develop a motion language guide for all product animations.',
    ],
    tech: ['React', 'TypeScript', 'CSS Modules', 'GraphQL'],
  },
  {
    company: 'Shopify',
    url: '#',
    role: 'Frontend Developer',
    dates: 'Jun 2019 — Feb 2021',
    location: 'Toronto, Canada',
    desc: 'Contributed to Polaris design system and merchant-facing storefront experiences on the checkout team.',
    fullDesc:
      "At Shopify I started my career on the Checkout team, contributing to one of the highest-traffic, highest-stakes frontend surfaces on the web. I later moved to the Polaris design system team, where I helped shape the component library used by thousands of internal and external developers building on Shopify.",
    points: [
      'Shipped accessible, responsive UI components for the checkout flow — serving 500M+ transactions annually.',
      "Contributed 12 new components to Polaris (Shopify's design system) including DataTable, DatePicker, and Tooltip variants.",
      'Wrote comprehensive accessibility audits (WCAG 2.1 AA) for the merchant admin, fixing 40+ violations.',
      'Built an automated component documentation generator using AST parsing — eliminated manual doc maintenance.',
      'Participated in the Great Storefront Migration (Liquid → React) as part of a 15-engineer cross-functional squad.',
    ],
    tech: ['React', 'Ruby on Rails', 'Sass', 'GraphQL'],
  },
];

export const POSTS: PostItem[] = [
  {
    slug: 'intentional-animation-product-ui',
    title: 'The Case for Intentional Animation in Product UI',
    date: 'Jul 12, 2026',
    read: '5 min read',
    tag: 'Design Engineering',
  },
  {
    slug: 'five-years-typescript-type-safety',
    title: 'What Five Years of TypeScript Taught Me About Type Safety',
    date: 'Jun 3, 2026',
    read: '7 min read',
    tag: 'TypeScript',
  },
  {
    slug: 'css-grid-end-of-layout-frameworks',
    title: 'CSS Grid and the End of Layout Frameworks',
    date: 'Apr 18, 2026',
    read: '4 min read',
    tag: 'CSS',
  },
];

export const NOW_ITEMS: string[] = [
  'Architecting a design system with Storybook 8 and CVA — targeting zero runtime overhead.',
  'Building a Japanese vocabulary app (日本語学習アプリ) as a side project and learning tool.',
  'Contributing to open-source Next.js middleware patterns and App Router edge caching.',
];

export const HEATMAP_LEVELS_LIGHT: string[] = [
  '#F3F4F6',
  '#ECFDF5',
  '#A7F3D0',
  '#10B981',
  '#059669',
];

export const HEATMAP_LEVELS_DARK: string[] = [
  '#1F2937',
  '#064E3B',
  '#065F46',
  '#059669',
  '#34D399',
];

// Deterministic 52x7 heatmap grid to avoid SSR hydration mismatch
export const HEATMAP_DATA: number[][] = Array.from({ length: 52 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => ((w * 7 + d * 3 + 5) % 11 === 0 ? 4 : ((w * 3 + d) % 5)))
);

export const LANGUAGE_ITEMS: LanguageItem[] = [
  {
    flag: '🇺🇸',
    lang: 'English',
    native: 'English',
    level: 'Professional',
    levelDesc: 'Full professional proficiency',
  },
  {
    flag: '🇯🇵',
    lang: 'Japanese',
    native: '日本語',
    level: 'Learning · N5',
    levelDesc: 'Beginner — actively studying',
  },
];

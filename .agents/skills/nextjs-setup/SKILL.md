---
name: nextjs-setup
description: Setup and configure Next.js 14+ project with App Router, TypeScript, Tailwind CSS, and pnpm. Handles project initialization, folder structure, ESLint, Prettier, and base configuration.
---

# Next.js Project Setup Skill

## Context
You are setting up a Next.js 14+ project for the "bas." personal portfolio website. The project uses App Router, TypeScript, Tailwind CSS 4, and pnpm.

## Project Structure

```
personal-website/
├── .agents/                   # Agent skills & rules
├── .husky/                    # Git hooks (Husky)
│   ├── pre-commit             # lint-staged
│   └── commit-msg             # commitlint
├── .storybook/                # Storybook configuration
│   ├── main.ts
│   └── preview.ts
├── .mcp.json                  # MCP server configuration
├── docs/                      # Documentation
│   ├── PRD.md
│   ├── DESIGN_TOKENS.md
│   ├── FIGMA_PROMPT.md
│   ├── ARCHITECTURE.md
│   └── EXECUTION_PLAN.md
├── src/
│   ├── app/                   # Next.js App Router (thin routing & SEO metadata)
│   │   ├── layout.tsx         # Root layout (renders Navbar & Footer from core/components/layout)
│   │   ├── page.tsx           # Homepage (/) -> renders <HomepageContainer />
│   │   ├── writing/
│   │   │   ├── page.tsx       # Blog listing (/writing) -> renders <BlogsContainer />
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Blog detail (/writing/[slug]) -> renders <BlogDetailContainer />
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts   # Contact form Edge handler
│   ├── core/                  # Global shared layer across all features
│   │   ├── components/
│   │   │   ├── layout/        # Navbar/, Footer/, SectionWrapper/ (each in its own folder)
│   │   │   └── ui/            # Button/, Card/, Badge/, ThemeToggle/ (each in its own folder)
│   │   ├── config/            # siteMetadata.ts, navigation.ts
│   │   ├── hooks/             # Global hooks (useTheme, useMediaQuery, useScrollDirection)
│   │   ├── lib/               # Utility functions (cn, formatDate, mdx-loader)
│   │   ├── styles/            # index.css (Tailwind CSS 4 + Design Tokens)
│   │   └── types/             # Global TypeScript interfaces
│   └── features/              # Exactly 3 feature domains (1 per route in prototype)
│       ├── homepage/          # Feature 1: Homepage (/, includes Hero, About, Experience, Now, Contact)
│       ├── blogs/             # Feature 2: Blog Listing (/writing)
│       └── blog/              # Feature 3: Blog Detail (/writing/[slug], includes MDX custom components)
│   └── types/                 # TypeScript type definitions
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon/
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── vitest.config.ts           # Vitest configuration
├── playwright.config.ts       # Playwright E2E config
├── commitlint.config.js       # Commitlint rules
├── package.json
└── README.md
```

## Key Configuration

### next.config.mjs
- Enable MDX support
- Configure image domains
- Setup redirects if needed

### tailwind.config.ts
- Extend with design tokens from `docs/DESIGN_TOKENS.md`
- Dark mode via `selector` strategy with `[data-theme="dark"]`
- Custom fonts, colors, spacing, animation

### TypeScript
- Strict mode enabled
- Path aliases: `@/` maps to `src/`

### ESLint
- Next.js recommended rules
- Accessibility plugin (eslint-plugin-jsx-a11y)

### Husky + lint-staged
- Pre-commit: runs `lint-staged` (ESLint + Prettier on staged files)
- Commit-msg: runs `commitlint` to enforce conventional commits

### Commitlint
- Extends `@commitlint/config-conventional`
- Custom types: `feat`, `fix`, `style`, `docs`, `refactor`, `perf`, `a11y`, `seo`, `blog`, `test`, `chore`, `storybook`, `ci`

### Storybook
- Framework: `@storybook/nextjs`
- Addons: a11y, dark mode, viewport, interactions
- Stories co-located with components: `ComponentName.stories.tsx`

### Vitest
- Config in `vitest.config.ts`
- Coverage target: utilities and hooks
- React Testing Library for component tests

### MCP Configuration
- `.mcp.json` at project root
- Servers: filesystem, git (additional servers added as needed)

## Rules
1. Always use `pnpm` as package manager
2. Use App Router (not Pages Router)
3. All components should be in `src/components/`
4. Server Components by default, `'use client'` only when needed
5. Use `next/font` for font loading (not CDN links)
6. Use `next/image` for all images
7. All pages must export metadata for SEO
8. Every component must have a `.stories.tsx` file
9. All utilities and hooks must have test files
10. All commits must pass commitlint (conventional commits)

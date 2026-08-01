# Project Rules — "bas." Personal Portfolio

## General Rules

1. **Always read the PRD first** — Before implementing any feature, reference `docs/PRD.md` for requirements.
2. **Design tokens are law** — Never hardcode color values, spacing, or font sizes. Always use tokens from `docs/DESIGN_TOKENS.md`.
3. **No purple or indigo** — The brand color is **GreatFrontEnd Emerald / Bibit Green** (#00AB6B / #00BF71 / #059669). Purple, violet, and indigo are forbidden.
4. **Mobile-first** — Write responsive CSS starting from mobile, scaling up via breakpoints.
5. **Server Components by default** — Only add `'use client'` when the component needs interactivity, hooks, or browser APIs.
6. **TypeScript strict mode** — No `any` types. Define proper interfaces and types in `src/core/types/` or `src/features/**/types/`.
7. **Accessibility always** — Every interactive element must be keyboard accessible with visible focus indicators.
8. **No "learning" framing for professional skills** — Never show progress bars for React, TypeScript, CSS, etc. These are proven by 5+ years of experience. Only show progress for personal hobbies (日本語).
9. **Every component needs a Storybook story** — All components in `src/core/components/` and `src/features/**/components/` must have a corresponding `.stories.tsx` file.
10. **Write tests for utilities and hooks** — All files in `src/core/lib/`, `src/core/hooks/`, and `src/features/**/hooks/` must have test coverage.
11. **Modular Feature Architecture (`src/core`, `src/features`, `src/app`)** — Follow `docs/CODEBASE_ARCHITECTURE.md`. Global layout (`Navbar.tsx`, `Footer.tsx`) and global hooks (`useTheme.ts`) MUST reside in `src/core/`, never in `src/app/` or `src/features/`. Container components (`container/`) must NOT prop-drill.
12. **Prototype Reference (`Personal Portfolio/`)** — Use `Personal Portfolio/src/` as the visual and copywriting reference source when building components, refactoring monolithic files into clean modular features.

## File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`, `BlogCard.tsx`)
- Component Stories: `PascalCase.stories.tsx` (e.g., `Button.stories.tsx`)
- Component Tests: `PascalCase.test.tsx` (e.g., `Button.test.tsx`)
- Utilities: `camelCase.ts` in `src/core/lib/` (e.g., `formatDate.ts`, `cn.ts`)
- Utility Tests: `camelCase.test.ts` (e.g., `formatDate.test.ts`)
- Content: `kebab-case.mdx` (e.g., `building-design-system.mdx`)
- Types: `camelCase.ts` in `src/core/types/` or `src/features/**/types/` (e.g., `blog.ts`, `now.ts`)

## Commit Messages

Use conventional commits (enforced by Commitlint + Husky):
```
feat: add hero section with status badge
fix: correct dark mode text contrast
style: polish navbar glass effect
docs: update PRD with blog requirements
refactor: extract theme tokens to CSS variables
perf: optimize image loading
a11y: add skip-to-content link
seo: add JSON-LD structured data
blog: add sample post about React patterns
test: add unit tests for Button component
chore: configure husky pre-commit hooks
storybook: add Navbar component stories
ci: add GitHub Actions workflow
```

## Package Manager

Always use `pnpm`. Never use `npm` or `yarn`.

## Testing

- Run `pnpm build` before every commit to ensure no build errors (automated via Husky)
- Run `pnpm lint` to check for ESLint issues (automated via lint-staged)
- Run `pnpm test` to run unit tests (Vitest)
- Run `pnpm test:e2e` for end-to-end tests (Playwright)
- Run `pnpm storybook` to verify component documentation
- Lighthouse audit should score ≥ 90 during development, ≥ 95 for production

## Content Language

- UI text: English
- Blog posts: English (日本語 content within English posts is OK)
- Code comments: English

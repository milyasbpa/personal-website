---
name: design-system
description: Implement and maintain the design token system for the "bas." portfolio website. Covers CSS custom properties, Tailwind theme configuration, color system (light/dark), typography, spacing, and component token mapping.
---

# Design System Skill

## Context
You are implementing the design system for "bas." portfolio website. All design decisions are documented in `docs/DESIGN_TOKENS.md`. The system is based on GreatFrontEnd's aesthetic with Apple-inspired animations.

## Core Principles
1. **Tokens first** — All visual values must come from design tokens (CSS custom properties)
2. **Semantic naming** — Use purpose-based names (`--bg-primary`) not raw values (`#FFFFFF`)
3. **Theme-aware** — Every color token must have light AND dark mode values
4. **No magic numbers** — All spacing, sizing, colors from the token system

## Implementation Steps

### 1. CSS Custom Properties
Define all tokens in `src/app/globals.css`:
- Primitive colors (never change between themes)
- Semantic tokens within `:root` (light mode)
- Semantic tokens within `[data-theme="dark"]` (dark mode)

### 2. Tailwind Integration
Map tokens to `tailwind.config.ts`:
- Use `var(--token-name)` as values
- Dark mode: `darkMode: ['selector', '[data-theme="dark"]']`
- Extend (not replace) default theme

### 3. Component Tokens
Specific token compositions for:
- Navbar (glass effect)
- Cards (elevated surfaces)
- Pills/Badges (brand tint)
- Focus rings (accessibility)
- Code blocks (dark surfaces)

## Color Rules (CRITICAL)
- **NO PURPLE** — Brand color is Indigo (#4F46E5 light / #818CF8 dark)
- Light mode backgrounds: White → Gray-50 → Gray-100
- Dark mode backgrounds: #0A0A0B → #141415 → #1F2937
- Always check contrast ratios: ≥ 4.5:1 normal text, ≥ 3:1 large text

## Reference
- Full token specification: `docs/DESIGN_TOKENS.md`
- Component token mapping: Section 9 of DESIGN_TOKENS.md
- Tailwind config reference: Section 10 of DESIGN_TOKENS.md

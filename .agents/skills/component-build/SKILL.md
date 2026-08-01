---
name: component-build
description: Build React components following the "bas." design system conventions. Handles component structure, TypeScript typing, accessibility, responsive design, and animation integration.
---

# Component Build Skill

## Context
You are building React components for the "bas." personal portfolio website. All components must follow the project's design system, be accessible, and support dark/light themes.

## Component Structure Convention

```typescript
// src/components/ui/Button.tsx

import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
          // variants
          variant === 'primary' && 'bg-brand-600 text-white hover:bg-brand-700',
          variant === 'secondary' && 'border border-neutral-200 bg-white hover:bg-neutral-50',
          variant === 'ghost' && 'hover:bg-neutral-100',
          // sizes
          size === 'sm' && 'h-8 px-3 text-sm',
          size === 'md' && 'h-10 px-4 text-sm',
          size === 'lg' && 'h-12 px-6 text-base',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
```

## Rules

### Component Architecture
1. Use `forwardRef` for all primitive UI components
2. Extend native HTML element props (e.g., `ComponentPropsWithoutRef<'button'>`)
3. Use `cn()` utility for className merging (clsx + tailwind-merge)
4. Export both component and its props type
5. Set `displayName` for debugging

### Styling
1. Use Tailwind CSS classes that reference design tokens
2. Never hardcode colors — use semantic color classes
3. Support dark mode via token-aware classes
4. All spacing from the 4px grid system

### Accessibility
1. All interactive elements must be keyboard accessible
2. Provide `aria-label` when visual label is insufficient
3. Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
4. Focus indicators must be visible (indigo ring)
5. Support `prefers-reduced-motion`

### Animation
1. Use Framer Motion for complex animations
2. Use CSS transitions for simple hover/focus states
3. Reference animation tokens from DESIGN_TOKENS.md
4. Always provide `motion-reduce` fallback

### Responsive
1. Mobile-first approach
2. Test at breakpoints: 375px, 768px, 1024px, 1440px
3. Touch targets minimum 44x44px on mobile

## Component Organization

```
src/components/
├── ui/           # Reusable primitives (Button, Badge, Card, Input, etc.)
├── layout/       # Layout (Navbar, Sidebar, Footer, Container)
├── sections/     # Page sections (Hero, About, Experience, Contact, Now)
├── blog/         # Blog-specific (PostCard, TOC, CodeBlock, MDXComponents)
└── now/          # Now page (Heatmap, ProgressBar, CurrentFocus)
```

## Storybook Stories

Every component MUST have a corresponding `.stories.tsx` file:

```typescript
// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Button', variant: 'secondary' },
}
```

### Story Organization
- `UI/*` — Reusable primitives
- `Layout/*` — Navbar, Sidebar, Footer
- `Sections/*` — Hero, About, Experience, etc.
- `Blog/*` — PostCard, CodeBlock, etc.
- `Now/*` — Heatmap, ProgressBar, etc.

## Testing

- UI primitives: test render, props, a11y, interactions
- Use `@testing-library/react` + `vitest`
- Test file naming: `ComponentName.test.tsx`

## cn() Utility

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

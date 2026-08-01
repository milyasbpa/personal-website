---
name: animation-system
description: Implement Apple-inspired animations using Framer Motion and CSS transitions. Handles scroll-triggered reveals, page transitions, hover effects, and micro-interactions with accessibility considerations.
---

# Animation System Skill

## Context
The "bas." portfolio uses Apple-inspired smooth animations. The primary library is Framer Motion for React animations, with CSS transitions for simpler effects. All animations must respect `prefers-reduced-motion`.

## Animation Categories

### 1. Scroll-Triggered Reveals (Apple-style)
- Sections fade-up as they enter viewport
- Staggered children within sections
- Use IntersectionObserver via Framer Motion's `useInView`

```typescript
// Usage in section components
import { motion } from 'framer-motion'
import { motionTokens } from '@/lib/motion'

function Section({ children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={motionTokens.fadeUp}
    >
      {children}
    </motion.section>
  )
}
```

### 2. Page Transitions
- Smooth fade + translateY between page navigations
- Use layout animations for shared elements

### 3. Hover Micro-interactions
- Cards: subtle translateY(-2px) + shadow increase
- Buttons: color shift + subtle scale
- Nav links: indicator line width animation
- Social icons: color change + slight scale

### 4. Loading/Status Animations
- Status badge: pulse dot animation
- Skeleton loading: gradient sweep
- Theme toggle: sun/moon morph

## Motion Tokens (Framer Motion)
All animation presets are defined in `src/lib/motion.ts` as documented in `docs/DESIGN_TOKENS.md` Section 6.3.

## Accessibility Rules
1. ALWAYS wrap animations with reduced-motion check:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

2. In Framer Motion, use `useReducedMotion()` hook:
```typescript
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
    />
  )
}
```

## Performance Rules
1. Use `transform` and `opacity` only for animations (GPU-accelerated)
2. Avoid animating `width`, `height`, `top`, `left` (causes layout shifts)
3. Use `will-change: transform` sparingly
4. Set `viewport={{ once: true }}` for scroll animations (don't re-trigger)
5. Use `layout` animations carefully — can be expensive

## CSS Easing Reference
```
--ease-apple:      cubic-bezier(0.25, 0.46, 0.45, 0.94)  // smooth, natural
--ease-apple-fast: cubic-bezier(0.23, 1, 0.32, 1)        // snappy
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)     // overshoot
```

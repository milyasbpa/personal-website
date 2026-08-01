---
name: accessibility
description: Implement and audit accessibility (a11y) for WCAG 2.1 AA compliance. Handles keyboard navigation, ARIA attributes, color contrast, focus management, reduced motion, screen reader support, and skip links.
---

# Accessibility Skill

## Context
The "bas." portfolio must meet WCAG 2.1 AA standards. Accessibility is not an afterthought — it's built into every component from the start.

## WCAG 2.1 AA Requirements

### Perceivable
1. **Color Contrast**: Normal text ≥ 4.5:1, Large text ≥ 3:1
2. **Text alternatives**: All images have descriptive `alt` text
3. **Adaptable**: Content can be presented in different ways (semantic HTML)
4. **Distinguishable**: Don't use color alone to convey information

### Operable
1. **Keyboard**: All functionality available via keyboard
2. **Focus visible**: Clear focus indicators (indigo ring)
3. **Skip links**: "Skip to content" link at page top
4. **No traps**: User can navigate away from all components

### Understandable
1. **Readable**: Language declared (`lang="en"`)
2. **Predictable**: Consistent navigation, no unexpected changes
3. **Input assistance**: Clear error messages, labels on form fields

### Robust
1. **Parsing**: Valid HTML
2. **Compatible**: Works with assistive technologies

## Implementation Patterns

### Skip Link
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-md"
>
  Skip to content
</a>
```

### Focus Ring (Global)
```css
*:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}
```

### Screen Reader Only Text
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Navigation ARIA
```tsx
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="#about" aria-current={isActive ? 'true' : undefined}>About</a></li>
  </ul>
</nav>
```

### Form Accessibility
```tsx
<div>
  <label htmlFor="email" className="block text-sm font-medium">
    Email
  </label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? 'email-error' : undefined}
  />
  {hasError && (
    <p id="email-error" role="alert" className="text-error-600 text-sm">
      Please enter a valid email address.
    </p>
  )}
</div>
```

## Audit Checklist
- [ ] Tab through entire page — all elements reachable
- [ ] Focus indicators visible on every interactive element
- [ ] Skip link works (visible on focus)
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Error messages are announced (role="alert")
- [ ] Heading hierarchy is correct (single H1, sequential)
- [ ] Color contrast passes (check with axe DevTools)
- [ ] Reduced motion disables all animations
- [ ] Screen reader reads content in logical order
- [ ] No keyboard traps
- [ ] `lang="en"` set on `<html>`

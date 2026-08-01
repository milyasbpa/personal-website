# Design Token System
## "bas." Personal Portfolio Website

**Document Version:** 1.0  
**Last Updated:** 2026-07-31  
**Design Reference:** GreatFrontEnd Design System + Apple aesthetics

---

## 1. Color Tokens

### 1.1 Primitive Colors (Raw Palette)

> These are raw color values that NEVER change between themes.
> They are only referenced by semantic tokens.

#### Neutral (Slate-based, GreatFrontEnd style)

```css
/* Primitive: Neutral */
--color-neutral-0:    #FFFFFF;
--color-neutral-25:   #FCFCFD;
--color-neutral-50:   #F9FAFB;
--color-neutral-100:  #F3F4F6;
--color-neutral-200:  #E5E7EB;
--color-neutral-300:  #D1D5DB;
--color-neutral-400:  #9CA3AF;
--color-neutral-500:  #6B7280;
--color-neutral-600:  #4B5563;
--color-neutral-700:  #374151;
--color-neutral-800:  #1F2937;
--color-neutral-900:  #111827;
--color-neutral-950:  #0A0A0B;
```

#### Brand / Accent (GreatFrontEnd Emerald / Mint Green)

```css
/* Primitive: Brand (Emerald / Mint Green) */
--color-brand-50:   #ECFDF5;
--color-brand-100:  #D1FAE5;
--color-brand-200:  #A7F3D0;
--color-brand-300:  #6EE7B7;
--color-brand-400:  #34D399;
--color-brand-500:  #10B981;
--color-brand-600:  #059669;
--color-brand-700:  #047857;
--color-brand-800:  #065F46;
--color-brand-900:  #064E3B;
--color-brand-950:  #022C22;
```

#### Semantic Colors

```css
/* Primitive: Success (Emerald) */
--color-success-50:   #ECFDF5;
--color-success-100:  #D1FAE5;
--color-success-200:  #A7F3D0;
--color-success-300:  #6EE7B7;
--color-success-400:  #34D399;
--color-success-500:  #10B981;
--color-success-600:  #059669;
--color-success-700:  #047857;

/* Primitive: Warning (Amber) */
--color-warning-50:   #FFFBEB;
--color-warning-100:  #FEF3C7;
--color-warning-400:  #FBBF24;
--color-warning-500:  #F59E0B;
--color-warning-600:  #D97706;

/* Primitive: Error (Red) */
--color-error-50:   #FEF2F2;
--color-error-100:  #FEE2E2;
--color-error-400:  #F87171;
--color-error-500:  #EF4444;
--color-error-600:  #DC2626;

/* Primitive: Info (Sky) */
--color-info-50:   #F0F9FF;
--color-info-100:  #E0F2FE;
--color-info-400:  #38BDF8;
--color-info-500:  #0EA5E9;
--color-info-600:  #0284C7;
```

---

### 1.2 Semantic Tokens (Theme-Aware)

> These tokens change between Light and Dark mode.
> All components should ONLY use semantic tokens.

#### Light Mode (Default)

```css
:root, [data-theme="light"] {
  /* ─── Background ─── */
  --bg-primary:       var(--color-neutral-0);     /* #FFFFFF — page bg */
  --bg-secondary:     var(--color-neutral-50);     /* #F9FAFB — section bg */
  --bg-tertiary:      var(--color-neutral-100);    /* #F3F4F6 — card bg, inputs */
  --bg-inverse:       var(--color-neutral-900);    /* #111827 — dark surfaces */
  --bg-brand:         var(--color-brand-50);       /* #ECFDF5 — brand tint */
  --bg-brand-solid:   var(--color-brand-600);      /* #059669 — brand solid */
  --bg-overlay:       rgba(0, 0, 0, 0.5);         /* modal overlay */

  /* ─── Foreground / Text ─── */
  --fg-primary:       var(--color-neutral-900);    /* #111827 — headings */
  --fg-secondary:     var(--color-neutral-700);    /* #374151 — body text */
  --fg-tertiary:      var(--color-neutral-500);    /* #6B7280 — muted text */
  --fg-quaternary:    var(--color-neutral-400);     /* #9CA3AF — placeholder */
  --fg-inverse:       var(--color-neutral-0);      /* #FFFFFF — text on dark bg */
  --fg-brand:         var(--color-brand-600);      /* #059669 — brand text */
  --fg-link:          var(--color-brand-600);      /* #059669 — links */
  --fg-link-hover:    var(--color-brand-700);      /* #047857 — link hover */

  /* ─── Border ─── */
  --border-primary:   var(--color-neutral-200);    /* #E5E7EB — default border */
  --border-secondary: var(--color-neutral-300);    /* #D1D5DB — stronger border */
  --border-brand:     var(--color-brand-500);      /* #6366F1 — focus ring */
  --border-focus:     var(--color-brand-500);      /* #6366F1 — focus indicator */

  /* ─── Interactive ─── */
  --interactive-primary:       var(--color-brand-600);   /* button bg */
  --interactive-primary-hover: var(--color-brand-700);   /* button hover */
  --interactive-primary-text:  var(--color-neutral-0);   /* button text */
  --interactive-secondary:       var(--color-neutral-0);   /* secondary btn bg */
  --interactive-secondary-hover: var(--color-neutral-50);  /* secondary btn hover */
  --interactive-secondary-text:  var(--color-neutral-900); /* secondary btn text */
  --interactive-ghost-hover:   var(--color-neutral-100);   /* ghost btn hover */

  /* ─── Status ─── */
  --status-success-bg:    var(--color-success-50);
  --status-success-text:  var(--color-success-600);
  --status-success-dot:   var(--color-success-500);
  --status-warning-bg:    var(--color-warning-50);
  --status-warning-text:  var(--color-warning-600);
  --status-error-bg:      var(--color-error-50);
  --status-error-text:    var(--color-error-600);
  --status-info-bg:       var(--color-info-50);
  --status-info-text:     var(--color-info-600);

  /* ─── Surface (Cards, Navbar, etc.) ─── */
  --surface-glass:        rgba(255, 255, 255, 0.72);
  --surface-glass-border: rgba(255, 255, 255, 0.18);
  --surface-elevated:     var(--color-neutral-0);
  --surface-sunken:       var(--color-neutral-50);

  /* ─── Code ─── */
  --code-bg:          var(--color-neutral-900);
  --code-fg:          var(--color-neutral-100);
  --code-inline-bg:   var(--color-neutral-100);
  --code-inline-fg:   var(--color-brand-600);
}
```

#### Dark Mode

```css
[data-theme="dark"] {
  /* ─── Background ─── */
  --bg-primary:       var(--color-neutral-950);    /* #0A0A0B */
  --bg-secondary:     #141415;                     /* slightly lighter */
  --bg-tertiary:      var(--color-neutral-800);    /* #1F2937 */
  --bg-inverse:       var(--color-neutral-0);      /* #FFFFFF */
  --bg-brand:         rgba(99, 102, 241, 0.1);     /* brand tint dark */
  --bg-brand-solid:   var(--color-brand-500);      /* #6366F1 */
  --bg-overlay:       rgba(0, 0, 0, 0.7);

  /* ─── Foreground / Text ─── */
  --fg-primary:       var(--color-neutral-50);     /* #F9FAFB */
  --fg-secondary:     var(--color-neutral-300);    /* #D1D5DB */
  --fg-tertiary:      var(--color-neutral-400);    /* #9CA3AF */
  --fg-quaternary:    var(--color-neutral-500);    /* #6B7280 */
  --fg-inverse:       var(--color-neutral-900);    /* #111827 */
  --fg-brand:         var(--color-brand-400);      /* #34D399 */
  --fg-link:          var(--color-brand-400);      /* #34D399 */
  --fg-link-hover:    var(--color-brand-300);      /* #6EE7B7 */

  /* ─── Border ─── */
  --border-primary:   rgba(255, 255, 255, 0.1);   /* subtle border */
  --border-secondary: rgba(255, 255, 255, 0.15);
  --border-brand:     var(--color-brand-400);
  --border-focus:     var(--color-brand-400);

  /* ─── Interactive ─── */
  --interactive-primary:       var(--color-brand-500);
  --interactive-primary-hover: var(--color-brand-400);
  --interactive-primary-text:  var(--color-neutral-0);
  --interactive-secondary:       rgba(255, 255, 255, 0.05);
  --interactive-secondary-hover: rgba(255, 255, 255, 0.1);
  --interactive-secondary-text:  var(--color-neutral-50);
  --interactive-ghost-hover:   rgba(255, 255, 255, 0.06);

  /* ─── Status ─── */
  --status-success-bg:    rgba(16, 185, 129, 0.1);
  --status-success-text:  var(--color-success-400);
  --status-success-dot:   var(--color-success-400);
  --status-warning-bg:    rgba(245, 158, 11, 0.1);
  --status-warning-text:  var(--color-warning-400);
  --status-error-bg:      rgba(239, 68, 68, 0.1);
  --status-error-text:    var(--color-error-400);
  --status-info-bg:       rgba(14, 165, 233, 0.1);
  --status-info-text:     var(--color-info-400);

  /* ─── Surface ─── */
  --surface-glass:        rgba(20, 20, 21, 0.72);
  --surface-glass-border: rgba(255, 255, 255, 0.08);
  --surface-elevated:     #1A1A1B;
  --surface-sunken:       #0D0D0E;

  /* ─── Code ─── */
  --code-bg:          #0D1117;
  --code-fg:          var(--color-neutral-200);
  --code-inline-bg:   rgba(255, 255, 255, 0.06);
  --code-inline-fg:   var(--color-brand-400);
}
```

---

## 2. Typography Tokens

### 2.1 Font Families

```css
:root {
  --font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:  'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
  --font-display: 'Inter', sans-serif; /* same but using variable font with display swap */
}
```

### 2.2 Font Sizes (Fluid Typography)

```css
:root {
  /* Using clamp() for fluid scaling */
  --text-xs:    clamp(0.6875rem, 0.65rem + 0.1vw, 0.75rem);     /* 11-12px */
  --text-sm:    clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem);    /* 13-14px */
  --text-base:  clamp(0.875rem, 0.84rem + 0.2vw, 1rem);          /* 14-16px */
  --text-lg:    clamp(1rem, 0.95rem + 0.25vw, 1.125rem);         /* 16-18px */
  --text-xl:    clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem);      /* 18-20px */
  --text-2xl:   clamp(1.375rem, 1.25rem + 0.5vw, 1.5rem);        /* 22-24px */
  --text-3xl:   clamp(1.625rem, 1.45rem + 0.75vw, 1.875rem);     /* 26-30px */
  --text-4xl:   clamp(2rem, 1.75rem + 1.1vw, 2.25rem);           /* 32-36px */
  --text-5xl:   clamp(2.5rem, 2.1rem + 1.75vw, 3rem);            /* 40-48px */
  --text-6xl:   clamp(3rem, 2.5rem + 2.25vw, 3.75rem);           /* 48-60px */
}
```

### 2.3 Font Weights

```css
:root {
  --font-light:     300;
  --font-regular:   400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;
}
```

### 2.4 Line Heights

```css
:root {
  --leading-none:    1;
  --leading-tight:   1.25;
  --leading-snug:    1.375;
  --leading-normal:  1.5;
  --leading-relaxed: 1.625;
  --leading-loose:   1.75;   /* for body text readability */
  --leading-prose:   1.8;    /* for blog content */
}
```

### 2.5 Letter Spacing

```css
:root {
  --tracking-tighter: -0.04em;
  --tracking-tight:   -0.025em;
  --tracking-normal:  0;
  --tracking-wide:    0.025em;
  --tracking-wider:   0.05em;
  --tracking-widest:  0.1em;
}
```

### 2.6 Typography Compositions (Utility)

```css
/* Heading Styles */
.text-display {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tighter);
  color: var(--fg-primary);
}

.text-h1 {
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--fg-primary);
}

.text-h2 {
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--fg-primary);
}

.text-h3 {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--fg-primary);
}

.text-body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-relaxed);
  color: var(--fg-secondary);
}

.text-body-sm {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--fg-tertiary);
}

.text-caption {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--fg-tertiary);
}

.text-code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  line-height: var(--leading-relaxed);
}
```

---

## 3. Spacing Tokens

### 3.1 Base Scale (4px grid)

```css
:root {
  --space-0:    0;
  --space-0.5:  0.125rem;  /* 2px */
  --space-1:    0.25rem;   /* 4px */
  --space-1.5:  0.375rem;  /* 6px */
  --space-2:    0.5rem;    /* 8px */
  --space-2.5:  0.625rem;  /* 10px */
  --space-3:    0.75rem;   /* 12px */
  --space-3.5:  0.875rem;  /* 14px */
  --space-4:    1rem;      /* 16px */
  --space-5:    1.25rem;   /* 20px */
  --space-6:    1.5rem;    /* 24px */
  --space-7:    1.75rem;   /* 28px */
  --space-8:    2rem;      /* 32px */
  --space-10:   2.5rem;    /* 40px */
  --space-12:   3rem;      /* 48px */
  --space-14:   3.5rem;    /* 56px */
  --space-16:   4rem;      /* 64px */
  --space-20:   5rem;      /* 80px */
  --space-24:   6rem;      /* 96px */
  --space-32:   8rem;      /* 128px */
}
```

### 3.2 Semantic Spacing

```css
:root {
  /* Section gaps (Apple-like generous spacing) */
  --section-gap:        clamp(4rem, 5vw + 2rem, 7rem);     /* 64-112px */
  --section-gap-lg:     clamp(5rem, 6vw + 2.5rem, 8rem);   /* 80-128px */
  
  /* Container */
  --container-max:      1024px;                              /* content width */
  --container-padding:  clamp(1.5rem, 4vw, 3rem);           /* 24-48px */
  
  /* Card padding */
  --card-padding:       var(--space-6);                      /* 24px */
  --card-padding-lg:    var(--space-8);                      /* 32px */
  
  /* Nav height */
  --nav-height:         64px;
  
  /* Sidebar width (Brittany Chiang style) */
  --sidebar-width:      48%;
}
```

---

## 4. Border & Radius Tokens

```css
:root {
  /* Border Radius */
  --radius-none:   0;
  --radius-sm:     0.25rem;   /* 4px — tags, small elements */
  --radius-md:     0.5rem;    /* 8px — buttons, inputs */
  --radius-lg:     0.75rem;   /* 12px — cards */
  --radius-xl:     1rem;      /* 16px — large cards */
  --radius-2xl:    1.5rem;    /* 24px — hero sections */
  --radius-full:   9999px;    /* pills, avatars */

  /* Border Width */
  --border-thin:   1px;
  --border-medium: 2px;
  --border-thick:  3px;
}
```

---

## 5. Shadow Tokens

```css
:root {
  /* Shadows — subtle, Apple-like */
  --shadow-xs:    0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm:    0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md:    0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04);
  --shadow-lg:    0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
  --shadow-xl:    0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
  
  /* Glass shadow */
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.08);
  
  /* Focus ring shadow */
  --shadow-focus: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

[data-theme="dark"] {
  --shadow-xs:    0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-sm:    0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md:    0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
  --shadow-lg:    0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
  --shadow-xl:    0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-focus: 0 0 0 3px rgba(129, 140, 248, 0.3);
}
```

---

## 6. Animation Tokens (Apple-inspired)

### 6.1 Easing Curves

```css
:root {
  /* Apple-inspired easing */
  --ease-default:    cubic-bezier(0.25, 0.1, 0.25, 1);     /* standard */
  --ease-in:         cubic-bezier(0.42, 0, 1, 1);
  --ease-out:        cubic-bezier(0, 0, 0.58, 1);
  --ease-in-out:     cubic-bezier(0.42, 0, 0.58, 1);
  
  /* Apple signature curves */
  --ease-apple:      cubic-bezier(0.25, 0.46, 0.45, 0.94); /* smooth, natural */
  --ease-apple-fast: cubic-bezier(0.23, 1, 0.32, 1);       /* snappy, bouncy */
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);    /* overshoot spring */
}
```

### 6.2 Duration

```css
:root {
  --duration-instant:  75ms;
  --duration-fast:     150ms;
  --duration-normal:   250ms;
  --duration-slow:     350ms;
  --duration-slower:   500ms;
  --duration-slowest:  700ms;
  
  /* Specific use cases */
  --duration-hover:    var(--duration-fast);
  --duration-focus:    var(--duration-fast);
  --duration-modal:    var(--duration-slow);
  --duration-page:     var(--duration-slower);
  --duration-scroll-reveal: var(--duration-slowest);
}
```

### 6.3 Framer Motion Variants (JavaScript)

```typescript
// Animation presets for Framer Motion
export const motionTokens = {
  // Apple-like fade up on scroll
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Staggered children (list items, cards)
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },

  // Scale on hover (cards)
  hoverScale: {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Smooth page transition
  pageTransition: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 1, 1],
      },
    },
  },

  // Nav indicator line (Brittany Chiang style)
  navIndicator: {
    inactive: { width: 32, opacity: 0.5 },
    active: {
      width: 64,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  },

  // Status dot pulse
  statusPulse: {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
} as const;
```

### 6.4 CSS Animation Keyframes

```css
/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Keyframes */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(16px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.15); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes skeleton-loading {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 7. Breakpoints

```css
:root {
  /* Mobile-first breakpoints */
  --bp-sm:   640px;    /* Small phones → large phones */
  --bp-md:   768px;    /* Phones → tablets */
  --bp-lg:   1024px;   /* Tablets → desktop (split layout kicks in) */
  --bp-xl:   1280px;   /* Desktop → wide desktop */
  --bp-2xl:  1536px;   /* Wide desktop */
}
```

```scss
// SCSS mixins (if using)
@mixin sm  { @media (min-width:  640px) { @content; } }
@mixin md  { @media (min-width:  768px) { @content; } }
@mixin lg  { @media (min-width: 1024px) { @content; } }
@mixin xl  { @media (min-width: 1280px) { @content; } }
@mixin 2xl { @media (min-width: 1536px) { @content; } }
```

---

## 8. Z-Index Scale

```css
:root {
  --z-below:     -1;
  --z-base:       0;
  --z-raised:     1;
  --z-dropdown:   10;
  --z-sticky:     20;
  --z-fixed:      30;
  --z-nav:        40;
  --z-overlay:    50;
  --z-modal:      60;
  --z-popover:    70;
  --z-toast:      80;
  --z-tooltip:    90;
  --z-max:        100;
}
```

---

## 9. Component Token Mapping

### 9.1 Navbar (Glass Capsule)

```css
.navbar {
  background: var(--surface-glass);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: var(--border-thin) solid var(--surface-glass-border);
  border-radius: var(--radius-full);
  height: var(--nav-height);
  box-shadow: var(--shadow-glass);
  z-index: var(--z-nav);
}
```

### 9.2 Blog Card

```css
.blog-card {
  background: var(--surface-elevated);
  border: var(--border-thin) solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--card-padding);
  transition: all var(--duration-hover) var(--ease-apple);
}

.blog-card:hover {
  border-color: var(--border-brand);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### 9.3 Tech Pill / Tag

```css
.tech-pill {
  background: var(--bg-brand);
  color: var(--fg-brand);
  border: var(--border-thin) solid var(--color-brand-200);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}
```

### 9.4 Status Badge

```css
.status-badge {
  background: var(--status-success-bg);
  color: var(--status-success-text);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1.5);
}

.status-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--status-success-dot);
  animation: pulse-dot 2s ease-in-out infinite;
}
```

### 9.5 Focus Ring

```css
*:focus-visible {
  outline: var(--border-medium) solid var(--border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* For buttons with their own border-radius */
.btn:focus-visible {
  box-shadow: var(--shadow-focus);
  outline: none;
}
```

---

## 10. Tailwind CSS Integration

> These tokens map to a custom Tailwind theme in `tailwind.config.ts`:

```typescript
// tailwind.config.ts (excerpt)
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Semantic color aliases
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          brand: 'var(--bg-brand)',
        },
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
          tertiary: 'var(--fg-tertiary)',
          brand: 'var(--fg-brand)',
        },
        border: {
          DEFAULT: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
          brand: 'var(--border-brand)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        card: 'var(--radius-lg)',
        pill: 'var(--radius-full)',
      },
      transitionTimingFunction: {
        apple: 'var(--ease-apple)',
        'apple-fast': 'var(--ease-apple-fast)',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s var(--ease-apple) forwards',
      },
    },
  },
} satisfies Config
```

---

## Token Quick Reference Card

| Token Category | Light | Dark |
|---|---|---|
| **Page Background** | `#FFFFFF` | `#0A0A0B` |
| **Card Background** | `#FFFFFF` | `#1A1A1B` |
| **Heading Text** | `#111827` | `#F9FAFB` |
| **Body Text** | `#374151` | `#D1D5DB` |
| **Muted Text** | `#6B7280` | `#9CA3AF` |
| **Brand Accent** | `#059669` | `#34D399` |
| **Brand Tint BG** | `#ECFDF5` | `rgba(16,185,129,0.1)` |
| **Border** | `#E5E7EB` | `rgba(255,255,255,0.1)` |
| **Success** | `#059669` | `#34D399` |
| **Glass BG** | `rgba(255,255,255,0.72)` | `rgba(20,20,21,0.72)` |

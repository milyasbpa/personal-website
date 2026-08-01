---
name: seo-system
description: Implement SEO best practices for the "bas." portfolio website. Handles meta tags, Open Graph, structured data (JSON-LD), sitemap, robots.txt, RSS feed, and dynamic OG image generation.
---

# SEO System Skill

## Context
The "bas." portfolio will be deployed on Vercel (*.vercel.app initially, custom domain later). All pages need proper SEO implementation to ensure discoverability.

## Page-Level Metadata

```typescript
// src/app/layout.tsx — Root metadata
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://bas-portfolio.vercel.app'),
  title: {
    default: 'bas. — Ilyas Bashirah | Frontend Developer',
    template: '%s | bas.',
  },
  description: 'Frontend developer crafting interfaces with intention. Writing about React, TypeScript, CSS, and learning Japanese.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'bas.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ilyasbashirah',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

## Structured Data (JSON-LD)

### Person Schema (Home page)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ilyas Bashirah",
  "url": "https://bas-portfolio.vercel.app",
  "jobTitle": "Frontend Developer",
  "sameAs": [
    "https://github.com/milyasbpa",
    "https://linkedin.com/in/ilyasbashirah"
  ]
}
```

### BlogPosting Schema (Blog posts)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "datePublished": "2026-07-30",
  "author": {
    "@type": "Person",
    "name": "Ilyas Bashirah"
  }
}
```

## Sitemap & Robots

### sitemap.ts
```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bas-portfolio.vercel.app'
  
  // Static pages
  const staticPages = ['', '/blog', '/learning'].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  
  // Dynamic blog posts
  const blogPosts = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...blogPosts]
}
```

### robots.ts
```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bas-portfolio.vercel.app/sitemap.xml',
  }
}
```

## Dynamic OG Images
Use `@vercel/og` (Satori) to generate dynamic OG images per blog post.

## RSS Feed
Generate `/feed.xml` at build time for blog subscribers.

## SEO Checklist per Page
- [ ] Unique `<title>` tag
- [ ] Meta description (< 160 chars)
- [ ] OG image (1200x630)
- [ ] Canonical URL
- [ ] Proper heading hierarchy (single H1)
- [ ] All images have alt text
- [ ] Semantic HTML elements used
- [ ] JSON-LD structured data

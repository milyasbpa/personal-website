---
name: blog-system
description: Setup and manage the MDX-based blog system for the "bas." portfolio. Handles MDX pipeline, content processing, syntax highlighting, blog listing, individual posts, RSS feed, and custom MDX components.
---

# Blog System Skill

## Context
The "bas." portfolio has a blog system powered by MDX. Blog posts are stored as `.mdx` files in `src/content/blog/`. The system supports code syntax highlighting, table of contents generation, reading time calculation, and tag-based filtering.

## Blog Post Structure

### Frontmatter Schema

```yaml
---
title: "Building a Design System from Scratch"
description: "How I built the design token system for my portfolio."
date: "2026-07-30"
tags: ["frontend", "css", "design-system"]
published: true
featured: false
image: "/images/blog/design-system-cover.jpg" # optional
---
```

### Content Categories
- `frontend` — React, CSS, JavaScript, TypeScript, Next.js
- `japanese` — 日本語 learning notes, JLPT study, kanji
- `insights` — Industry trends, career thoughts, tool reviews
- `productivity` — Workflow, learning methods, book reviews

## MDX Pipeline

### Option A: next-mdx-remote (Recommended)
```typescript
// src/lib/mdx.ts
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
```

### Plugins
1. `remark-gfm` — GitHub Flavored Markdown (tables, strikethrough)
2. `rehype-pretty-code` — Syntax highlighting with Shiki
3. `rehype-slug` — Add IDs to headings (for TOC)
4. `rehype-autolink-headings` — Auto-link headings
5. `reading-time` — Calculate reading time from content

## Custom MDX Components

```typescript
// src/components/blog/MDXComponents.tsx
const mdxComponents = {
  // Custom callout/alert box
  Callout: ({ type, children }) => (/* ... */),
  
  // Embedded chart (for learning posts)
  Chart: ({ data, type }) => (/* ... */),
  
  // Code block with copy button
  pre: ({ children }) => (/* ... */),
  
  // Image with caption
  Image: ({ src, alt, caption }) => (/* ... */),
  
  // Japanese vocabulary card
  Vocab: ({ kanji, reading, meaning }) => (/* ... */),
}
```

## Blog Listing Features
1. All posts sorted by date (newest first)
2. Tag filter pills (All, Frontend, Japanese, Insights, Productivity)
3. Blog card: title, date, reading time, tags, excerpt
4. Pagination or infinite scroll (if many posts)

## Individual Post Features
1. Back navigation link
2. Post header: title, date, reading time, tags
3. Table of Contents (auto-generated from headings)
4. Reading progress bar (thin line at top)
5. Previous/Next post navigation
6. Share links (optional)

## File Organization

```
src/content/blog/
├── building-design-system.mdx
├── react-patterns-2026.mdx
├── learning-japanese-n3.mdx
└── my-development-workflow.mdx
```

## Rules
1. All blog posts must have valid frontmatter
2. Posts with `published: false` should not appear in production
3. Code blocks must have language specified for syntax highlighting
4. Images in blog posts use `next/image` with proper alt text
5. Blog URLs: `/blog/[slug]` where slug = filename without extension

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'

const NAV_LINKS = [
  { id: 'about',      label: 'About',      sub: '5+ yrs · React & TS',   meta: 'Stack'      },
  { id: 'experience', label: 'Experience', sub: '3 companies',            meta: '2019–now'   },
  { id: 'writing',    label: 'Writing',    sub: '3 published posts',      meta: 'Blog'       },
  { id: 'now',        label: 'Self Exploration', sub: 'What I\'m working on', meta: 'Jul 2026' },
  { id: 'contact',    label: 'Contact',    sub: 'Open to opportunities',  meta: 'Hire me'    },
]

const TECH_PILLS = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']

const EXPERIENCE = [
  {
    company: 'Vercel',
    url: '#',
    role: 'Senior Frontend Engineer',
    dates: 'Jan 2023 — Present',
    location: 'Remote · San Francisco, CA',
    desc: 'Building the Next.js App Router DX and developer-facing dashboard tooling used by 1M+ developers globally.',
    fullDesc: 'As a Senior Frontend Engineer at Vercel, I work at the intersection of developer experience and product engineering — owning the App Router documentation tooling, internal component libraries, and the Vercel Dashboard used by over a million developers worldwide. I collaborate closely with the Next.js core team to ship features that shape how modern web apps are built.',
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
    fullDesc: 'At Linear, I worked on one of the fastest and most keyboard-native project management tools in the industry. My focus was on real-time collaboration infrastructure, virtual rendering performance, and crafting the interaction design that Linear is known for — snappy, opinionated, and zero-friction.',
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
    fullDesc: 'At Shopify I started my career on the Checkout team, contributing to one of the highest-traffic, highest-stakes frontend surfaces on the web. I later moved to the Polaris design system team, where I helped shape the component library used by thousands of internal and external developers building on Shopify.',
    points: [
      'Shipped accessible, responsive UI components for the checkout flow — serving 500M+ transactions annually.',
      'Contributed 12 new components to Polaris (Shopify\'s design system) including DataTable, DatePicker, and Tooltip variants.',
      'Wrote comprehensive accessibility audits (WCAG 2.1 AA) for the merchant admin, fixing 40+ violations.',
      'Built an automated component documentation generator using AST parsing — eliminated manual doc maintenance.',
      'Participated in the Great Storefront Migration (Liquid → React) as part of a 15-engineer cross-functional squad.',
    ],
    tech: ['React', 'Ruby on Rails', 'Sass', 'GraphQL'],
  },
]

const POSTS = [
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
]

const NOW_ITEMS = [
  'Architecting a design system with Storybook 8 and CVA — targeting zero runtime overhead.',
  'Building a Japanese vocabulary app (日本語学習アプリ) as a side project and learning tool.',
  'Contributing to open-source Next.js middleware patterns and App Router edge caching.',
]

const HEATMAP_LEVELS_LIGHT = ['#F3F4F6', '#ECFDF5', '#A7F3D0', '#10B981', '#059669']
const HEATMAP_LEVELS_DARK = ['#1F2937', '#064E3B', '#065F46', '#059669', '#34D399']

function generateHeatmap() {
  return Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  )
}
const heatmapData = generateHeatmap()


const IconSun = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
  </svg>
)

const IconMoon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const IconGithub = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const IconLinkedin = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const IconArrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

type ExperienceItem = typeof EXPERIENCE[number]

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' } catch { return false }
  })
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [drawerJob, setDrawerJob] = useState<ExperienceItem | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  useEffect(() => {
    document.body.style.overflow = drawerJob ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerJob])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawerJob(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const levels = dark ? HEATMAP_LEVELS_DARK : HEATMAP_LEVELS_LIGHT

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-body)' }} className="min-h-screen transition-colors duration-300">

      {/* ── DESKTOP HEADER ── */}
      <div
        style={{
          backgroundColor: 'var(--bg)',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
          transition: 'box-shadow 0.2s ease',
        }}
        className="hidden lg:flex items-center justify-end sticky top-0 z-30 w-full h-14"
      >
        <div className="w-full max-w-5xl mx-auto px-8 flex justify-end">
        <button
          onClick={() => setDark(!dark)}
          style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
          className="w-8 h-8 flex items-center justify-center rounded-full border transition-all hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Toggle theme"
        >
          {dark ? <IconSun /> : <IconMoon />}
        </button>
        </div>
      </div>

      {/* ── MOBILE HEADER ── */}
      <header
        style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--border)' }}
        className="lg:hidden sticky top-0 z-50 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between"
      >
        <span style={{ color: 'var(--accent)' }} className="font-mono font-bold text-xl tracking-tight">bas.</span>
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
            className="w-9 h-9 flex items-center justify-center rounded-full border transition-all hover:scale-105"
            aria-label="Toggle theme"
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex flex-col gap-1.5 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span style={{ backgroundColor: 'var(--fg)' }} className={`block w-5 h-0.5 transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span style={{ backgroundColor: 'var(--fg)' }} className={`block w-5 h-0.5 transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span style={{ backgroundColor: 'var(--fg)' }} className={`block w-5 h-0.5 transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--bg)' }} className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ color: 'var(--fg)' }}
              className="text-2xl font-medium hover:text-[var(--accent)] transition-colors">
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── LAYOUT ── */}
      <div className="max-w-5xl mx-auto lg:flex">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="hidden lg:flex lg:flex-col lg:sticky lg:top-14 lg:h-[calc(100vh-56px)] lg:w-[46%] lg:py-12 lg:pl-8 lg:pr-12">

          <div className="flex items-center gap-4 mb-5">
            <div className="relative w-[72px] h-[72px] flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden"
                style={{ border: '2px solid var(--accent-border)' }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=144&h=144&fit=crop&auto=format"
                  alt="Ilyas Bashirah"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* ping ripple */}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 flex items-center justify-center">
                <span className="ping absolute inline-flex w-full h-full rounded-full opacity-60"
                  style={{ backgroundColor: 'var(--accent)' }} />
                <span className="relative inline-flex w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', border: '2px solid var(--bg)' }} />
              </span>
            </div>
            <div>
              <h1 style={{ color: 'var(--fg)' }} className="text-2xl font-bold tracking-tight leading-tight">
                Ilyas Bashirah
              </h1>
              <p style={{ color: 'var(--fg-subtle)' }} className="text-xs mt-0.5">
                Call me <span style={{ color: 'var(--accent)' }} className="font-mono font-semibold">bas.</span>
              </p>
            </div>
          </div>

          <p style={{ color: 'var(--fg-body)' }} className="text-[15px] leading-relaxed mb-1">
            Crafting interfaces with intention.
          </p>
          <p style={{ color: 'var(--fg-muted)' }} className="text-xs leading-relaxed max-w-xs">
            Senior frontend engineer — design systems, performance, DX.
            Also studying 日本語 (JLPT N5).
          </p>

          {/* MIDDLE — nav */}
          <nav className="flex-1 flex flex-col justify-center py-4">
            {NAV_LINKS.map(({ id, label, sub, meta }) => {
              const active = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="group relative flex items-center justify-between py-2 px-0 text-left w-full transition-all duration-200"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  {/* left accent bar */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-300"
                    style={{
                      height: active ? '18px' : '0px',
                      backgroundColor: 'var(--accent)',
                    }}
                  />

                  {/* left — label + sub */}
                  <div className="pl-4">
                    <span
                      className="block text-sm transition-all duration-200 leading-tight"
                      style={{
                        color: active ? 'var(--fg)' : 'var(--fg-muted)',
                        fontWeight: active ? 600 : 400,
                        transform: active ? 'translateX(2px)' : 'translateX(0)',
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className="block text-[11px] font-mono mt-0.5 transition-colors duration-200"
                      style={{ color: active ? 'var(--accent)' : 'var(--fg-subtle)' }}
                    >
                      {sub}
                    </span>
                  </div>

                  {/* right — meta tag */}
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full transition-all duration-300"
                    style={{
                      color: active ? 'var(--accent)' : 'var(--fg-subtle)',
                      backgroundColor: active ? 'var(--accent-light)' : 'transparent',
                      border: `1px solid ${active ? 'var(--accent-border)' : 'transparent'}`,
                    }}
                  >
                    {meta}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* BOTTOM — footer */}
          <div className="flex items-center justify-between gap-2">
            <p style={{ color: 'var(--fg-subtle)' }} className="text-[10px] font-mono leading-tight">
              © 2026 <span style={{ color: 'var(--accent)' }} className="font-semibold">bas.</span><br />
              Built with Next.js
            </p>
            <div className="flex items-center gap-1.5">
              {[
                { label: 'GitHub', href: '#', icon: <IconGithub /> },
                { label: 'LinkedIn', href: '#', icon: <IconLinkedin /> },
                { label: 'Email', href: 'mailto:ilyas@bas.dev', icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg> },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)' }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border hover:text-[var(--accent)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-light)] transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* ── RIGHT CONTENT ── */}
        <main className="lg:w-[54%] px-6 lg:pl-8 lg:pr-8 py-10 lg:py-12 flex flex-col gap-14">

          {/* Mobile hero */}
          <div className="lg:hidden">
            <div className="flex items-center gap-3 mb-5">
              <span
                style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border"
              >
                <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: 'var(--accent)' }} />
                Available for Work
              </span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden" style={{ border: '2px solid var(--accent-border)' }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&auto=format" alt="Ilyas Bashirah" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
              <div>
                <h1 style={{ color: 'var(--fg)' }} className="text-2xl font-bold tracking-tight">Ilyas Bashirah</h1>
                <span style={{ color: 'var(--accent)' }} className="font-mono font-bold text-sm">bas.</span>
              </div>
            </div>
            <p style={{ color: 'var(--fg-body)' }} className="text-base leading-relaxed mb-5">
              Crafting interfaces with intention. Senior frontend engineer focused on design systems and performance.
            </p>
            {/* Mobile social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'GitHub', href: '#', icon: <IconGithub /> },
                { label: 'LinkedIn', href: '#', icon: <IconLinkedin /> },
                { label: 'Email', href: 'mailto:ilyas@bas.dev', icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg> },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent-border)' }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border hover:scale-105 transition-transform">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <section id="about" ref={(el) => { sectionRefs.current.about = el }}>
            <p style={{ color: 'var(--fg-muted)' }} className="text-xs uppercase tracking-widest mb-6 font-mono">About</p>
            <div className="text-[15px] leading-relaxed space-y-4 mb-8" style={{ color: 'var(--fg-body)' }}>
              <p>
                I'm a frontend engineer with 5+ years building production interfaces for developer tools,
                design systems, and SaaS products. I care deeply about the intersection of{' '}
                <span style={{ color: 'var(--accent)' }} className="font-medium">design and engineering</span>{' '}
                — where a well-typed component system meets a thoughtful interaction model.
              </p>
              <p>
                My work spans{' '}
                <span style={{ color: 'var(--accent)' }} className="font-medium">React</span>,{' '}
                <span style={{ color: 'var(--accent)' }} className="font-medium">TypeScript</span>, and{' '}
                <span style={{ color: 'var(--accent)' }} className="font-medium">Next.js</span>{' '}
                at scale — with a focus on accessibility, performance, and composability.
                I also study <span style={{ color: 'var(--accent)' }} className="font-medium">日本語 (Japanese)</span> — working toward JLPT N5.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_PILLS.map((tech) => (
                <span key={tech}
                  style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}
                  className="px-3 py-1 text-xs font-medium rounded-full border font-mono cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" ref={(el) => { sectionRefs.current.experience = el }}>
            <p style={{ color: 'var(--fg-muted)' }} className="text-xs uppercase tracking-widest mb-6 font-mono">Experience</p>
            <div className="flex flex-col gap-4">
              {EXPERIENCE.map((job) => (
                <button key={job.company} onClick={() => setDrawerJob(job)}
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  className="group w-full text-left p-6 rounded-xl border hover:border-[var(--accent-border)] hover:bg-[var(--bg-hover)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-1 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)' }} />
                      <span style={{ color: 'var(--fg)' }} className="font-semibold text-base group-hover:text-[var(--accent)] transition-colors">
                        {job.company}
                      </span>
                    </div>
                    <span style={{ color: 'var(--fg-subtle)' }} className="text-xs whitespace-nowrap font-mono">{job.dates}</span>
                  </div>
                  <p style={{ color: 'var(--fg-body)' }} className="text-sm font-medium ml-4 mb-3">{job.role}</p>
                  <p style={{ color: 'var(--fg-muted)' }} className="text-sm leading-relaxed ml-4 mb-4">{job.desc}</p>
                  <div className="flex items-center justify-between ml-4 gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <span key={t}
                          style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}
                          className="px-2 py-0.5 text-xs font-medium rounded-full border font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{ color: 'var(--fg-muted)' }}
                      className="flex items-center gap-1.5 text-xs font-mono font-medium underline underline-offset-2 flex-shrink-0 group-hover:gap-2 group-hover:text-[var(--accent)] transition-all duration-200"
                    >
                      Full story
                      <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)' }}
              className="mt-6 w-full flex items-center justify-between px-5 py-4 rounded-xl border hover:border-[var(--accent-border)] hover:text-[var(--fg)] transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <p style={{ color: 'var(--fg)' }} className="text-sm font-medium leading-none">Get my full resume</p>
                  <p style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono mt-1">PDF · Updated Jul 2026</p>
                </div>
              </div>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                style={{ color: 'var(--fg-subtle)' }}
                className="group-hover:text-[var(--accent)] group-hover:translate-y-0.5 transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </section>

          {/* WRITING */}
          <section id="writing" ref={(el) => { sectionRefs.current.writing = el }}>
            <p style={{ color: 'var(--fg-muted)' }} className="text-xs uppercase tracking-widest mb-6 font-mono">Writing</p>
            <div className="flex flex-col gap-4">
              {POSTS.map((post) => (
                <Link key={post.slug} to={`/writing/${post.slug}`}
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  className="group p-6 rounded-xl border hover:border-[var(--accent-border)] hover:bg-[var(--bg-hover)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 style={{ color: 'var(--fg)' }} className="font-semibold text-base mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono">{post.date}</span>
                      <span style={{ color: 'var(--fg-subtle)' }} className="text-xs">·</span>
                      <span style={{ color: 'var(--fg-subtle)' }} className="text-xs">{post.read}</span>
                      <span
                        style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}
                        className="px-2 py-0.5 text-xs font-medium rounded-full border font-mono"
                      >
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  <span style={{ color: 'var(--fg-subtle)' }} className="mt-1 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all flex-shrink-0">
                    <IconArrow size={15} />
                  </span>
                </Link>
              ))}
            </div>
            <Link to="/writing" style={{ color: 'var(--accent)' }} className="inline-flex items-center gap-1.5 text-sm font-medium mt-5 hover:gap-2.5 transition-all">
              View all writing <IconArrow size={13} />
            </Link>
          </section>

          {/* NOW */}
          <section id="now" ref={(el) => { sectionRefs.current.now = el }}>
            <p style={{ color: 'var(--fg-muted)' }} className="text-xs uppercase tracking-widest mb-1 font-mono">Self Exploration</p>
            <p style={{ color: 'var(--fg-subtle)' }} className="text-xs mb-6">What I'm currently working on</p>

            <div style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }} className="p-6 rounded-xl border mb-4">
              <h3 style={{ color: 'var(--fg)' }} className="text-sm font-semibold mb-4">Currently Working On</h3>
              <ul className="space-y-3">
                {NOW_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--fg-body)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }} className="p-6 rounded-xl border mb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 style={{ color: 'var(--fg)' }} className="text-sm font-semibold">GitHub Activity</h3>
                  <p style={{ color: 'var(--fg-subtle)' }} className="text-xs mt-0.5">Contribution graph across personal & open-source projects</p>
                </div>
              </div>
              <div className="overflow-x-auto bg-transparent">
                <div className="flex gap-[3px] min-w-max">
                  {heatmapData.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((level, di) => (
                        <div key={di} className="w-[10px] h-[10px] rounded-[2px] hover:opacity-70 transition-opacity"
                          style={{ backgroundColor: levels[level] }} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end gap-1.5 mt-3">
                <span style={{ color: 'var(--fg-subtle)' }} className="text-[10px] font-mono">Less</span>
                {levels.map((c, i) => <div key={i} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: c }} />)}
                <span style={{ color: 'var(--fg-subtle)' }} className="text-[10px] font-mono">More</span>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }} className="p-6 rounded-xl border">
              <h3 style={{ color: 'var(--fg)' }} className="text-sm font-semibold mb-4">Language</h3>
              <div className="flex flex-col gap-3">
                {[
                  { flag: '🇺🇸', lang: 'English', native: 'English', level: 'Professional', levelDesc: 'Full professional proficiency' },
                  { flag: '🇯🇵', lang: 'Japanese', native: '日本語', level: 'Learning · N5', levelDesc: 'Beginner — actively studying' },
                ].map(({ flag, lang, native, level, levelDesc }) => (
                  <div key={lang} className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-2.5">
                      <span className="text-base leading-none mt-0.5">{flag}</span>
                      <div>
                        <p style={{ color: 'var(--fg)' }} className="text-sm font-medium leading-none">{lang} <span style={{ color: 'var(--fg-subtle)' }} className="font-mono text-xs ml-1">{native !== lang ? native : ''}</span></p>
                        <p style={{ color: 'var(--fg-subtle)' }} className="text-xs mt-1">{levelDesc}</p>
                      </div>
                    </div>
                    <span
                      style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent-border)' }}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border flex-shrink-0"
                    >
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </section>


          {/* CONTACT */}
          <section id="contact" ref={(el) => { sectionRefs.current.contact = el }}>
            <p style={{ color: 'var(--fg-muted)' }} className="text-xs uppercase tracking-widest mb-1 font-mono">Contact</p>
            <p style={{ color: 'var(--fg-subtle)' }} className="text-xs mb-6">Get in touch — I'd love to hear from you</p>

            {submitted ? (
              <div style={{ backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent-border)' }} className="p-8 rounded-xl border text-center">
                <span className="text-3xl mb-3 block">✓</span>
                <h3 style={{ color: 'var(--accent)' }} className="font-semibold text-lg mb-1">Message sent!</h3>
                <p style={{ color: 'var(--fg-body)' }} className="text-sm">Thanks for reaching out. I'll reply within a day or two.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                className="p-6 rounded-xl border space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label style={{ color: 'var(--fg-body)' }} className="text-xs font-medium mb-1.5 block capitalize font-mono">{field}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        value={contactForm[field]}
                        onChange={(e) => setContactForm({ ...contactForm, [field]: e.target.value })}
                        placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--fg)' }}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-all"
                        onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-light)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ color: 'var(--fg-body)' }} className="text-xs font-medium mb-1.5 block font-mono">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="What's on your mind?"
                    style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--fg)' }}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none resize-none transition-all"
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-light)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: 'var(--accent)' }}
                  className="w-full py-2.5 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </section>

        </main>
      </div>

      {/* Experience Drawer */}
      {drawerJob && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }}
            onClick={() => setDrawerJob(null)}
          />
          {/* Drawer panel */}
          <div
            className="fixed top-0 right-0 h-full z-50 flex flex-col overflow-hidden"
            style={{
              width: 'min(520px, 100vw)',
              backgroundColor: 'var(--bg)',
              borderLeft: '1px solid var(--border)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
              animation: 'drawer-in 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards',
            }}
          >
            {/* Drawer header */}
            <div className="flex items-start justify-between p-6 pb-5 flex-shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                  <h2 style={{ color: 'var(--fg)' }} className="text-xl font-bold">{drawerJob.company}</h2>
                </div>
                <p style={{ color: 'var(--accent)' }} className="text-sm font-medium ml-4">{drawerJob.role}</p>
                <p style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono ml-4 mt-1">{drawerJob.dates} · {drawerJob.location}</p>
              </div>
              <button
                onClick={() => setDrawerJob(null)}
                style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                className="w-8 h-8 flex items-center justify-center rounded-lg border hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all flex-shrink-0"
                aria-label="Close"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Overview */}
              <div className="mb-8">
                <p style={{ color: 'var(--fg-muted)' }} className="text-xs font-mono uppercase tracking-widest mb-3">Overview</p>
                <p style={{ color: 'var(--fg-body)' }} className="text-sm leading-[1.8]">{drawerJob.fullDesc}</p>
              </div>

              {/* What I worked on */}
              <div className="mb-8">
                <p style={{ color: 'var(--fg-muted)' }} className="text-xs font-mono uppercase tracking-widest mb-4">What I worked on</p>
                <ul className="flex flex-col gap-3">
                  {drawerJob.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: 'var(--accent)' }} />
                      <p style={{ color: 'var(--fg-body)' }} className="text-sm leading-[1.75]">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <p style={{ color: 'var(--fg-muted)' }} className="text-xs font-mono uppercase tracking-widest mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {drawerJob.tech.map((t) => (
                    <span key={t}
                      style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}
                      className="px-3 py-1 text-xs font-medium rounded-full border font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { ARTICLES } from '../data/articles'

const IconArrow = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

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

const PAGE_SIZE = 3

export default function WritingList() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' } catch { return false }
  })
  const [page, setPage] = useState(1)

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', dark)
    } catch {}
    window.scrollTo(0, 0)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-body)', minHeight: '100vh' }}>
      {/* Top nav */}
      <header
        style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 80%, transparent)', borderColor: 'var(--border)' }}
        className="sticky top-0 z-50 backdrop-blur-md border-b"
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)' }} className="w-8 h-8 flex items-center justify-center rounded-lg border hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all" aria-label="Home">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono hidden sm:block">
              {ARTICLES.length} posts
            </span>
            <button
              onClick={toggleDark}
              style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 style={{ color: 'var(--fg)' }} className="text-4xl font-bold tracking-tight mb-3">
            Writing
          </h1>
          <p style={{ color: 'var(--fg-muted)' }} className="text-base leading-relaxed max-w-lg">
            Thoughts on frontend engineering, design systems, and the craft of building interfaces.
            Published when I have something worth saying.
          </p>
        </div>

        {/* Article list */}
        <div className="flex flex-col">
          {ARTICLES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((article, i, arr) => (
            <Link
              key={article.slug}
              to={`/writing/${article.slug}`}
              className="group"
              style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              <div className="py-8 flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  {/* Tag + date row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent-border)' }}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-full border"
                    >
                      {article.tag}
                    </span>
                    <span style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono">{article.date}</span>
                    <span style={{ color: 'var(--fg-subtle)' }} className="text-xs">·</span>
                    <span style={{ color: 'var(--fg-subtle)' }} className="text-xs">{article.read}</span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{ color: 'var(--fg)' }}
                    className="text-xl font-semibold leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{ color: 'var(--fg-muted)' }} className="text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  style={{ color: 'var(--fg-subtle)' }}
                  className="mt-1 flex-shrink-0 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
                >
                  <IconArrow />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {Math.ceil(ARTICLES.length / PAGE_SIZE) > 1 && (
          <div className="flex items-center justify-center gap-1 mt-8">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', opacity: page === 1 ? 0.35 : 1 }}
              className="w-8 h-8 flex items-center justify-center rounded-lg border text-xs hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            {Array.from({ length: Math.ceil(ARTICLES.length / PAGE_SIZE) }, (_, i) => i + 1).map((p) => (
              <button key={p}
                onClick={() => setPage(p)}
                style={{
                  color: p === page ? '#fff' : 'var(--fg-muted)',
                  backgroundColor: p === page ? 'var(--accent)' : 'transparent',
                  borderColor: p === page ? 'var(--accent)' : 'var(--border)',
                }}
                className="w-8 h-8 flex items-center justify-center rounded-lg border text-xs font-mono transition-all hover:border-[var(--accent-border)]"
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(Math.ceil(ARTICLES.length / PAGE_SIZE), p + 1))}
              disabled={page === Math.ceil(ARTICLES.length / PAGE_SIZE)}
              style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', opacity: page === Math.ceil(ARTICLES.length / PAGE_SIZE) ? 0.35 : 1 }}
              className="w-8 h-8 flex items-center justify-center rounded-lg border text-xs hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono text-center">
            © 2026 <span style={{ color: 'var(--accent)' }} className="font-semibold">bas.</span>
          </p>
        </div>
      </main>
    </div>
  )
}

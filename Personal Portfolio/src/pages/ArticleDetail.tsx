import { Link, useParams } from 'react-router'
import { getArticle, ARTICLES } from '../data/articles'
import { useState, useEffect, ReactNode } from 'react'

function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split('\n')
  const elements: ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
          className="text-2xl font-bold mt-12 mb-4 pb-3 border-b">
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} style={{ color: 'var(--fg)' }} className="text-lg font-semibold mt-8 mb-3">
          {line.slice(4)}
        </h3>
      )
      i++
      continue
    }

    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++
      elements.push(<CodeBlock key={key++} lang={lang} code={codeLines.join('\n')} />)
      continue
    }

    if (line.trim() === '') {
      i++
      continue
    }

    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('```')
    ) {
      paraLines.push(lines[i])
      i++
    }
    if (paraLines.length > 0) {
      elements.push(<Paragraph key={key++} text={paraLines.join(' ')} />)
    }
  }

  return <div>{elements}</div>
}

function Paragraph({ text }: { text: string }) {
  // Handle inline code (`...`) and bold (**...**)
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/)
  return (
    <p style={{ color: 'var(--fg-body)' }} className="text-base leading-[1.85] mb-5">
      {parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent-border)' }}
              className="px-1.5 py-0.5 rounded text-[13px] font-mono border">
              {part.slice(1, -1)}
            </code>
          )
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} style={{ color: 'var(--fg)' }} className="font-semibold">{part.slice(2, -2)}</strong>
        }
        return <span key={i}>{part}</span>
      })}
    </p>
  )
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-7 rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      {/* Header bar */}
      <div
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        className="flex items-center justify-between px-4 py-2.5 border-b"
      >
        <span style={{ color: 'var(--fg-subtle)' }} className="text-[11px] font-mono">{lang || 'code'}</span>
        <button
          onClick={copy}
          style={{ color: copied ? 'var(--accent)' : 'var(--fg-subtle)', borderColor: 'var(--border)' }}
          className="text-[11px] font-mono px-2.5 py-1 rounded border hover:border-[var(--accent-border)] transition-all"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      {/* Code */}
      <pre
        style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-body)' }}
        className="p-5 overflow-x-auto text-[13px] leading-relaxed font-mono"
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticle(slug ?? '')
  const [scrollPct, setScrollPct] = useState(0)
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' } catch { return false }
  })

  useEffect(() => {
    try { document.documentElement.classList.toggle('dark', dark) } catch {}
    window.scrollTo(0, 0)
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(Math.min(100, pct))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  if (!article) {
    return (
      <div style={{ backgroundColor: 'var(--bg)' }} className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: 'var(--fg-muted)' }} className="text-sm font-mono mb-4">Article not found</p>
          <Link to="/writing" style={{ color: 'var(--accent)' }} className="text-sm font-medium">← Back to writing</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-body)', minHeight: '100vh' }}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60]" style={{ backgroundColor: 'var(--border)' }}>
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${scrollPct}%`, backgroundColor: 'var(--accent)' }}
        />
      </div>

      {/* Top nav */}
      <header
        style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 80%, transparent)', borderColor: 'var(--border)' }}
        className="sticky top-0.5 z-50 backdrop-blur-md border-b"
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)' }} className="w-8 h-8 flex items-center justify-center rounded-lg border hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all" aria-label="Home">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono hidden sm:block">{article.read}</span>
            <button
              onClick={() => {
                const next = !dark
                setDark(next)
                document.documentElement.classList.toggle('dark', next)
                try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
              }}
              style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {dark
                ? <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" /></svg>
                : <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              }
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14">
        {/* Back link */}
        <Link to="/writing" style={{ color: 'var(--fg-muted)' }} className="inline-flex items-center gap-1.5 text-xs font-mono mb-8 hover:text-[var(--accent)] transition-colors">
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to writing
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
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

          <h1 style={{ color: 'var(--fg)' }} className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-5">
            {article.title}
          </h1>

          <p style={{ color: 'var(--fg-muted)' }} className="text-base leading-relaxed mb-8 max-w-xl">
            {article.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0" style={{ border: '1.5px solid var(--accent-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&auto=format"
                alt="Ilyas Bashirah"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <p style={{ color: 'var(--fg)' }} className="text-sm font-semibold leading-none">Ilyas Bashirah</p>
              <p style={{ color: 'var(--accent)' }} className="text-xs font-mono mt-0.5">bas.</p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article>
          <ArticleContent content={article.content} />
        </article>

        {/* More articles */}
        {(() => {
          const currentIdx = ARTICLES.findIndex(a => a.slug === article.slug)
          const others = ARTICLES.filter((_, i) => i !== currentIdx).slice(0, 2)
          if (others.length === 0) return null
          return (
            <div className="mt-16 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono uppercase tracking-widest mb-6">
                More from bas.
              </p>
              <div className="flex flex-col gap-4">
                {others.map(other => (
                  <Link
                    key={other.slug}
                    to={`/writing/${other.slug}`}
                    className="group flex items-start justify-between gap-4 p-5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)'
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-card)'
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent-border)' }}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-full border">
                          {other.tag}
                        </span>
                        <span style={{ color: 'var(--fg-subtle)' }} className="text-xs font-mono">{other.read}</span>
                      </div>
                      <h3 style={{ color: 'var(--fg)' }}
                        className="text-sm font-semibold leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {other.title}
                      </h3>
                    </div>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                      style={{ color: 'var(--fg-subtle)' }}
                      className="flex-shrink-0 mt-1 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}
      </main>
    </div>
  )
}

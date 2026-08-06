import React from 'react';

export interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/milyasbpa' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ilyas-arya-181a7a184/' },
  { label: 'Twitter / X', href: 'https://x.com/milyasbpa' },
  { label: 'Email', href: 'mailto:bashirahilyas@gmail.com' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="font-mono">
            © {currentYear} <span className="font-semibold text-zinc-900 dark:text-zinc-100">Ilyas Bashirah (bas.)</span>
          </p>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">/</span>
          <p className="text-xs">
            Built with <span className="text-[#00AB6B] dark:text-[#00BF71] font-medium">Next.js 16</span> &amp; <span className="text-[#00AB6B] dark:text-[#00BF71] font-medium">Tailwind CSS</span>
          </p>
        </div>

        <nav aria-label="Footer Social Links" className="flex items-center gap-6">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium hover:text-[#00AB6B] dark:hover:text-[#00BF71] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] dark:focus-visible:ring-[#00BF71] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@core/lib/cn';
import { ThemeToggle } from '@core/components/ui/ThemeToggle/ThemeToggle';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'writing', label: 'Writing', href: '/#writing' },
  { id: 'now', label: 'Self Exploration', href: '/#now' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <>
      {/* Accessibility skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00AB6B] dark:focus:bg-[#00BF71] focus:text-white focus:font-mono focus:text-sm focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* ── DESKTOP HEADER (minimalist theme toggle only, matching prototype) ── */}
      <div
        className={cn(
          'hidden lg:flex items-center justify-end sticky top-0 z-30 w-full h-14 bg-bg transition-shadow duration-200',
          scrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="w-full max-w-5xl mx-auto px-8 flex justify-end">
          <ThemeToggle />
        </div>
      </div>

      {/* ── MOBILE HEADER ── */}
      <header
        className="lg:hidden sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between"
      >
        <Link
          href="/"
          className="font-mono font-bold text-xl tracking-tight text-[#00AB6B] dark:text-[#00BF71] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] rounded-md"
          aria-label="bas. home"
        >
          bas.
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="w-9 h-9 flex flex-col gap-1.5 items-center justify-center rounded-lg text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] transition-colors"
          >
            <span
              className={cn(
                'block w-5 h-0.5 bg-fg transition-all duration-200',
                mobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-fg transition-all duration-200',
                mobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-fg transition-all duration-200',
                mobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN OVERLAY MENU ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              onClick={() => handleNavClick(id)}
              className="text-2xl font-medium text-fg hover:text-[#00AB6B] dark:hover:text-[#00BF71] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

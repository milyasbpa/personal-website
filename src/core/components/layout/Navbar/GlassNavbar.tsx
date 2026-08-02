'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@core/lib/cn';
import { ThemeToggle } from '@core/components/ui/ThemeToggle/ThemeToggle';
import { NowBadge } from '@core/components/ui/NowBadge/NowBadge';

export interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Writing', href: '/blog' },
  { label: 'Now', href: '/#now' },
  { label: 'Contact', href: '/#contact' },
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
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Accessibility skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00AB6B] dark:focus:bg-[#00BF71] focus:text-white focus:font-mono focus:text-sm focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'py-3 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm'
            : 'py-5 bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo bas. */}
          <Link
            href="/"
            className="group flex items-center font-mono font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] dark:focus-visible:ring-[#00BF71] rounded-md px-1 py-0.5"
            aria-label="bas. home"
          >
            <span>bas</span>
            <span className="text-[#00AB6B] dark:text-[#00BF71] font-extrabold group-hover:scale-125 transition-transform inline-block">
              .
            </span>
          </Link>

          {/* Desktop Navigation Links (Capsule) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-xs"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] dark:focus-visible:ring-[#00BF71]',
                    isActive
                      ? 'text-[#00AB6B] dark:text-[#00BF71] bg-[#00AB6B]/10 dark:bg-[#00BF71]/10 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: NowBadge + ThemeToggle + Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:block">
              <NowBadge />
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] dark:focus-visible:ring-[#00BF71] transition-colors"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span
                  className={cn(
                    'block h-0.5 w-full bg-current transform transition duration-300 ease-in-out',
                    mobileMenuOpen && 'rotate-45 translate-y-1.5'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-current transition duration-300 ease-in-out',
                    mobileMenuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-current transform transition duration-300 ease-in-out',
                    mobileMenuOpen && '-rotate-45 -translate-y-1.5'
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-[#00AB6B] dark:hover:text-[#00BF71] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-center">
              <NowBadge />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

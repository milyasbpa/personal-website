'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = '', ...props }: ThemeToggleProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-zinc-600 dark:text-zinc-400 opacity-50 ${className}`}
        disabled
        {...props}
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const isDark = (resolvedTheme || theme) === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-[#00AB6B] dark:hover:text-[#00BF71] hover:border-[#00AB6B]/50 dark:hover:border-[#00BF71]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] dark:focus-visible:ring-[#00BF71] transition-all duration-200 ${className}`}
      {...props}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}

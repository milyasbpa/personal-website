import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
  it('merges multiple standard Tailwind classes', () => {
    expect(cn('px-2', 'py-1', 'bg-white')).toBe('px-2 py-1 bg-white');
  });

  it('overrides conflicting Tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    expect(cn('bg-red-500', 'bg-accent')).toBe('bg-accent');
  });

  it('handles conditional class names cleanly', () => {
    const isTrue = true;
    const isFalse = false;
    expect(cn('text-sm', isTrue && 'font-bold', isFalse && 'hidden')).toBe('text-sm font-bold');
  });
});

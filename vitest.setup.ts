/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Enable React 18/19 act environment for Vitest jsdom
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

// Mock matchMedia for jsdom (needed by next-themes & responsive hooks)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Suppress known benign React 19 + @testing-library/react v16 act() console warning on initial render
const originalError = console.error;
console.error = (...args: any[]) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('not wrapped in act(...)')
  ) {
    return;
  }
  originalError.call(console, ...args);
};

afterEach(() => {
  cleanup();
});

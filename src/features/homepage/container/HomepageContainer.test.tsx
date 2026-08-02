import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { HomepageContainer } from './HomepageContainer';

// Mock IntersectionObserver for framer-motion whileInView in jsdom
beforeAll(() => {
  class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }
  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
});

describe('HomepageContainer', () => {
  it('renders all six homepage sections', () => {
    render(<HomepageContainer />);
    expect(screen.getByRole('heading', { name: /^ilyas bashirah$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^experience$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^writing$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^self exploration$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^contact$/i })).toBeInTheDocument();
  });
});

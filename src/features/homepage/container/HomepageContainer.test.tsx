import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { HomepageContainer } from './HomepageContainer';

// Mock IntersectionObserver for framer-motion whileInView and scrollspy in jsdom
beforeAll(() => {
  class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }
  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
});

describe('HomepageContainer', () => {
  it('renders 2-column sticky sidebar layout and all homepage sections', () => {
    render(<HomepageContainer />);
    expect(screen.getAllByRole('heading', { name: /^ilyas bashirah$/i })[0]).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^experience$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^writing$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^self exploration$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^contact$/i })).toBeInTheDocument();

    // Check sticky sidebar navigation buttons
    expect(screen.getByRole('button', { name: /about[\s\S]*5\+ yrs[\s\S]*react & ts[\s\S]*stack/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /experience[\s\S]*5 companies[\s\S]*2019–now/i })).toBeInTheDocument();
  }, 15000);
});

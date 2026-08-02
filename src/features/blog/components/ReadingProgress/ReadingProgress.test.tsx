import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ReadingProgress } from './ReadingProgress';

describe('ReadingProgress', () => {
  it('renders progress bar with aria attributes', () => {
    render(<ReadingProgress />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('aria-label', 'Article reading progress');
  });

  it('updates progress on window scroll', () => {
    render(<ReadingProgress />);
    const barElement = screen.getByTestId('reading-progress-bar');
    expect(barElement).toHaveStyle('width: 0%');

    // Simulate scroll
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 500,
    });
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 250,
    });

    fireEvent.scroll(window);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });
});

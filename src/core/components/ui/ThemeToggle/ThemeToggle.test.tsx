import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';

const mockSetTheme = vi.fn();

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: mockSetTheme,
    resolvedTheme: 'light',
  }),
}));

describe('ThemeToggle component', () => {
  it('renders theme toggle button with correct aria-label', async () => {
    await act(async () => {
      render(<ThemeToggle />);
    });
    const toggleBtn = screen.getByRole('button', { name: /toggle theme/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  it('can be clicked by user without errors', async () => {
    await act(async () => {
      render(<ThemeToggle />);
    });
    const toggleBtn = screen.getByRole('button', { name: /toggle theme/i });

    await act(async () => {
      await userEvent.click(toggleBtn);
    });
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});

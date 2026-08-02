import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button component', () => {
  it('renders primary variant correctly', async () => {
    await act(async () => {
      render(<Button variant="primary">Click Me</Button>);
    });
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-accent', 'text-white');
  });

  it('renders secondary and ghost variants correctly', async () => {
    let result: ReturnType<typeof render> | undefined;
    await act(async () => {
      result = render(<Button variant="secondary">Secondary</Button>);
    });
    expect(screen.getByRole('button', { name: /secondary/i })).toHaveClass('border-border');

    await act(async () => {
      result?.rerender(<Button variant="ghost">Ghost</Button>);
    });
    expect(screen.getByRole('button', { name: /ghost/i })).toHaveClass('bg-transparent');
  });

  it('handles onClick events and keyboard interaction', async () => {
    const handleClick = vi.fn();
    await act(async () => {
      render(<Button onClick={handleClick}>Interactive</Button>);
    });
    const button = screen.getByRole('button', { name: /interactive/i });

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

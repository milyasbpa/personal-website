import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TagFilter } from './TagFilter';

describe('TagFilter', () => {
  it('renders All button and provided tags', () => {
    const onSelectTag = vi.fn();
    render(<TagFilter tags={['Frontend', 'Japanese']} activeTag="All" onSelectTag={onSelectTag} />);
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Japanese' })).toBeInTheDocument();
  });

  it('calls onSelectTag when a tag button is clicked', () => {
    const onSelectTag = vi.fn();
    render(<TagFilter tags={['Frontend', 'Japanese']} activeTag="All" onSelectTag={onSelectTag} />);
    fireEvent.click(screen.getByRole('button', { name: 'Frontend' }));
    expect(onSelectTag).toHaveBeenCalledWith('Frontend');
  });

  it('applies aria-pressed=true to the active tag', () => {
    const onSelectTag = vi.fn();
    render(<TagFilter tags={['Frontend', 'Japanese']} activeTag="Japanese" onSelectTag={onSelectTag} />);
    expect(screen.getByRole('button', { name: 'Japanese' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false');
  });
});

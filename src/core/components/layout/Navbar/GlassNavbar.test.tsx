import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlassNavbar } from './GlassNavbar';

describe('GlassNavbar component', () => {
  it('renders skip-to-content accessibility link and mobile logo', async () => {
    await act(async () => {
      render(<GlassNavbar />);
    });
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /bas\. home/i })).toBeInTheDocument();
  });

  it('toggles mobile menu and renders navigation links when hamburger is clicked', async () => {
    await act(async () => {
      render(<GlassNavbar />);
    });
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
    expect(menuButton).toBeInTheDocument();

    await userEvent.click(menuButton);
    expect(screen.getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '/#experience');
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('href', '/#writing');
    expect(screen.getByRole('link', { name: 'Self Exploration' })).toHaveAttribute('href', '/#now');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
  });
});

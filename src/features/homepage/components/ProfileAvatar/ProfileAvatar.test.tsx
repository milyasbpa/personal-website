import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProfileAvatar } from './ProfileAvatar';

describe('ProfileAvatar', () => {
  it('renders the avatar image with default alt text', () => {
    render(<ProfileAvatar />);
    const img = screen.getByRole('img', { name: /ilyas bashirah/i });
    expect(img).toBeInTheDocument();
  });

  it('renders the status badge when showStatusBadge is true', () => {
    render(<ProfileAvatar showStatusBadge={true} />);
    expect(screen.getByLabelText('Available for Work')).toBeInTheDocument();
  });

  it('hides the status badge when showStatusBadge is false', () => {
    render(<ProfileAvatar showStatusBadge={false} />);
    expect(screen.queryByLabelText('Available for Work')).not.toBeInTheDocument();
  });
});

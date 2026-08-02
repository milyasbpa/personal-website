import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <h3>Senior Frontend Engineer</h3>
      </Card>
    );
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument();
  });

  it('renders interactive variant with correct classes', () => {
    render(<Card variant="interactive" data-testid="card">Interactive Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('cursor-pointer');
  });
});

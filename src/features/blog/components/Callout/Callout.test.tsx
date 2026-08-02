import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Callout } from './Callout';

describe('Callout', () => {
  it('renders title and children content', () => {
    render(
      <Callout type="tip" title="Pro Tip">
        Always use discriminated unions in TypeScript.
      </Callout>
    );
    expect(screen.getByText('Pro Tip')).toBeInTheDocument();
    expect(
      screen.getByText(/always use discriminated unions/i)
    ).toBeInTheDocument();
  });

  it('renders default note type when not specified', () => {
    render(<Callout>Default callout content.</Callout>);
    expect(screen.getByText(/default callout content/i)).toBeInTheDocument();
  });
});

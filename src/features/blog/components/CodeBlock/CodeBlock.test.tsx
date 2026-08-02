import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  it('renders filename and code content', () => {
    render(<CodeBlock language="ts" filename="example.ts" code="const x: number = 42;" />);
    expect(screen.getByText('example.ts')).toBeInTheDocument();
    expect(screen.getByText('const x: number = 42;')).toBeInTheDocument();
  });

  it('renders copy button and copies text to clipboard on click', async () => {
    render(<CodeBlock language="ts" code="const x = 1;" />);
    const copyBtn = screen.getByRole('button', { name: /copy code to clipboard/i });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('const x = 1;');
  });
});

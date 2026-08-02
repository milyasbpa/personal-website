import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MDXComponents } from './MDXComponents';

const Wrapper = () => {
  const H1 = MDXComponents.h1;
  const H2 = MDXComponents.h2;
  const P = MDXComponents.p;
  const Blockquote = MDXComponents.blockquote;
  const Callout = MDXComponents.Callout;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <H1>Sample MDX Article Title</H1>
      <P>
        This demonstrates the custom typography and component rendering provided by the MDXComponents dictionary.
      </P>
      <Callout type="tip" title="Key Idea">
        All Markdown elements are styled using our design tokens.
      </Callout>
      <H2>Typography & Quotes</H2>
      <Blockquote>
        &ldquo;Syntactically valid TypeScript and bug-free TypeScript are entirely different things.&rdquo;
      </Blockquote>
    </div>
  );
};

const meta: Meta<typeof Wrapper> = {
  title: 'Features/Blog/Components/MDXComponents',
  component: Wrapper,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {};

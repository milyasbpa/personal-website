import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogDetailContainer } from './BlogDetailContainer';

const meta: Meta<typeof BlogDetailContainer> = {
  title: 'Features/Blog/Container/BlogDetailContainer',
  component: BlogDetailContainer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogDetailContainer>;

export const Default: Story = {
  args: {
    post: {
      slug: 'intentional-animation-product-ui',
      title: 'The Case for Intentional Animation in Product UI',
      description:
        "Most animations in product interfaces exist because engineers could add them, not because users needed them. Here's how I think about motion with purpose.",
      date: '2026-07-12',
      tags: ['Design Engineering', 'frontend'],
      published: true,
      readingTime: '5 min read',
      content:
        '## Why most animations feel wrong\n\nWhen motion does not communicate something, it becomes noise.\n\n### The three questions\n\n1. Where did it go?\n2. What just happened?\n3. How do these things relate?',
    },
    prevPost: {
      slug: 'five-years-typescript-type-safety',
      title: 'What Five Years of TypeScript Taught Me About Type Safety',
      description: 'Prev desc',
      date: '2026-06-24',
      tags: ['TypeScript'],
      published: true,
      readingTime: '4 min read',
      content: '',
    },
  },
};

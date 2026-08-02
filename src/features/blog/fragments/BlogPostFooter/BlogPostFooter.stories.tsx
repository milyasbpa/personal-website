import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogPostFooter } from './BlogPostFooter';

const meta: Meta<typeof BlogPostFooter> = {
  title: 'Features/Blog/Fragments/BlogPostFooter',
  component: BlogPostFooter,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BlogPostFooter>;

export const Default: Story = {
  args: {
    prevPost: {
      slug: 'intentional-animation-product-ui',
      title: 'The Case for Intentional Animation in Product UI',
      description: 'Prev desc',
      date: '2026-07-12',
      tags: ['Design Engineering'],
      published: true,
      readingTime: '5 min read',
      content: '',
    },
    nextPost: {
      slug: 'five-years-typescript-type-safety',
      title: 'What Five Years of TypeScript Taught Me About Type Safety',
      description: 'Next desc',
      date: '2026-06-24',
      tags: ['TypeScript'],
      published: true,
      readingTime: '4 min read',
      content: '',
    },
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogPostHeader } from './BlogPostHeader';

const meta: Meta<typeof BlogPostHeader> = {
  title: 'Features/Blog/Fragments/BlogPostHeader',
  component: BlogPostHeader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BlogPostHeader>;

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
      content: '',
    },
  },
};

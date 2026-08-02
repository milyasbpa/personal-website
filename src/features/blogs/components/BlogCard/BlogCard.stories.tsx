import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogCard } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Features/Blogs/Components/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

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
    isLast: false,
  },
};

export const LastItem: Story = {
  args: {
    ...Default.args,
    isLast: true,
  },
};

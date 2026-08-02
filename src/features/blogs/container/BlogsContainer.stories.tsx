import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogsContainer } from './BlogsContainer';

const meta: Meta<typeof BlogsContainer> = {
  title: 'Features/Blogs/Container/BlogsContainer',
  component: BlogsContainer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogsContainer>;

export const Default: Story = {
  args: {
    posts: [
      {
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
    ],
    tags: ['Design Engineering', 'frontend'],
  },
};

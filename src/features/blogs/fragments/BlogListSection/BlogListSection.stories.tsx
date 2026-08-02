import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogListSection } from './BlogListSection';

const meta: Meta<typeof BlogListSection> = {
  title: 'Features/Blogs/Fragments/BlogListSection',
  component: BlogListSection,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BlogListSection>;

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
      {
        slug: 'five-years-typescript-type-safety',
        title: 'What Five Years of TypeScript Taught Me About Type Safety',
        description:
          'Why most teams use TypeScript wrong, and how to write types that actually prevent bugs instead of adding noise.',
        date: '2026-06-24',
        tags: ['frontend', 'TypeScript'],
        published: true,
        readingTime: '4 min read',
        content: '',
      },
    ],
    tags: ['Design Engineering', 'frontend', 'TypeScript'],
  },
};

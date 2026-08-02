import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BlogPostContent } from './BlogPostContent';

const meta: Meta<typeof BlogPostContent> = {
  title: 'Features/Blog/Fragments/BlogPostContent',
  component: BlogPostContent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BlogPostContent>;

export const Default: Story = {
  args: {
    source: '## Sample Heading\n\nThis is a sample paragraph in the MDX content.',
  },
};

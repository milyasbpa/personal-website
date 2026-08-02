import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TagFilter } from './TagFilter';

const meta: Meta<typeof TagFilter> = {
  title: 'Features/Blogs/Components/TagFilter',
  component: TagFilter,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TagFilter>;

export const Default: Story = {
  args: {
    tags: ['Frontend', 'Japanese', 'Design Engineering', 'TypeScript'],
    activeTag: 'All',
    onSelectTag: () => {},
  },
};

export const ActiveTag: Story = {
  args: {
    ...Default.args,
    activeTag: 'Frontend',
  },
};

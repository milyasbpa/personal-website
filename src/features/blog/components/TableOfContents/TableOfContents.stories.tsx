import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TableOfContents } from './TableOfContents';

const meta: Meta<typeof TableOfContents> = {
  title: 'Features/Blog/Components/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

export const Default: Story = {
  args: {
    headings: [
      { id: 'why-most-animations-feel-wrong', text: 'Why most animations feel wrong', level: 2 },
      {
        id: 'the-three-questions-motion-can-answer',
        text: 'The three questions motion can answer',
        level: 2,
      },
      { id: 'duration-and-easing', text: 'Duration and easing are the hard part', level: 3 },
    ],
  },
};

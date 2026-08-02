import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Features/Blog/Components/Callout',
  component: Callout,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Note: Story = {
  args: {
    type: 'note',
    title: 'Design System Notice',
    children: 'Token values are public API contracts. Always treat them with care.',
  },
};

export const Tip: Story = {
  args: {
    type: 'tip',
    title: 'Pro Tip',
    children: 'Discriminated unions make impossible states unrepresentable in TypeScript.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'Do not hardcode hex colors; always use design tokens from index.css.',
  },
};

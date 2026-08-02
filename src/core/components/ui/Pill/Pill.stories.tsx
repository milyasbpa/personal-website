import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  title: 'Core/UI/Pill',
  component: Pill,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'muted', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Accent: Story = {
  args: {
    children: 'React 19',
    variant: 'accent',
  },
};

export const Muted: Story = {
  args: {
    children: 'TypeScript',
    variant: 'muted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Framer Motion',
    variant: 'outline',
  },
};

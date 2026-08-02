import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeatmapGrid } from './HeatmapGrid';

const meta: Meta<typeof HeatmapGrid> = {
  title: 'Features/Homepage/Components/HeatmapGrid',
  component: HeatmapGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeatmapGrid>;

export const Default: Story = {
  args: {},
};

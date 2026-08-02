import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { VocabCard } from './VocabCard';

const meta: Meta<typeof VocabCard> = {
  title: 'Features/Blog/Components/VocabCard',
  component: VocabCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof VocabCard>;

export const Default: Story = {
  args: {
    kanji: '開発',
    reading: 'かいはつ (kaihatsu)',
    meaning: 'Development / Software Engineering',
  },
};

export const Architecture: Story = {
  args: {
    kanji: '設計',
    reading: 'せっけい (sekkei)',
    meaning: 'Architecture / Design / System Plan',
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CodeBlock } from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'Features/Blog/Components/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: {
    language: 'tsx',
    filename: 'ProgressButton.tsx',
    code: `const ProgressButton = ({ loading, children }) => (
  <button className={loading ? 'opacity-70 cursor-wait' : ''}>
    {loading ? <Spinner size={16} /> : children}
  </button>
);`,
  },
};

export const WithoutFilename: Story = {
  args: {
    language: 'css',
    code: `:root {
  --bg: #ffffff;
  --fg: #0f172a;
  --accent: #00ab6b;
}`,
  },
};

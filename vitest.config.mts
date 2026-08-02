import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@core': path.resolve(dirname, './src/core'),
      '@features': path.resolve(dirname, './src/features'),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['lucide-react', 'react', 'react-dom', 'react-dom/client', 'next/link', 'next/navigation'],
  },
  test: {
    server: {
      deps: {
        inline: [
          'react',
          'react-dom',
          'react-dom/client',
          'react/jsx-runtime',
          'react/jsx-dev-runtime',
          '@testing-library/react',
          '@testing-library/user-event',
          '@testing-library/dom',
          'next-themes',
          'lucide-react'
        ],
      },
    },
    projects: [{
      extends: true,
      test: {
        name: 'unit',
        include: ['src/**/*.test.{ts,tsx}'],
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        globals: true,
      }
    }, {
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright(),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Include test files, exclude story files from direct testing
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['src/**/*.stories.*'],
    // Environment for testing
    environment: 'jsdom',
    // Setup files
    setupFiles: ['./.storybook/vitest.setup.ts'],
    // Add globals for testing
    globals: true
  }
})
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  testMatch: ['**/*.ts'],
  fullyParallel: false,
  use: {
    headless: false,
  },
});

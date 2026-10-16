// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list'], ['html']],

  // the site is public and sometimes slow, so giving assertions a bit more time
  expect: {
    timeout: 10000,
  },

  use: {
    baseURL: 'https://practicetestautomation.com',
    // keep screenshot, video and trace only when a test fails
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

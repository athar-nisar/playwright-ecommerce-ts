
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 35 * 1000, // 35 seconds timeout
  expect: {
    timeout: 5000, // explicit for assertion timeout
  },
  reporter: 'html',

  use: {
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
       
        },
      },
  ],
});
const { devices } = require('@playwright/test');

const config = {
    // Set headed mode and viewport
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure'
      },
    // Set crosssbrowser mode
    projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },
    ],
    // Give failing tests 2 retry attempts
    retries: 1,
  };
  
module.exports = config;
import { DefaultAzureCredential } from '@azure/identity';
import { createAzurePlaywrightConfig, ServiceOS } from '@azure/playwright';
import { defineConfig } from '@playwright/test';
import config from './playwright.config';

if (!process.env.PLAYWRIGHT_SERVICE_URL) {
  throw new Error(
    'Set PLAYWRIGHT_SERVICE_URL to your Azure Playwright Workspaces browser endpoint.',
  );
}

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  }),
);

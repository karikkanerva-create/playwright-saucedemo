import { mkdir } from 'node:fs/promises';
import { basename, join } from 'node:path';
import type { Page, TestInfo } from '@playwright/test';

export async function saveTestScreenshot(page: Page, testInfo: TestInfo) {
  const screenshotsDirectory = join(__dirname, '..', '..', 'doc', 'screenshots');
  const screenshotName = [
    testInfo.project.name,
    basename(testInfo.file, '.spec.ts'),
    testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-|-$/g, ''),
    testInfo.testId,
  ].join('-');

  await mkdir(screenshotsDirectory, { recursive: true });
  await page.screenshot({
    path: join(screenshotsDirectory, `${screenshotName}.png`),
    fullPage: true,
  });
}

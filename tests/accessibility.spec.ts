import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage accessibility scan', async ({ page }) => {

  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({
    page
  }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
  console.log(
  `Accessibility Violations Found: ${accessibilityScanResults.violations.length}`
);

//expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
});
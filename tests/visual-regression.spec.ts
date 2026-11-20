
import { expect, test } from '@playwright/test';


test('homepage visual regression test', async ({ page }) => {
  
  await page.goto('/');

  
  //await expect(page).toHaveScreenshot('homepage.png');
  await expect(
    page.locator('img[alt="Website for automation practice"]')
  ).toHaveScreenshot('homepage-logo.png');
});
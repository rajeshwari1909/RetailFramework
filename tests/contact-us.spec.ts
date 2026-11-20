import { expect, test } from '@playwright/test';

test('submit the Contact Us form', async ({ page }) => {
  await page.goto('/contact_us');
  await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();

  await page.locator('[data-qa="name"]').fill('Playwright User');
  await page.locator('[data-qa="email"]').fill('playwright.contact@example.com');
  await page.locator('[data-qa="subject"]').fill('Contact form test');
  await page.locator('[data-qa="message"]').fill('This is a test message from the Playwright automation suite.');

  page.once('dialog', (dialog) => dialog.accept());
  await page.locator('[data-qa="submit-button"]').click();

  await expect(page.locator('#contact-page .status')).toHaveText(
    'Success! Your details have been submitted successfully.',
  );
});

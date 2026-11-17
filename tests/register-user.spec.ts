import { expect, test } from '@playwright/test';

test('register a new user', async ({ page }) => {
  const email = `playwright.user.${Date.now()}@example.com`;

  await page.goto('https://automationexercise.com');
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.locator('[data-qa="signup-name"]').fill('Playwright User');
  await page.locator('[data-qa="signup-email"]').fill(email);
  await page.locator('[data-qa="signup-button"]').click();

  await expect(page.getByText('Enter Account Information')).toBeVisible();
  await page.locator('#id_gender1').check();
  await page.locator('[data-qa="password"]').fill('TestPassword!123');
  await page.locator('[data-qa="days"]').selectOption('15');
  await page.locator('[data-qa="months"]').selectOption('6');
  await page.locator('[data-qa="years"]').selectOption('1990');
  await page.locator('#newsletter').check();
  await page.locator('#optin').check();

  await page.locator('[data-qa="first_name"]').fill('Playwright');
  await page.locator('[data-qa="last_name"]').fill('User');
  await page.locator('[data-qa="company"]').fill('Example Company');
  await page.locator('[data-qa="address"]').fill('123 Test Street');
  await page.locator('[data-qa="address2"]').fill('Suite 4');
  await page.locator('[data-qa="country"]').selectOption({ label: 'United States' });
  await page.locator('[data-qa="state"]').fill('California');
  await page.locator('[data-qa="city"]').fill('Los Angeles');
  await page.locator('[data-qa="zipcode"]').fill('90001');
  await page.locator('[data-qa="mobile_number"]').fill('5551234567');

  await page.locator('[data-qa="create-account"]').click();
  await expect(page.locator('[data-qa="account-created"]')).toHaveText('Account Created!');
}); 
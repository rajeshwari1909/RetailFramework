import { test, expect } from '@playwright/test';

test('network mocking demo', async ({ page }) => {

  await page.route('**/*', async route => {

    const url = route.request().url();

    if (url.includes('products')) {

      console.log('Products request intercepted');

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          message: 'Mocked Response'
        }),
      });

    } else {

      await route.continue();

    }
  });

  await page.goto('/products');

  await expect(page).toHaveURL(/products/);

});
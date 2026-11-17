//===before POM=====

//import { expect, test } from '@playwright/test';

//test('search for Tshirt products', async ({ page }) => {
 // await page.goto('https://automationexercise.com');

 // await page.getByRole('link', { name: /Products/ }).click();
 // await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();

 // await page.locator('#search_product').fill('Tshirt');
 // await page.locator('#submit_search').click();

//  await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
//  const matchingProducts = page.locator('.productinfo p').filter({ hasText: /tshirt/i });
//  await expect(matchingProducts.first()).toBeVisible();
//});

//====after POM====
import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('search for Tshirt products', async ({ page }) => {

  const productPage = new ProductPage(page);

  await productPage.navigateToProducts();

  await productPage.searchProduct('Tshirt');

  await productPage.verifySearchResults();

});
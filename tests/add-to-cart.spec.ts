//import { expect, test } from '@playwright/test';

//test('add a product to the cart', async ({ page }) => {
  //await page.goto('https://automationexercise.com');

  //await page.getByRole('link', { name: /Products/ }).click();
 // await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();

 // const firstProduct = page.locator('.features_items .product-image-wrapper').first();
 // await expect(firstProduct).toBeVisible();
 // await firstProduct.getByRole('link', { name: /View Product/ }).click();

 // const productNameHeading = page.locator('.product-information h2');
 // await expect(productNameHeading).toBeVisible();
 // const productName = (await productNameHeading.innerText()).trim();
  //await page.getByRole('button', { name: /Add to cart/ }).click();

  //await expect(page.getByText('Added!', { exact: true })).toBeVisible();
  //await page.getByRole('link', { name: /View Cart/ }).click();

 // const cartItem = page.locator('#cart_info_table tbody tr').filter({ hasText: productName });
  //await expect(cartItem).toBeVisible();
//});

import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('add product to cart', async ({ page }) => {

  const productPage = new ProductPage(page);

  await productPage.navigateToProducts();

  await productPage.openFirstProduct();

  await productPage.addToCart();

  await productPage.viewCart();

  await productPage.verifyProductAdded();

});
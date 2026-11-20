//import { test } from '@playwright/test';
//import { ProductPage } from '../pages/ProductPage';
import { test } from '../fixtures/baseFixture';

test('search for Tshirt products', async ({ productPage }) => {

  //const productPage = new ProductPage(page);

  await productPage.navigateToProducts();

  await productPage.searchProduct('Tshirt');

  await productPage.verifySearchResults();

});

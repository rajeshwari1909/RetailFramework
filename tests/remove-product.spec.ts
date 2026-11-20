import { test } from '../fixtures/baseFixture';

test('remove product from cart', async ({ productPage }) => {

  await productPage.navigateToProducts();

  await productPage.openFirstProduct();

  await productPage.addToCart();

  await productPage.viewCart();

  await productPage.removeProductFromCart();

  await productPage.verifyProductRemoved();

});
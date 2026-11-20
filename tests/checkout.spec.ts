import { test } from '../fixtures/baseFixture';
import { testUser } from '../testdata/user';

test('checkout flow', async ({ loginPage, productPage }) => {

  await loginPage.navigateToLogin();

  await loginPage.login(
    testUser.email,
    testUser.password
  );

  await loginPage.verifyLoginSuccess();

  await productPage.navigateToProducts();

  await productPage.openFirstProduct();

  await productPage.addToCart();

  await productPage.viewCart();

  await productPage.proceedToCheckout();

  await productPage.verifyCheckoutPage();

});
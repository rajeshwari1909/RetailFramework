import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { RegisterPage } from '../pages/RegisterPage';
type AppFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  registerPage: RegisterPage;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  registerPage: async ({ page }, use) => {
  await use(new RegisterPage(page));
},
});

export { expect };

//import { expect, test } from '@playwright/test';
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testUser } from '../testdata/user';


test('log in with a registered user account', async ({ page }) => {
  //const email = process.env.LOGIN_EMAIL;
  //const password = process.env.LOGIN_PASSWORD;
   //const email = 'rajeshwari.yadav@perficient.com';
   //const password = 'rajeshwari';
   const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  //await loginPage.login(email, password);
  await loginPage.login(
  testUser.email,
  testUser.password
);
  await loginPage.verifyLoginSuccess();


// -----------------------without POM-------------------------------- 
  //if (!email || !password) {
  // throw new Error('Set LOGIN_EMAIL and LOGIN_PASSWORD to a registered Automation Exercise account.');
 // }

  //await page.goto('https://automationexercise.com');
  //await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  //await page.getByRole('link', { name: 'Signup / Login' }).click();
  //await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

  //await page.locator('[data-qa="login-email"]').fill(email);
  //await page.locator('[data-qa="login-password"]').fill(password);
  //await page.locator('[data-qa="login-button"]').click();

  //await expect(page.getByText(/Logged in as\s+\S+/)).toBeVisible();
});

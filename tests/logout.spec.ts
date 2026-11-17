import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testUser } from '../testdata/user';

test('logout user', async ({ page }) => {

  const email = 'rajeshwari.yadav@perficient.com';
  const password = 'rajeshwari';

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  //await loginPage.login(email, password);
  await loginPage.login(
  testUser.email,
  testUser.password
);

  await loginPage.verifyLoginSuccess();

  await loginPage.logout();

  await loginPage.verifyLogoutSuccess();

});
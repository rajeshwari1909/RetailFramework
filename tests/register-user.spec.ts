import { test } from '../fixtures/baseFixture';
import { registerUsers } from '../testdata/registerUsers';
import { generateUniqueEmail } from '../utils/emailGenerator';

for (const user of registerUsers) {

  test(`register user - ${user.firstName}`, async ({ registerPage }) => {

    //const email = `playwright.${Date.now()}@example.com`;
      const email = generateUniqueEmail();
    await registerPage.navigateToSignup();

    await registerPage.enterSignupDetails(
      user.name,
      email
    );

    await registerPage.fillAccountInformation(user);

    await registerPage.createAccount();

    await registerPage.verifyAccountCreated();

  });

}



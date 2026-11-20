import { Page, expect } from '@playwright/test';

export class RegisterPage {

  constructor(private page: Page) {}

  async navigateToSignup() {
    await this.page.goto('/');

    await this.page.getByRole('link', {
      name: 'Signup / Login'
    }).click();
  }

  async enterSignupDetails(name: string, email: string) {

    await this.page
      .locator('[data-qa="signup-name"]')
      .fill(name);

    await this.page
      .locator('[data-qa="signup-email"]')
      .fill(email);

    await this.page
      .locator('[data-qa="signup-button"]')
      .click();
  }

  async fillAccountInformation(user: any) {

    await this.page.locator('#id_gender1').check();

    await this.page
      .locator('[data-qa="password"]')
      .fill(user.password);

    await this.page
      .locator('[data-qa="days"]')
      .selectOption('15');

    await this.page
      .locator('[data-qa="months"]')
      .selectOption('6');

    await this.page
      .locator('[data-qa="years"]')
      .selectOption('1990');

    await this.page.locator('#newsletter').check();

    await this.page.locator('#optin').check();

    await this.page
      .locator('[data-qa="first_name"]')
      .fill(user.firstName);

    await this.page
      .locator('[data-qa="last_name"]')
      .fill(user.lastName);

    await this.page
      .locator('[data-qa="company"]')
      .fill(user.company);

    await this.page
      .locator('[data-qa="address"]')
      .fill(user.address);

    await this.page
      .locator('[data-qa="address2"]')
      .fill(user.address2);

    await this.page
      .locator('[data-qa="country"]')
      .selectOption({ label: user.country });

    await this.page
      .locator('[data-qa="state"]')
      .fill(user.state);

    await this.page
      .locator('[data-qa="city"]')
      .fill(user.city);

    await this.page
      .locator('[data-qa="zipcode"]')
      .fill(user.zipcode);

    await this.page
      .locator('[data-qa="mobile_number"]')
      .fill(user.mobileNumber);
  }

  async createAccount() {

    await this.page
      .locator('[data-qa="create-account"]')
      .click();
  }

  async verifyAccountCreated() {

    await expect(
      this.page.locator('[data-qa="account-created"]')
    ).toHaveText('Account Created!');
  }
}
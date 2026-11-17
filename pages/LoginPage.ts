import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLogin() {
    //await this.page.goto('https://automationexercise.com');
    await this.page.goto('/');
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-qa="login-email"]').fill(email);
    await this.page.locator('[data-qa="login-password"]').fill(password);
    await this.page.locator('[data-qa="login-button"]').click();
  }

  async verifyLoginSuccess() {
    await expect(
      this.page.getByText(/Logged in as/)
    ).toBeVisible();
  }

  async logout() {
  await this.page.getByRole('link', { name: 'Logout' }).click();
}

async verifyLogoutSuccess() {
  await expect(
    this.page.getByRole('heading', { name: 'Login to your account' })
  ).toBeVisible();
}
}
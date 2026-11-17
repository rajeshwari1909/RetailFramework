import { Page, expect } from '@playwright/test';

export class ProductPage {

 constructor(private page: Page) {}

 //async navigateToProducts() {
  //  await this.page.goto('https://automationexercise.com');
  //  await this.page.getByRole('link', { name: /Products/ }).click();

//}
async navigateToProducts() {
  //await this.page.goto('https://automationexercise.com');
   await this.page.goto('/');
  await this.page.getByRole('link', { name: /Products/ }).click();

  await expect(
    this.page.getByRole('heading', { name: 'All Products' })
  ).toBeVisible();
}

async searchProduct(productName: string) {
    await this.page.locator('#search_product').fill(productName);
    await this.page.locator('#submit_search').click();
  }


async verifySearchResults() {
    await expect(
      this.page.getByRole('heading', { name: 'Searched Products' })
    ).toBeVisible();
  }

  async openFirstProduct() {
  const firstProduct = this.page
    .locator('.features_items .product-image-wrapper')
    .first();

  await firstProduct
    .getByRole('link', { name: /View Product/ })
    .click();
}

async addToCart() {
  await this.page
    .getByRole('button', { name: /Add to cart/ })
    .click();
}

async viewCart() {
  await this.page
    .getByRole('link', { name: /View Cart/ })
    .click();
}

async verifyProductAdded() {
  await expect(
    this.page.locator('#cart_info_table')
  ).toBeVisible();
}
}

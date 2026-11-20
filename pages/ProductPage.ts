import { Page, expect } from '@playwright/test';

export class ProductPage {

 constructor(private page: Page) {}

 //async navigateToProducts() {
  //  await this.page.goto('https://automationexercise.com');
  //  await this.page.getByRole('link', { name: /Products/ }).click();

//}
async navigateToProducts() {
  await this.page.goto('/products');
  await expect(
  this.page.locator('#search_product')
).toBeVisible({ timeout: 10000 });
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

  await expect(
  this.page.getByRole('button', { name: /Add to cart/ })
).toBeVisible();

  await this.page
    .getByRole('button', { name: /Add to cart/ })
    .click();

  
}
// async addToCart() {

//   await this.page
//     .getByText('Add to cart')
//     .first()
//     .click();

// }

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

async removeProductFromCart() {

  await this.page.locator('.cart_quantity_delete').click();

}

async verifyProductRemoved() {

  await expect(
    this.page.getByText(/Cart is empty/i)
  ).toBeVisible();

}

async proceedToCheckout() {
  const checkoutButton = this.page.getByText('Proceed To Checkout', {
    exact: true,
  });

  await expect(checkoutButton).toBeVisible();
  await checkoutButton.click();
}

async verifyCheckoutPage() {

  await expect(
    this.page.getByText('Address Details')
  ).toBeVisible();

}

async placeOrder() {

  await this.page
    .getByRole('link', { name: /Place Order/i })
    .click();

}

async enterPaymentDetails() {

  await this.page
    .locator('[data-qa="name-on-card"]')
    .fill('Rajeshwari');

  await this.page
    .locator('[data-qa="card-number"]')
    .fill('4111111111111111');

  await this.page
    .locator('[data-qa="cvc"]')
    .fill('123');

  await this.page
    .locator('[data-qa="expiry-month"]')
    .fill('12');

  await this.page
    .locator('[data-qa="expiry-year"]')
    .fill('2030');

}

async confirmOrder() {

  await this.page
    .getByRole('button', { name: /Pay and Confirm Order/i })
    .click();

}

async verifyOrderPlaced() {

  await expect(
    this.page.getByText(/Order Placed!/i)
  ).toBeVisible();

}

}


import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartTitle: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartTitle = page.getByText('Your Cart');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  productName(productName: string): Locator {
    return this.page.getByText(productName);
  }

  productPrice(productPrice: string): Locator {
    return this.page.getByText(productPrice);
  }

  async removeProduct(removeTestId: string) {
  await this.page.locator(`[data-test="${removeTestId}"]`).click();
}

async proceedToCheckout() {
  await this.checkoutButton.click();
}

}
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly backpackAddToCartButton: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.getByText('Products');
    this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addProductToCart(addToCartTestId: string) {
    await this.page.locator(`[data-test="${addToCartTestId}"]`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async openProductDetail(productDetailTestId: string) {
  await this.page.locator(`[data-test="${productDetailTestId}"]`).click();
}
}
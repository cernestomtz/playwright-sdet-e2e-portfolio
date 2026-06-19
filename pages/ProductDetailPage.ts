import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly addToCartButton: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }
}
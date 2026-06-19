import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly overviewTitle: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.overviewTitle = page.getByText('Checkout: Overview');
    this.finishButton = page.locator('[data-test="finish"]');

    this.completeHeader = page.getByText('Thank you for your order!');
    this.completeText = page.getByText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}
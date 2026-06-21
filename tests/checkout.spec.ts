import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../fixtures/users';
import { products } from '../fixtures/products';
import { checkoutData } from '../fixtures/checkoutData';
import { checkoutMessages } from '../fixtures/checkoutMessages';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { setCheckoutMetadata } from '../utils/allureMetadata';

test('TC-012 Checkout With Valid Information - User can continue to overview page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await setCheckoutMetadata();

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.openCart();

  await expect(cartPage.cartTitle).toBeVisible();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    checkoutData.validCustomer.firstName,
    checkoutData.validCustomer.lastName,
    checkoutData.validCustomer.postalCode
  );

  await checkoutPage.continueCheckout();

  await expect(page).toHaveURL(/.*checkout-step-two.html/);
  await expect(page.getByText('Checkout: Overview')).toBeVisible();
  await expect(page.getByText(products.backpack.name)).toBeVisible();
});

test('TC-013 Checkout Missing First Name - Error message is displayed', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    '',
    checkoutData.validCustomer.lastName,
    checkoutData.validCustomer.postalCode
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toContainText(
    checkoutMessages.firstNameRequired
  );
});

test('TC-014 Checkout Missing Last Name - Error message is displayed', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    checkoutData.validCustomer.firstName,
    '',
    checkoutData.validCustomer.postalCode
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toContainText(
    checkoutMessages.lastNameRequired
  );
});

test('TC-015 Checkout Missing Postal Code - Error message is displayed', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    checkoutData.validCustomer.firstName,
    checkoutData.validCustomer.lastName,
    ''
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toContainText(
    checkoutMessages.postalCodeRequired
  );
});

test('TC-016 Complete Purchase - User can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    checkoutData.validCustomer.firstName,
    checkoutData.validCustomer.lastName,
    checkoutData.validCustomer.postalCode
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutOverviewPage.overviewTitle).toBeVisible();
  await expect(page.getByText(products.backpack.name)).toBeVisible();

  await checkoutOverviewPage.finishCheckout();

  await expect(checkoutOverviewPage.completeHeader).toBeVisible();
  await expect(checkoutOverviewPage.completeText).toBeVisible();
});
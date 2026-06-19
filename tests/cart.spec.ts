import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../fixtures/users';
import { products } from '../fixtures/products';

test('TC-009 View Shopping Cart - User can see selected product in cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(inventoryPage.productsTitle).toBeVisible();

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.openCart();

  await expect(cartPage.cartTitle).toBeVisible();
  await expect(cartPage.productName(products.backpack.name)).toBeVisible();
  await expect(cartPage.productPrice(products.backpack.price)).toBeVisible();
});

test('TC-010 View Multiple Products In Cart - User can see multiple selected products in cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(inventoryPage.productsTitle).toBeVisible();

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.addProductToCart(products.bikeLight.addToCartTestId);

  await expect(inventoryPage.cartBadge).toHaveText('2');

  await inventoryPage.openCart();

  await expect(cartPage.cartTitle).toBeVisible();
  await expect(cartPage.productName(products.backpack.name)).toBeVisible();
  await expect(cartPage.productPrice(products.backpack.price)).toBeVisible();

  await expect(cartPage.productName(products.bikeLight.name)).toBeVisible();
  await expect(cartPage.productPrice(products.bikeLight.price)).toBeVisible();
  await expect(cartPage.cartItems).toHaveCount(2);
});

test('TC-011 Remove Product From Cart - User can remove one product from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);
  await inventoryPage.addProductToCart(products.bikeLight.addToCartTestId);

  await inventoryPage.openCart();

  await expect(cartPage.cartTitle).toBeVisible();

  await cartPage.removeProduct(products.bikeLight.removeTestId);

  await expect(cartPage.productName(products.bikeLight.name)).not.toBeVisible();
  await expect(cartPage.productName(products.backpack.name)).toBeVisible();
  await expect(cartPage.cartItems).toHaveCount(1);
  await expect(inventoryPage.cartBadge).toHaveText('1');
});

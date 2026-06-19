import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../fixtures/users';
import { products } from '../fixtures/products';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';

test('TC-006 Add Product To Cart - User can add backpack to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(inventoryPage.productsTitle).toBeVisible();

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);

  await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('TC-007 Add Product From Product Detail - User can add backpack from detail page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productDetailPage = new ProductDetailPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(inventoryPage.productsTitle).toBeVisible();

  await inventoryPage.openProductDetail(products.backpack.detailTestId);

  await expect(productDetailPage.productName).toHaveText(products.backpack.name);

  await productDetailPage.addProductToCart();

  await expect(productDetailPage.cartBadge).toHaveText('1');
});

test('TC-008 Add Multiple Products - User can add products from inventory and product detail', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productDetailPage = new ProductDetailPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(inventoryPage.productsTitle).toBeVisible();

  await inventoryPage.addProductToCart(products.backpack.addToCartTestId);

  await inventoryPage.openProductDetail(products.bikeLight.detailTestId);

  await expect(productDetailPage.productName).toHaveText(products.bikeLight.name);

  await productDetailPage.addProductToCart();

  await expect(productDetailPage.cartBadge).toHaveText('2');
});

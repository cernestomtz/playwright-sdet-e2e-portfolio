import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuComponent } from '../components/MenuComponent';
import { users } from '../fixtures/users';

test('TC-017 Logout Successfully - User can logout from the application', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuComponent = new MenuComponent(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.getByText('Products')).toBeVisible();

  await menuComponent.logout();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});
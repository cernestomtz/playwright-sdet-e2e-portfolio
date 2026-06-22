import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';
import { messages } from '../fixtures/messages';
import { setValidLoginMetadata } from '../utils/allureMetadata';

test('TC-001 Valid Login - User can access inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await setValidLoginMetadata();

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.getByText('Products')).toBeVisible();
  //this will not work
  //await expect(page.getByText('FAIL')).toBeVisible();
});

test('TC-002 Invalid Login - User cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.invalid.username, users.invalid.password);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(messages.invalidCredentials);
});

test('TC-003 Missing Username - User cannot login without username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.missingUsername.username, users.missingUsername.password);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(messages.usernameRequired);
});

test('TC-004 Missing Password - User cannot login without password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.missingPassword.username, users.missingPassword.password);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(messages.passwordRequired);
});

test('TC-005 Missing Username and Password - User cannot login with empty credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.emptyCredentials.username, users.emptyCredentials.password);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(messages.usernameRequired);
});
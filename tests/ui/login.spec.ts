import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Test Login successful', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
});

test('Test Login empty username and passwd', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('', '');

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});


test('Test Login correct username and empty passwd', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', '');

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});

test('Test Login empty username and correct passwd', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('', 'secret_sauce');

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});

test('Test Login correct username and invalid passwd', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});
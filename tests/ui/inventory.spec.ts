import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { saveTestScreenshot } from './screenshot';

test.afterEach(async ({ page }, testInfo) => {
  await saveTestScreenshot(page, testInfo);
});

test('Add backpack and verify cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.verifyInventoryPageLoaded();
  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.verifyProductInCart(
    'Sauce Labs Backpack'
  );
  await inventoryPage.verifyCartBadge('1');

  await cartPage.clickCheckout();
});
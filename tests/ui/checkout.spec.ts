import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';



test('Complete checkout process', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  // Login
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  // Add product
  await inventoryPage.addBackpackToCart();

  // Verify cart badge
  await inventoryPage.verifyCartBadge('1');

  // Open cart
  await inventoryPage.openCart();

  // Verify product
  await cartPage.verifyProductInCart(
    'Sauce Labs Backpack'
  );

  // Start checkout
  await cartPage.clickCheckout();

  // Fill customer information
  await checkoutPage.fillCustomerInformation(
    'Kari',
    'Tester',
    '20520'
  );

  // Complete order
  await checkoutPage.finishCheckout();

  // Verify success message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});
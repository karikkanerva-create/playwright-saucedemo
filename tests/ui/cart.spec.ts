import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Add backpack and verify cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();
  await inventoryPage.addProductToCart('sauce-labs-bike-light');

  await inventoryPage.openCart();

  await cartPage.verifyProductInCart(
    'Sauce Labs Backpack'
  );
  await cartPage.verifyProductInCart(
    'Sauce Labs Bike Light'
  );

  await cartPage.continueShopping();

  await inventoryPage.verifyCartBadge('2');
  
  await inventoryPage.openCart();

  await cartPage.clickCheckout();
});

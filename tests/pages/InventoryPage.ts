import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartLink = page.locator('.shopping_cart_link');
    
    this.inventoryItems = page.locator('.inventory_item');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async addBackpackToCart() {
    await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
  }

  async addProductToCart(productId: string) {
    await this.page.locator(`#add-to-cart-${productId}`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async verifyCartBadge(expectedCount: string) {
    await expect(
      this.page.locator('.shopping_cart_badge')
    ).toHaveText(expectedCount);
  }
}

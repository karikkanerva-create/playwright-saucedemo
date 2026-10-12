import { Page } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(postalCode);

    await this.page.locator('#continue').click();
  }

  async finishCheckout() {
    await this.page.locator('#finish').click();
  }
}
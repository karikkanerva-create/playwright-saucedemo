# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Test Login successful
- Location: tests\ui\login.spec.ts:9:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[data-test="title"]')
Expected substring: "Products"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('[data-test="title"]') with timeout 5000ms
  - waiting for locator('[data-test="title"]')

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, empty"
  - text: Products Name (A to Z)
  - combobox "Sort products":
    - option "Name (A to Z)" [selected]
    - option "Name (Z to A)"
    - option "Price (low to high)"
    - option "Price (high to low)"
- main:
  - button "View details for Sauce Labs Backpack":
    - img "Sauce Labs Backpack"
  - button "View details for Sauce Labs Backpack": Sauce Labs Backpack
  - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
  - button "Add to cart"
  - button "View details for Sauce Labs Bike Light":
    - img "Sauce Labs Bike Light"
  - button "View details for Sauce Labs Bike Light": Sauce Labs Bike Light
  - text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
  - button "Add to cart"
  - button "View details for Sauce Labs Bolt T-Shirt":
    - img "Sauce Labs Bolt T-Shirt"
  - button "View details for Sauce Labs Bolt T-Shirt": Sauce Labs Bolt T-Shirt
  - text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
  - button "Add to cart"
  - button "View details for Sauce Labs Fleece Jacket":
    - img "Sauce Labs Fleece Jacket"
  - button "View details for Sauce Labs Fleece Jacket": Sauce Labs Fleece Jacket
  - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
  - button "Add to cart"
  - button "View details for Sauce Labs Onesie":
    - img "Sauce Labs Onesie"
  - button "View details for Sauce Labs Onesie": Sauce Labs Onesie
  - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
  - button "Add to cart"
  - button "View details for Test.allTheThings() T-Shirt (Red)":
    - img "Test.allTheThings() T-Shirt (Red)"
  - button "View details for Test.allTheThings() T-Shirt (Red)": Test.allTheThings() T-Shirt (Red)
  - text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
  - button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { saveTestScreenshot } from './screenshot';
  4  | 
  5  | test.afterEach(async ({ page }, testInfo) => {
  6  |   await saveTestScreenshot(page, testInfo);
  7  | });
  8  | 
  9  | test('Test Login successful', async ({ page }) => {
  10 |   const loginPage = new LoginPage(page);
  11 | 
  12 |   await loginPage.navigate();
  13 |   await loginPage.login('standard_user', 'secret_sauce');
  14 | 
> 15 |   await expect(page.locator('[data-test="title"]')).toContainText('Products');
     |                                                     ^ Error: expect(locator).toContainText(expected) failed
  16 |   await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  17 | });
  18 | 
  19 | test('Test Login empty username and passwd', async ({ page }) => {
  20 |   const loginPage = new LoginPage(page);
  21 | 
  22 |   await loginPage.navigate();
  23 |   await loginPage.login('', '');
  24 | 
  25 |   await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
  26 | });
  27 | 
  28 | 
  29 | test('Test Login correct username and empty passwd', async ({ page }) => {
  30 |   const loginPage = new LoginPage(page);
  31 | 
  32 |   await loginPage.navigate();
  33 |   await loginPage.login('standard_user', '');
  34 | 
  35 |   await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
  36 | });
  37 | 
  38 | test('Test Login empty username and correct passwd', async ({ page }) => {
  39 |   const loginPage = new LoginPage(page);
  40 | 
  41 |   await loginPage.navigate();
  42 |   await loginPage.login('', 'secret_sauce');
  43 | 
  44 |   await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
  45 | });
  46 | 
  47 | test('Test Login correct username and invalid passwd', async ({ page }) => {
  48 |   const loginPage = new LoginPage(page);
  49 | 
  50 |   await loginPage.navigate();
  51 |   await loginPage.login('standard_user', 'wrong_password');
  52 | 
  53 |   await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  54 | });
```
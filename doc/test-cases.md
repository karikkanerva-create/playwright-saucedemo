# Playwright Test Cases

This document describes the automated test cases in `tests/ui` and `tests/api`.

## UI test cases

UI tests use the SauceDemo application and run in Chromium, Firefox, and WebKit.

### TC-UI-001: Successful login

- **Test:** `Test Login successful`
- **Precondition:** SauceDemo is available.
- **Steps:** Open the login page and sign in as `standard_user` with the valid test password.
- **Expected:** The Products page and Swag Labs header are visible.
- **Source:** `tests/ui/login.spec.ts`

### TC-UI-002: Login with both fields empty

- **Test:** `Test Login empty username and passwd`
- **Steps:** Open the login page and submit with an empty username and password.
- **Expected:** The error indicates that a username is required.
- **Source:** `tests/ui/login.spec.ts`

### TC-UI-003: Login with an empty password

- **Test:** `Test Login correct username and empty passwd`
- **Steps:** Open the login page and submit a valid username with an empty password.
- **Expected:** The error indicates that a password is required.
- **Source:** `tests/ui/login.spec.ts`

### TC-UI-004: Login with an empty username

- **Test:** `Test Login empty username and correct passwd`
- **Steps:** Open the login page and submit an empty username with the valid test password.
- **Expected:** The error indicates that a username is required.
- **Source:** `tests/ui/login.spec.ts`

### TC-UI-005: Login with an invalid password

- **Test:** `Test Login correct username and invalid passwd`
- **Steps:** Open the login page and submit `standard_user` with an incorrect password.
- **Expected:** The error indicates that the username and password do not match.
- **Source:** `tests/ui/login.spec.ts`

### TC-UI-006: Add backpack and verify cart

- **Test:** `Add backpack and verify cart` (inventory spec)
- **Steps:** Log in, add the Sauce Labs Backpack to the cart, and open the cart.
- **Expected:** The backpack appears in the cart and the cart badge shows `1`.
- **Source:** `tests/ui/inventory.spec.ts`

### TC-UI-007: Verify multiple products in cart

- **Test:** `Add backpack and verify cart` (cart spec)
- **Steps:** Log in, add the backpack and bike light, open the cart, verify both items, continue shopping, verify the cart badge, then reopen the cart.
- **Expected:** Both products appear in the cart and the badge shows `2`.
- **Source:** `tests/ui/cart.spec.ts`

### TC-UI-008: Complete checkout

- **Test:** `Complete checkout process`
- **Steps:** Log in, add the backpack, open the cart, proceed to checkout, enter customer information, and finish the order.
- **Expected:** The order confirmation reads “Thank you for your order!”
- **Source:** `tests/ui/checkout.spec.ts`

## API test cases

API tests call the public ReqRes API at `https://reqres.in`.

### TC-API-001: Verify users endpoint status

- **Test:** `should return status 200`
- **Steps:** Send a GET request to `/api/users`.
- **Expected:** The response status is `200`.
- **Source:** `tests/api/api.spec.ts`

### TC-API-002: Verify users response content

- **Test:** `should contain user data`
- **Steps:** Send a GET request to `/api/users` and inspect the JSON response.
- **Expected:** The response contains at least one user and reports a total of `12`.
- **Source:** `tests/api/api.spec.ts`

### TC-API-003: Create a user

- **Test:** `create new user via API`
- **Steps:** Send a POST request to `/api/users` with the name `Kari` and job `Test Automation Engineer`.
- **Expected:** The response status is `201`; the response contains the submitted name and job, an ID, and a creation timestamp.
- **Source:** `tests/api/api-create-user.spec.ts`

### TC-API-004: Retrieve user details

- **Test:** `verify user data from JSON response`
- **Steps:** Send a GET request to `/api/users/2`.
- **Expected:** The response status is `200`; the user is Janet Weaver and the email contains `@reqres.in`.
- **Source:** `tests/api/api-user-data.spec.ts`

### TC-API-005: Verify users list

- **Test:** `verify users list contains records`
- **Steps:** Send a GET request to `/api/users?page=1` and inspect the returned records.
- **Expected:** The response status is `200`; the list is non-empty and every user has an ID and an email address.
- **Source:** `tests/api/api-user-list.spec.ts`

### TC-API-006: Update a user

- **Test:** `update an existing user via API`
- **Steps:** Send a PUT request to `/api/users/2` with the name `Kari` and job `QA Engineer`.
- **Expected:** The response status is `200`; the response contains the updated name and job and an update timestamp.
- **Source:** `tests/api/api-user-update.spec.ts`

### TC-API-007: Delete a user

- **Test:** `delete an existing user via API`
- **Steps:** Send a DELETE request to `/api/users/2`.
- **Expected:** The response status is `204` and the response body is empty.
- **Source:** `tests/api/api-user-delete.spec.ts`

### TC-API-008: Request a missing user

- **Test:** `return 404 when requesting a missing user`
- **Steps:** Send a GET request to `/api/users/999`.
- **Expected:** The response status is `404` and the JSON response is an empty object.
- **Source:** `tests/api/api-user-not-found.spec.ts`

> ReqRes may return HTTP `429` when its anonymous daily request limit is reached. In that case, API test failures reflect the external service limit rather than the expected responses documented above.

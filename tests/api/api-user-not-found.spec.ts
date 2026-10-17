import { test, expect } from '@playwright/test';

test('return 404 when requesting a missing user', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/999');

  expect(response.status()).toBe(404);
  expect(await response.json()).toEqual({});
});

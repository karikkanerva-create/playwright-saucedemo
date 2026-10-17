import { test, expect } from '@playwright/test';

test('delete an existing user via API', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2');

  expect(response.status()).toBe(204);
  expect(await response.text()).toBe('');
});

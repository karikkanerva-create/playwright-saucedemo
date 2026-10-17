import { test, expect } from '@playwright/test';

test('verify users list contains records', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.data.length).toBeGreaterThan(0);

  body.data.forEach((user: any) => {
    expect(user.id).toBeDefined();
    expect(user.email).toContain('@');
  });
});
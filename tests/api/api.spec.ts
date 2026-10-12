import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('should return status 200', async ({ request }) => {
    const response = await request.get(
      'https://reqres.in/api/users'
    );

    expect(response.status()).toBe(200);
  });

  test('should contain user data', async ({ request }) => {
    const response = await request.get(
      'https://reqres.in/api/users'
    );

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.total).toBe(12);
  });
});
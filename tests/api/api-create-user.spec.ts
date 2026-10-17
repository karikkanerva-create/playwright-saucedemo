import { test, expect } from '@playwright/test';

test('create new user via API', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Kari',
      job: 'Test Automation Engineer'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.name).toBe('Kari');
  expect(body.job).toBe('Test Automation Engineer');
  expect(body.id).toBeDefined();
  expect(body.createdAt).toBeDefined();
});
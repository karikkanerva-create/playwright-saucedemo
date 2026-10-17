import { test, expect } from '@playwright/test';

test('update an existing user via API', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Kari',
      job: 'QA Engineer',
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.name).toBe('Kari');
  expect(body.job).toBe('QA Engineer');
  expect(body.updatedAt).toBeDefined();
});

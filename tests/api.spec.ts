import { test, expect } from '@playwright/test';
import { apiData } from '../fixtures/apiData';
import { setApiUserMetadata } from '../utils/allureMetadata';

test('API-001 GET User - User details are returned successfully', async ({ request }) => {
  await setApiUserMetadata();

  const response = await request.get(`${apiData.baseUrl}/users/${apiData.users.existingUserId}`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(apiData.users.existingUserId);
  expect(responseBody.email).toBeTruthy();
  expect(responseBody.name).toBeTruthy();
  expect(responseBody.username).toBeTruthy();
});

test('API-002 POST Post - Post can be created successfully', async ({ request }) => {
  const response = await request.post(`${apiData.baseUrl}/posts`, {
    data: apiData.newPost,
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.title).toBe(apiData.newPost.title);
  expect(responseBody.body).toBe(apiData.newPost.body);
  expect(responseBody.userId).toBe(apiData.newPost.userId);
  expect(responseBody.id).toBeTruthy();
});
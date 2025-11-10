import { test, expect } from '@playwright/test';

test('صفحه Google باید عنوان درست داشته باشد', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
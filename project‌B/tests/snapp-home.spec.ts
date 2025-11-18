import { test, expect } from '@playwright/test';

test.describe('Snapp Home Page Test', () => {

  test('User should open Snapp and see services section', async ({ page }) => {

    await page.goto('https://snapp.ir', { timeout: 60000 });

    // انتظار برای لود شدن عنوان اصلی سایت
    await expect(page.getByText('سوپر اپ')).toBeVisible({ timeout: 20000 });

    // کلیک روی انتخاب موقعیت اگر وجود داشت
    const locationButton = page.getByRole('button', { name: 'انتخاب موقعیت' });
    if (await locationButton.isVisible({ timeout: 3000 })) {
      await locationButton.click();
    }

    // چک کردن لینک اصلی سرویس تاکسی
    await expect(page.getByRole('link', { name: /درخواست تاکسی/ })).toBeVisible({ timeout: 20000 });

    console.log('Snapp services loaded successfully');
  });

});

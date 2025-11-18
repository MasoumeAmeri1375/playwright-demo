import { test, expect } from '@playwright/test';

test('Digikala search test', async ({ page }) => {

  await page.goto('https://www.digikala.com');

  // Close cookie/modal if exists
  const cookie = page.locator('text=متوجه شدم');
  if (await cookie.isVisible({ timeout: 5000 })) {
    await cookie.click();
  }

  // Wait for search box and fill it
  const searchInput = page.locator('input[name="search-input"]');
  await searchInput.waitFor({ state: 'visible', timeout: 15000 });
  await searchInput.fill('ساعت');
  await searchInput.press('Enter');

  // Wait for search results
  await page.waitForSelector('[data-cro-id="product"]', { timeout: 20000 });

  // Click first item
  await page.locator('[data-cro-id="product"]').first().click();

  // Assert product page opened
  await expect(page.locator('text=مشخصات')).toBeVisible({ timeout: 20000 });

});

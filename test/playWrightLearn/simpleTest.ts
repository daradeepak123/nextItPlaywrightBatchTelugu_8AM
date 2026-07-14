
import { test, expect } from '@playwright/test';
import { url } from '../../src/playWrightInfo/PlayWrightBaseInfo';

test('Verify Example Domain page', async ({ page }) => {
  await page.goto(url);

  // Verify page title
  await expect(page).toHaveTitle(/Example Domain/);

  // Verify heading
  await expect(page.locator('h1')).toHaveText('Example Domain');

  // Verify paragraph is visible
  await expect(page.locator('p').first()).toBeVisible();
});
import { expect, test } from '@playwright/test';

import { siteConfig } from '@/config/constant';

test('has title', async ({ page }) => {
  await page.goto('/starter');

  await expect(page).toHaveTitle(siteConfig.name);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const PlayWrightBaseInfo_1 = require("../../src/playWrightInfo/PlayWrightBaseInfo");
(0, test_1.test)('Verify Example Domain page', async ({ page }) => {
    await page.goto(PlayWrightBaseInfo_1.url);
    // Verify page title
    await (0, test_1.expect)(page).toHaveTitle(/Example Domain/);
    // Verify heading
    await (0, test_1.expect)(page.locator('h1')).toHaveText('Example Domain');
    // Verify paragraph is visible
    await (0, test_1.expect)(page.locator('p').first()).toBeVisible();
});
//# sourceMappingURL=simpleTest.js.map
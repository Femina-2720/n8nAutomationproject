const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome'   // <<< THIS IS THE FIX
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.tradingview.com/');
  console.log("Login manually, then wait...");

  // 90 seconds to login
  await page.waitForTimeout(90000);

  await context.storageState({ path: 'auth.json' });
  await browser.close();

  console.log("auth.json saved successfully");
})();

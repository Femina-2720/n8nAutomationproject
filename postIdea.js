const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const ideas = JSON.parse(fs.readFileSync('idea.json', 'utf8'));

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome',
  });

  const context = await browser.newContext({
    storageState: 'auth.json',
  });

  const page = await context.newPage();

  console.log(`Found ${ideas.length} ideas. Starting process...`);

  await page.goto('https://www.tradingview.com/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(4000);

  for (let i = 0; i < ideas.length; i++) {
    const idea = ideas[i];
    console.log(`\nProcessing idea ${i + 1}/${ideas.length}: ${idea.ticker}`);

    /* =============================
       STEP 1: OPEN SEARCH (KEYBOARD)
       ============================= */

    // TradingView universal search
    await page.keyboard.press('/');
    await page.waitForTimeout(1500);

    // Type ticker and select first result
    await page.keyboard.type(idea.ticker, { delay: 120 });
    await page.waitForTimeout(1500);
    await page.keyboard.press('Enter');

    // Wait for chart to load
    await page.waitForTimeout(5000);

    /* =============================
       STEP 2: OPEN PUBLISH IDEA
       ============================= */

    await page.keyboard.press('Alt+P'); // opens publish idea (works reliably)
    await page.waitForTimeout(4000);

    /* =============================
       STEP 3: FILL TITLE
       ============================= */

    await page.keyboard.type(idea.title, { delay: 80 });
    await page.keyboard.press('Tab');

    /* =============================
       STEP 4: DESCRIPTION
       ============================= */

    await page.keyboard.type(
      `${idea.title}\n\nAuto-generated trading idea using AI analysis.`,
      { delay: 40 }
    );

    /* =============================
       STEP 5: POSITION
       ============================= */

    if (idea.position === 'long') {
      await page.keyboard.press('Alt+L');
    } else if (idea.position === 'short') {
      await page.keyboard.press('Alt+S');
    } else {
      await page.keyboard.press('Alt+N');
    }

    /* =============================
       STEP 6: TAGS
       ============================= */

    await page.keyboard.press('Tab');
    for (const tag of idea.tags) {
      await page.keyboard.type(tag, { delay: 60 });
      await page.keyboard.press('Enter');
    }

    console.log(`Idea ${i + 1} prepared successfully.`);


    // await page.keyboard.press('Alt+Enter');

    await page.waitForTimeout(6000);
  }

  console.log('\nAll ideas processed successfully.');
})();

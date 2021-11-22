const { chromium, devices } = require('playwright');
const iPhone13 = devices['iPhone 13'];
console.log(iPhone13);

(async () => {
    const browser = await chromium.launch({
        headless: false,
    });
    const context = await browser.newContext({
        ...iPhone13,
    })
    const page = await context.newPage();
    await page.goto('https://www.apple.com/mac/');
    // await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true }); 
    await page.locator('.hero-macbook-pro-14-16-image').screenshot({ path: 
        'screenshots/locator_screenshot.png' });
    await browser.close();
})(); 

 
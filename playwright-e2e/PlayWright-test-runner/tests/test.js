const { test, expect } = require('@playwright/test');

test('ioet test', async ({ page }) => {
  await page.goto('https://ioet.com/');

  // Expect a page "to contain" a text
  const locator = page.locator('text=A DIVERSE PORTFOLIO OF SOFTWARE ENGINEERING EXPERTISE');
  await expect(locator).toContainText('A DIVERSE PORTFOLIO OF SOFTWARE ENGINEERING EXPERTISE');

  // Expect an element "to be visible".
  await expect(page.locator('text=Contact').first()).toBeVisible();

  await page.click('text=Contact');
  // Expect some text to be visible on the page.
  await expect(page.locator('text=Contact Us').first()).toBeVisible();

    // Click text=Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL('https://www.ioet.com/contact');
    // Click [placeholder="First Name"]
    await page.click('[placeholder="First Name"]');
    // Fill [placeholder="First Name"]
    await page.fill('[placeholder="First Name"]', 'A');
    // Click [placeholder="Last Name"]
    await page.click('[placeholder="Last Name"]');
    // Fill [placeholder="Last Name"]
    await page.fill('[placeholder="Last Name"]', 'B');
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', 'a@b.com');
    // Click [placeholder="Phone"]
    await page.click('[placeholder="Phone"]');
    // Fill [placeholder="Phone"]
    await page.fill('[placeholder="Phone"]', '+5930000000');
    // Click textarea
    await page.click('textarea');
    // Fill textarea
    await page.fill('textarea', 'My message here');

});
import { test, expect } from '@playwright/test'; // import { test, expect } from '@playwright/test'; is used to import the test and expect functions from the Playwright testing library. The test function is used to define test cases, while the expect function is used for assertions within those tests.

test('Browser context Playwright test', async ({ browser }) => 
  {
  // chrome - plugins/cookies
  const context = await browser.newContext(); // incognito mode
  const page = await context.newPage(); // new page and capture page in const page
  await page.goto('https://www.saucedemo.com');
  console.log (await page.title());
  //page.locator
});

test ('Page Playwright test', async ({ page }) => //By using test.only, we can run only this test and ignore other tests in the file. This is useful for debugging a single test case.
  {
    // chrome - plugins/cookies
  await page.goto('https://www.google.com');
  console.log (await page.title());
  await expect(page).toHaveTitle('Google');
  await page.pause(); // Freezes the test and keeps the window open
});
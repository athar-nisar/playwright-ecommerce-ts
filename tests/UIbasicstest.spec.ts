import { test, expect } from '@playwright/test'; // import { test, expect } from '@playwright/test'; is used to import the test and expect functions from the Playwright testing library. The test function is used to define test cases, while the expect function is used for assertions within those tests.

test.only ('Browser context Playwright test', async ({ browser }) => 
  {
  // chrome - plugins/cookies
  const context = await browser.newContext(); // incognito mode
  const page = await context.newPage(); // new page and capture page in const page
  await page.goto('https://www.saucedemo.com');
  console.log (await page.title());
  //css
  await page.locator ('#user-name').fill('standard_user'); //type is deprecated, use fill instead. 
  await page.locator ('#password').fill('wrongpassword'); //Type on element
  await page.locator ("#login-button").click(); // Click on element
  console.log(await page.locator("[data-test='error']").textContent());
  await expect(page.locator("[data-test='error']")).toHaveText('Epic sadface: Username and password do not match any user in this service'); // Assertion
});

test ('Page Playwright test', async ({ page }) => //By using test.only, we can run only this test and ignore other tests in the file. This is useful for debugging a single test case.
  {
    // chrome - plugins/cookies
  await page.goto('https://www.google.com');
  console.log (await page.title());
  await expect(page).toHaveTitle('Google');
  await page.pause(); // Freezes the test and keeps the window open
});
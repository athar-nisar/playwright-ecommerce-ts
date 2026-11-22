import { test, expect } from '@playwright/test'; // import { test, expect } from '@playwright/test'; is used to import the test and expect functions from the Playwright testing library. The test function is used to define test cases, while the expect function is used for assertions within those tests.

test.only ('Browser context Playwright test', async ({ browser }) => 
  {
  // chrome - plugins/cookies
  const context = await browser.newContext(); // incognito mode
  const page = await context.newPage(); // new page and capture page in const page
  const username = page.locator ('#user-name') //creating page object classes for username field
  const signinbtn = page.locator ("#login-button")
  const inventoryItems = page.locator('[data-test="inventory-item-name"]');
  await page.goto('https://www.saucedemo.com');
  console.log (await page.title());
  //css
  await username.fill('incorrect_user'); //type is deprecated, use fill instead ((incorrect username given))
  await page.locator ('#password').fill('secret_sauce'); //Type on element
  await signinbtn.click(); // Click on element
  console.log(await page.locator("[data-test='error']").textContent());
  await expect(page.locator("[data-test='error']")).toHaveText('Epic sadface: Username and password do not match any user in this service'); // Assertion
  //fill again with correct username and password and login
  await username.fill(''); //clear the username field
  await username.fill('standard_user'); //type is deprecated, use fill instead (correct username given)
  await signinbtn.click(); // Click on element
  //console.log(await page.locator('[data-test="inventory-item-name"]').textContent()); //multiple elements with same locator
    console.log(await inventoryItems.first().textContent()); //nth(0) or first() is used to get the first element from the list of elements with the same locator
  console.log(await inventoryItems.nth(1).textContent()); //nth(1) is used to get the second element from the list of elements with the same locator
  const allItems = await inventoryItems.allTextContents(); //allTextContents() is used to get the text content of all elements with the same locator
  console.log (allItems);
});

test ('Page Playwright test', async ({ page }) => //By using test.only, we can run only this test and ignore other tests in the file. This is useful for debugging a single test case.
  {
    // chrome - plugins/cookies
  await page.goto('https://www.google.com');
  console.log (await page.title());
  await expect(page).toHaveTitle('Google');
  await page.pause(); // Freezes the test and keeps the window open
});
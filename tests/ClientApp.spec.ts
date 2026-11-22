import { test, expect } from '@playwright/test'; // import { test, expect } from '@playwright/test'; is used to import the test and expect functions from the Playwright testing library. The test function is used to define test cases, while the expect function is used for assertions within those tests.

test.only ('Browser context Playwright test', async ({ page }) => 
  {
  await page.goto ("https://rahulshettyacademy.com/client/"); //navigate to the url
  const pageitems = page.locator(".card-body h5"); //traversing for locator for all the items on the page
  const usermail = `athar_${Date.now()}@testmail.com`; //creating a unique email address for the user by appending the current timestamp to the username
  //Registering a new user
  await page.locator(".text-reset").click(); // Click on element with class "text-reset"
  await page.locator("#firstName").fill("Gogo"); // Fill the first name field
  await page.locator("#lastName").fill("Bogo");
  await page.locator("#userEmail").fill(usermail);
  await page.locator("#userMobile").fill("1234567890");
  await page.locator("#userPassword").fill("Gogo@1234");
  await page.locator("#confirmPassword").fill("Gogo@1234");
  await page.locator("input[type='checkbox']").check();
  await page.locator("#login").click();
  await page.locator(".btn.btn-primary").waitFor(); // Wait for login button to be visible
  await page.locator(".btn.btn-primary").click(); // Click on login button
  await page.locator("#userEmail").fill(usermail);
  await page.locator("#userPassword").fill("Gogo@1234");
  await page.locator("#login").click();
  await pageitems.first().waitFor(); // Wait for the first item to be visible
  const allItems = await pageitems.allTextContents();
  console.log (allItems);
  })
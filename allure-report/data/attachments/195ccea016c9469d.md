# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07shadowdom.spec.ts >> handling iframe inside shadowdom
- Location: tests\07shadowdom.spec.ts:20:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('div#userlName').getByRole('textbox', { name: 'user name field', exact: true })

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test("Handling Shadow Element", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://selectorshub.com/xpath-practice-page/");
  6  |     await page.waitForLoadState('domcontentloaded');
  7  |     await page.pause();
  8  | 
  9  |     const shadowDom = page.locator('div#userName');
  10 | 
  11 |     const userNameField = shadowDom.getByRole('textbox', { name: 'user name field', exact: true });
  12 |     await userNameField.scrollIntoViewIfNeeded();
  13 | 
  14 |     await userNameField.fill('nEno');
  15 | 
  16 |     await page.close();
  17 | 
  18 | });
  19 | 
  20 | test('handling iframe inside shadowdom', async({page}) => {
  21 |     await page.goto('https://selectorshub.com/xpath-practice-page/');
  22 |     await page.waitForLoadState('domcontentloaded');
  23 |     await page.pause();
  24 | 
  25 |     const shadowdo = page.locator('div#userlName');
  26 | 
  27 |     const USField = shadowdo.getByRole('textbox',{name: 'user name field', exact: true});
  28 |      
> 29 |     await USField.fill('WHY');
     |                   ^ Error: locator.fill: Target page, context or browser has been closed
  30 | 
  31 | 
  32 |     const frame1 = shadowdo.frameLocator('#pact1');
  33 | })
```
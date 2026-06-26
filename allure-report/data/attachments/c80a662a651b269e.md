# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16placeOrder.spec.ts >> Verify Place Order >> Verify Place Order IPHONE 13 PRO
- Location: tests\16placeOrder.spec.ts:23:13

# Error details

```
TypeError: this.testData is not a constructor
```

```
TypeError: Cannot read properties of undefined (reading 'loginPage')
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { PageObjectManager } from '../pages/PageObjectManager';
  3  | import { Readfiles } from '../utils/Readfiles';
  4  | 
  5  | 
  6  | let orderId: string;
  7  | let poManager: PageObjectManager;
  8  | 
  9  | const readFiles = new Readfiles();
  10 | const filePath = './testdata/PlaceOrder.json';
  11 | const placeOrderData: any = readFiles.readJsonfile(filePath);
  12 | // const placeOrderData: any = readFiles.readExcelFile(filePath);
  13 | 
  14 | for (const { prodName, country } of placeOrderData) {
  15 | 
  16 |     test.describe(`Verify Place Order`, { tag: ['@Smoke', '@Regression'] }, () => {
  17 | 
  18 |         test.beforeEach("Verify Place Order Functionality", async ({ page }) => {
  19 |             poManager = new PageObjectManager(page);
  20 |             await poManager.loginPage.goto(poManager.testData.url);
  21 |         });
  22 | 
  23 |         test(`Verify Place Order ${prodName}`, async () => {
  24 |             await poManager.loginPage.login( poManager.testData.email, poManager.testData.password);
  25 |             await poManager.placeOrderPage.addProdToCart(prodName);
  26 |             await poManager.placeOrderPage.navigateToCart();
  27 |             await poManager.placeOrderPage.placeOrder(country);
  28 |             orderId = await poManager.placeOrderPage.getOrderId();
  29 |             await poManager.placeOrderPage.clickOrderHistoryLink();
  30 |             await poManager.placeOrderPage.verifyOrder(orderId);
  31 |             await poManager.placeOrderPage.clickViewOrdersButton();
  32 |         });
  33 | 
  34 |         test.afterEach("Verify Place Order Functionality", async () => {
> 35 |             await poManager.loginPage.signOut();
     |                             ^ TypeError: Cannot read properties of undefined (reading 'loginPage')
  36 |         });
  37 | 
  38 |     });
  39 | 
  40 | 
  41 | 
  42 | }
  43 | 
```
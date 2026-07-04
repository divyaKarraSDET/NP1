# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16placeOrder.spec.ts >> Verify Place Order >> Verify Place Order ADIDAS ORIGINA
- Location: tests\16placeOrder.spec.ts:23:13

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Checkout❯' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Checkout❯' })

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire":
    - /url: https://techsmarthire.com/
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- heading "No Products in Your Cart !" [level=1]
```

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Checkout❯' })

```

# Test source

```ts
  1  | import { expect, type Page, type Locator } from "@playwright/test";
  2  | import { PageObjects } from './PageObjects';
  3  | 
  4  | export class PlaceOrderPage extends PageObjects {
  5  | 
  6  |     constructor(page: Page) {
  7  |         super(page);
  8  |     }
  9  | 
  10 |     async addProdToCart(prodName: string) {
  11 |         await expect.soft(this.prodCards.first()).toBeVisible();
  12 |         /*const products = this.prodCards;
  13 |         const productsCount = await products.count();
  14 |         for (let i = 0; i < productsCount; i++) {
  15 |             if (await products.nth(i).locator("//b").innerText() == prodName) {
  16 |                 await products.nth(i).locator("//button[text()=' Add To Cart']").click();
  17 |                 break;
  18 |             }
  19 |         }*/
  20 | 
  21 |         for (const prod of await this.prodCards.all()) {
  22 |             // console.log(`Product Name :: ${await prod.locator("//b").innerText()}`);
  23 |             if (await prod.locator("//b").innerText() == prodName) {
  24 |                 await prod.locator("//button[text()=' Add To Cart']").click();
  25 |                 break;
  26 |             }
  27 |         }
  28 |     }
  29 | 
  30 |     async navigateToCart() {
  31 |         await this.myCartButton.click();
  32 |         await expect.soft(this.chechoutButton).toBeVisible();
  33 |     }
  34 | 
  35 |     async placeOrder(country: string) {
> 36 |         await this.chechoutButton.click();
     |                                   ^ Error: locator.click: Test ended.
  37 |         await this.selectCountrydrp.pressSequentially(country);
  38 |         await expect.soft(this.page.getByText(country).last()).toBeVisible();
  39 |         await this.page.getByText(country).last().click();
  40 |         await this.placeOrderButton.click();
  41 |     }
  42 | 
  43 | 
  44 |     async getOrderId(): Promise<string> {
  45 |         await expect.soft(this.orderIdText).toBeVisible();
  46 |         let orderId = await this.orderIdText.innerText();
  47 |         orderId = orderId.replaceAll('|', '').trim();
  48 |         console.log(`OrderId is :: ${orderId}`);
  49 |         return orderId;
  50 |     }
  51 | 
  52 |     async clickOrderHistoryLink() {
  53 |         await this.ordersHistoryLink.click();
  54 |         await expect.soft(this.ordersTable).toBeVisible();
  55 |     }
  56 | 
  57 |     async verifyOrder(orderId: string) {
  58 |         await expect.soft(this.orderIdCol).toContainText(orderId);
  59 |         if (await this.orderIdCol.innerText() == orderId) {
  60 |             await this.viewOrderButon.first().click();
  61 |         }
  62 |         await expect.soft(this.orderIdInOrderDetails).toContainText(orderId);
  63 |     }
  64 | 
  65 |     async clickViewOrdersButton() {
  66 |         await this.viewOrdersButton.click();
  67 |         await expect.soft(this.ordersTable).toBeVisible();
  68 |     }
  69 | 
  70 | 
  71 | }
  72 | 
  73 | 
```
import {test} from '@playwright/test';

test("simple test", async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();


    
    await page.fill('input[name="Email"]', 'test@example.com');
    await page.fill('input[name="Password"]', 'password');
    await page.click('input[type="submit"]');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
}
)
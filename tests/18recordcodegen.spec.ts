import {test, expect} from '@playwright/test';

test.skip('recordcodegen', async({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState();
    await page.pause();

});


 //import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState();
    await page.pause();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  //await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - text: 
    - paragraph: Time at Work
    - separator
    - img "profile picture"
    - paragraph: Punched Out
    - paragraph: "/Punched Out: Mar 29th at \\\\d+:\\\\d+ PM \\\\(GMT 7\\\\)/"
    - text: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+ Today/
    - button ""
    - separator
    - paragraph: This Week
    - paragraph: /Jun \\d+ - Jun \\d+/
    - text: 
    - paragraph: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+/
    `);
});



import {test, expect} from '@playwright/test';

test('dragndropscrollSS', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState();
   // await page.pause();

    const sourceEle = page.locator('div#draggable');
    await sourceEle.scrollIntoViewIfNeeded();

    const targetEle = page.locator('div#droppable');

   // await sourceEle.dragTo(targetEle);

   //mouse
   await sourceEle.hover();
    await page.mouse.down();
    await targetEle.hover();
    await page.mouse.up();

    await page.mouse.wheel(0, 2000);  //x:0  y:2

    await page.close();
})
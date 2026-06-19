import { test } from '@playwright/test';

test.skip("Handling Shadow Element", async ({ page }) => {

    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const shadowDom = page.locator('div#userName');

    const userNameField = shadowDom.getByRole('textbox', { name: 'user name field', exact: true });
    await userNameField.scrollIntoViewIfNeeded();

    await userNameField.fill('nEno');

    await page.close();

});

test('handling iframe inside shadowdom', async({page}) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const shadowdo = page.locator('div#userName');

    const USField = shadowdo.getByRole('textbox',{name: 'user name field', exact: true});
     await USField.scrollIntoViewIfNeeded();
    await USField.fill('WHY');


    // const frame1 = shadowdo.frameLocator('#pact1');
    // const pizza = frame1.getByRole('textbox',{name: 'Enter pizza name'});
    // await pizza.pressSequentially('none');

    await page.close();
})
import {test, expect} from '@playwright/test';


test('handling alerts', async ({page}) => {

     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     await page.waitForLoadState('domcontentloaded');
     await page.pause();

     page.on('dialog', async dialog => {

        console.log(dialog.message());
        console.log(dialog.type());

        expect(dialog.message()).toBe('I am a JS Alert');
        expect(dialog.type()).toBe('alert');

        await dialog.accept();

     });

     await page.getByText('Click for JS Alert').click();

     await page.close();


})

test('Handling alerts', async ({page}) => {

     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     await page.waitForLoadState('domcontentloaded');
     await page.pause();

     page.on('dialog', async dialog => {

        console.log(dialog.message());
        console.log(dialog.type());

        expect(dialog.message()).toBe('I am a JS Confirm');
        expect(dialog.type()).toBe('confirm');

        await dialog.accept();

     });

     await page.getByText('Click for JS Confirm').click();
     console.log(await page.locator('#result').innerText());

     await page.close();


})

test('Handling Alerts', async ({page}) => {

     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     await page.waitForLoadState('domcontentloaded');
     await page.pause();

     page.on('dialog', async dialog => {

        console.log(dialog.message());
        console.log(dialog.type());

        expect(dialog.message()).toBe('I am a JS prompt');
        expect(dialog.type()).toBe('prompt');

        await dialog.accept('honey');

     });

     await page.getByText('Click for JS Prompt').click();
     console.log(await page.locator('#result').innerText());
     await page.close();


})
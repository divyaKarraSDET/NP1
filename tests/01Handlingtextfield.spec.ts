import {test} from '@playwright/test';

test('handling text field actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    //await page.pause();

    await page.getByRole('textbox', {name: "Enter Name"}).fill('honey');
    console.log('data is ', await page.getByRole('textbox', {name: "Enter Name"}).inputValue());
 
    const banana = await page.getByRole('textbox', {name: "Enter Name"})
    await banana.clear();
    const mango = await banana.inputValue();
    console.log(`data after deletion is : ${mango}`);


    
   const apple = page.getByRole('textbox', {name: "Enter Phone"})
    await apple.scrollIntoViewIfNeeded();
    await apple.pressSequentially('11223344');
    const Apple = await apple.inputValue();
    console.log(`data is : ${Apple}`)

})
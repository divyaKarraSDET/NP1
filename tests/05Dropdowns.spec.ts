import {test, expect} from '@playwright/test';

test.skip('dropdwns', async({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');
await page.waitForLoadState('domcontentloaded');
await page.pause();

   const cntrydrpdwn = page.getByRole('combobox', {name: "Country:"});
   await cntrydrpdwn.scrollIntoViewIfNeeded();

    cntrydrpdwn.selectOption({label: "India"});
     console.log(await cntrydrpdwn.inputValue());
    await cntrydrpdwn.selectOption({index: 4 })   //france
     console.log(await cntrydrpdwn.inputValue());
    cntrydrpdwn.selectOption("Germany");
     console.log(await cntrydrpdwn.inputValue());
    cntrydrpdwn.selectOption({value: 'brazil'});
     console.log(await cntrydrpdwn.inputValue());



    const alloptions = cntrydrpdwn.getByRole('option');
     //console.table(await alloptions.innerText());              //returns visible data 
     //console.table(await alloptions.textContent());            //returns all text contents 
     console.log(await alloptions.allTextContents());          //returns data including /n new line nad space and so on

});

test.skip('handlingmultipledropdwns', async({page}) => {

     await page.goto('https://testautomationpractice.blogspot.com/');
     await page.waitForLoadState('domcontentloaded');
     //await page.pause();

      const drpdwn =  page.getByRole('listbox', {name: "Colors"});
        await drpdwn.scrollIntoViewIfNeeded();

        await drpdwn.selectOption('Red');
        console.log(await drpdwn.inputValue());

        await drpdwn.selectOption(['Blue', 'Yellow']);
        console.log(await drpdwn.inputValue());
        

        const aloption = drpdwn.getByRole('option');
        await expect.soft(aloption).toHaveCount(7);
        console.log(await aloption.allInnerTexts());
        console.table(await aloption.allTextContents());
     
});


test('Autosuggestions', async ({page}) => {
      await page.goto('https://www.google.com');
      await page.waitForLoadState('domcontentloaded');
      await page.pause();

      await page.locator('//textarea[@name="q"]').fill('w3schools');

      const autosuggestions = page.locator(`//li[@data-attrid="AutocompletePrediction"]`);

      for(const link of await autosuggestions.all()) {
          const innertext = await link.innerText();

          if(innertext == 'w3schools'){
               await link.click();
               break;
          }

     }
          const results = page.locator('.byrV5b');
          await results.nth(0).click();
          await expect.soft(page.locator('#w3-logo').first()).toBeVisible();

})


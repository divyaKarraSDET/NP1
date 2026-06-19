import {test, expect} from '@playwright/test';


test('clickactions', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState();
    await page.pause();

    const Koala = page.getByText('Automation Testing Practice');
    await Koala.click()   //click element 
                       
    const bat = page.getByText('For Selenium, Cypress & Playwright');
    await bat.dblclick();                  //Dbl click
    //console.log(await bat.inputValue());
    //console.log(await bat.innerText());


    await page.getByText('Home').first().hover();                            //hover on element

    await Koala.focus();                               // focus on element 

    await Koala.click({button: 'right'});               //right clicking on element

    const hippolink = page.locator('//a[text() = "Blog"]');
    await hippolink.click({force: true});                   //force click
    //await expect.soft(page.locator('//h1[text()= "SDET-QA Blog"]')).toBeVisible();

    const Ant = page.getByRole('link', {name: 'API Testing'})   
    await Ant.click({position: {x:10, y:10}});        //pixels



    await page.close();

})
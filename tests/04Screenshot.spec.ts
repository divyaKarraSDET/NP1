import {test, expect} from '@playwright/test';

test('screenshot', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.waitForLoadState('domcontentloaded');
//await page.pause();

const heading =  page.getByText('Automation Testing Practice');

await heading.screenshot({path: './images/screenshot.jpg'});

await page.screenshot({path: './images/expectedfullpagescreenshot.jpg', fullPage: true});

await heading.screenshot({path: './images/pagescreenshot.jpg'});

expect(await page.screenshot({path: './images/actualpagescreenshot.jpg', fullPage: true})).toMatchSnapshot('./images/expectedpagescreenshot.jpg');



})
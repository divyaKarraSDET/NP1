import { type Page } from '@playwright/test';

import { LoginPage } from "./LoginPage";
import { PlaceOrderpage } from "./PlaceOrderpage";
import { Registrationpage } from './Registrationpage';
//import { TestData } from '../testdata/TestData';

export class PageObjectManager {

    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly placeOrderPage: PlaceOrderpage;
    readonly regPage: Registrationpage;
    readonly testData: testdata;


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.placeOrderPage = new PlaceOrderpage(this.page);
        this.regPage = new Registrationpage( this.page );
        this.testData = new this.testData( );
    }

}
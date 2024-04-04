import { Page } from "@playwright/test";
import { HomeObjects } from "../pageObjects/homeObject";
import { CheckOutPageObjects } from "../pageObjects/checkOutPageObjects";

export class CheckOutInfoPage extends CheckOutPageObjects {
    private page: Page;

    constructor(page: Page) {
        super()
        this.page= page;
    }
    async enterCheckOutInfoData(firstName:string,lastName:string,postalcode:string){
       await this.page.locator(this.checkOutInfo.firstname_loc()).fill(firstName);
       await this.page.locator(this.checkOutInfo.lastName_loc()).fill(lastName);
       await this.page.locator(this.checkOutInfo.postalCode_loc()).fill(postalcode);
       
    }

    async checkOutInfoBtn(){
        await this.page.locator(this.checkOutInfo.continue_loc()).click()
    }

}
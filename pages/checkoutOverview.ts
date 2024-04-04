import { Page } from "@playwright/test";
import { CheckOutOverViewObjects } from "../pageObjects/checkOutOverObjects";
import { resolve } from "path";

export class CheckOverViewPage extends CheckOutOverViewObjects {
    private page: Page;

    constructor(page: Page) {
        super()
        this.page= page;
    }
    async getCheckOverViewData():Promise<String[][]>{
       const checkOverViewName: string[] = await this.page.locator(this.checkOutOverviewElements.checkOverViewItemName_loc()).allTextContents();
       const checkOverViewDesc:string [] = await this.page.locator(this.checkOutOverviewElements.checkOverViewItemDesc_loc()).allTextContents();
       const checkOverViewPrice:string [] = await this.page.locator(this.checkOutOverviewElements.checkOverViewItemMoney_loc()).allTextContents();
       return new Promise((resolve,reject)=>{
        resolve ([checkOverViewName, checkOverViewDesc, checkOverViewPrice]);

       })
    }

    async checkOverViewFinishButton(){
        await this.page.getByRole("link",{name:this.checkOutOverviewElements.checkOverViewFinish_loc()}).click();
    }
}
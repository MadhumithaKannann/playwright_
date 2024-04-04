import { Page } from "@playwright/test";
import { AddToCartObject } from "../pageObjects/addToCartObject";


export class AddtoCartPage extends AddToCartObject {
    private page: Page;

    constructor(page: Page) {
        super()
        this.page = page;
    }

    async getAddToCartData():Promise<String[][]> {
        const itemNameArr: string[] = await this.page.locator(this.AddToCartObjectElements.itemName_loc()).allTextContents();
        const itemDesc: string[] = await this.page.locator(this.AddToCartObjectElements.itemDesc_loc()).allTextContents();
        //    await this.page.locator(".inventory_item_desc")
        const itemMoney: string[] = await this.page.locator(this.AddToCartObjectElements.itemMoney_loc()).allTextContents();
        return new Promise((resolve, reject) => {
            resolve([itemNameArr, itemDesc, itemMoney]);
        })
    }

    async checkOutButton(){
        await this.page.getByRole("link",{name:this.AddToCartObjectElements.checkOutPage_roleLink()}).click()
    }

}
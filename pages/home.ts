import { Page } from "@playwright/test";
import { HomeObjects } from "../pageObjects/homeObject";
import { Utility } from "../services/utility";

export class Homepage extends HomeObjects {
    private page: Page;

    constructor(page: Page) {
        super()
        this.page= page;
    }

    async getInventryArr():Promise<String[]>{
       const inventryItems:string[] = await this.page.locator(this.homeElements.inventryItem_loc()).allTextContents();
       const inventryPrice:string[] = await this.page.locator(this.homeElements.inventryItemPrice_loc()).allTextContents();
       const inventryDesc:string[] = await this.page.locator(this.homeElements.inventryDescription_loc()).allInnerTexts();
       
       console.warn(inventryItems);
       console.warn(inventryPrice);
       console.warn(inventryDesc);

       const maxMinIdx:number[] =  await Utility.getMaxMinNumIdx(inventryPrice);
       console.warn(maxMinIdx)
       const maxInventry = inventryItems[maxMinIdx[0]];
       const minInventry = inventryItems[maxMinIdx[1]];
       await this.addMaxMinProdutToCart(maxInventry, minInventry);

       return new Promise((resolve,reject)=>{
         resolve([maxInventry, minInventry]);
       })

    }

    async addMaxMinProdutToCart(maxProduct:string, minProduct:string){
        await this.page.pause();

        const maxItem = this.page.locator(this.homeElements.addToCartWithInventry(maxProduct));
        const minItem = this.page.locator(this.homeElements.addToCartWithInventry(minProduct));
        await maxItem.waitFor()
        await maxItem.click();
        await minItem.waitFor()
        await minItem.click();
    //    await this.page.getByRole("button",{name:this.homeElements.inventryAddToCart_btn()}).nth(maxMinArr[1]).click();
    }

async clickCartIcon(){

    await this.page.locator(this.homeElements.addCartIcon_loc()).click();
}


}
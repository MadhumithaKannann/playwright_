import { Page } from "@playwright/test";
import { finishObjectPage } from "../pageObjects/finishObjects";

export class FinishPage extends finishObjectPage{
   
   private page:Page;

   constructor(page:Page){
      super();
      this.page = page;
   } 

  async getfinishMessageData():Promise<string|null>{
      return await this.page.locator(this.finishPageElements.messageForSuccess()).textContent();
    //    await this.page.locator(this.finishPageElements.descriptionText());
  }
   
  async getfinishDescriptionData():Promise<string|null>{
    return  await this.page.locator(this.finishPageElements.descriptionText()).textContent();
}
 

   
}
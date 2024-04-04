import { Page } from "@playwright/test";
import { LoginObjects } from "../pageObjects/login";

export class Login extends LoginObjects{
   
   private page:Page;

   constructor(page:Page){
      super();
      this.page = page;
   } 

   async loginToSauce(url:string, userName:string, password:string){
    await this.page.goto(url);
    await this.page.locator(this.loginElements.userName_locator()).fill(userName);
    await this.page.locator(this.loginElements.password_locator()).fill(password);
    await this.page.getByRole('button', {name:this.loginElements.loginBtn_ByRoleBtn()}).click();

   }

   
}
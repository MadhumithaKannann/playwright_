import { Page } from "@playwright/test";
import { Login } from "./login";
import { Homepage } from "./home";
import { AddtoCartPage } from "./addToCart";
import { CheckOutInfoPage } from "./checkoutInfo";
import { CheckOverViewPage } from "./checkoutOverview";
import { finishObjectPage } from "../pageObjects/finishObjects";
import { FinishPage } from "./finish";

export class ManagePage{

    private loginPage: Login;
    private homepage:Homepage;
    private addToCartPage:AddtoCartPage;
    private checkOutInfoPage:CheckOutInfoPage;
    private checkOverViewPage:CheckOverViewPage;
    private finishMessagePage:FinishPage;

    constructor(page:Page){

        this.loginPage = new Login(page);
        this.homepage = new Homepage(page);
        this.addToCartPage = new AddtoCartPage(page);
        this.checkOutInfoPage = new CheckOutInfoPage(page);
        this.checkOverViewPage = new CheckOverViewPage(page);
        this.finishMessagePage = new FinishPage(page);
        
        //checkout
        //payment

    }

    getLoginPage():Login{

        return this.loginPage;
        
    }
    geHomePage():Homepage{

        return this.homepage;
        
    }
     getAddTOCartPage():AddtoCartPage{
        return this.addToCartPage;
     }

     getcheckOutInfoPage(): CheckOutInfoPage {
        return this.checkOutInfoPage;
     }
      
     getCheckOverViewPage(): CheckOverViewPage{
        return this.checkOverViewPage;
     }


     getFinishPage(): FinishPage{
        return this.finishMessagePage;
     }
}
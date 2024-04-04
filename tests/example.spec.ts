import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';
import { ManagePage } from '../pages/managePage';
import { Homepage } from '../pages/home';
import { AddtoCartPage } from '../pages/addToCart';
import { CheckOutInfoPage } from '../pages/checkoutInfo';
import { CheckOverViewPage } from '../pages/checkoutOverview';
import { FinishPage } from '../pages/finish';

test('has title', async ({ page }) => {

  const managePage = new ManagePage(page);
  const loginPage:Login = managePage.getLoginPage();
  await loginPage.loginToSauce('https://www.saucedemo.com/v1/', "standard_user", "secret_sauce");
  const homeObj:Homepage= managePage.geHomePage();
  const addedItemsToCart:String[] = await homeObj.getInventryArr();
  await homeObj.clickCartIcon()
  const addTOCartPage:AddtoCartPage = managePage.getAddTOCartPage();
  const cartData:String[][] = await addTOCartPage.getAddToCartData();  
  console.warn("ItemName ->",cartData[0]);
  console.warn(cartData[1]);
  console.warn(cartData[2]);
  expect(addedItemsToCart).toEqual(cartData[0]);
  await addTOCartPage.checkOutButton();
  const checkOutinfo:CheckOutInfoPage = managePage.getcheckOutInfoPage();
  await checkOutinfo.enterCheckOutInfoData("Madhu","Kannan","637409");
  await checkOutinfo.checkOutInfoBtn();
  const checkOverViewPage:CheckOverViewPage = await managePage.getCheckOverViewPage();
  const overViewData:String[][] = await checkOverViewPage.getCheckOverViewData();
  console.log(overViewData[0]);
  console.log(overViewData[1]);
  console.log(overViewData[2]);
  expect(overViewData[0]).toEqual(cartData[0])

  await checkOverViewPage.checkOverViewFinishButton();
  const finishPageInfo: FinishPage= managePage.getFinishPage();
  const successMessage:string|null = await finishPageInfo.getfinishMessageData();

  expect(successMessage).toEqual("THANK YOU FOR YOUR ORDER");

  const finishPageDescription:string|null = await finishPageInfo.getfinishDescriptionData();

  // expect(finishPageDescription).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get/n there!");

  await page.pause();
  // await page.goto('https://www.saucedemo.com/v1/');
  // await page.locator('#user-name').fill("standard_user", {timeout:500});
  // await page.locator('[data-test="password"]').fill("secret_sauce");
  // await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.getByText('$29.99').click();
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await page.getByText('Sauce Labs Backpack').click();
  await page.getByText('carry.allTheThings() with the').click();
  await page.getByText('$').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: '<- Back' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByText('Sauce Labs Backpackcarry.').click();
  await page.getByRole('button', { name: 'REMOVE' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Mitha');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Madhu');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('436346346');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByText('SauceCard #').click();
  await page.getByText('Item total: $').click();
  await page.getByText('Tax: $').click();
  await page.getByText('Total: $32.39').click();
  await page.getByRole('link', { name: 'FINISH' }).click();
  await page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' }).click();

 //
 await page.pause();
});

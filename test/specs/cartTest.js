import addtoCart from "../helpers/addtoCart";
import appLaunch from "../helpers/appLaunch";
import cartPage from "../pageobjects/cart.page";
import {expect as chaiExpect} from "chai";
import commonElements from "../pageobjects/commonElements";
//import checkoutPage from "../pageobjects/checkout.page";

describe("Cart Functionality", () => {

    beforeEach(async() => {
        await appLaunch.appLaunch();
        await addtoCart.addTicket();
        await commonElements.Cart.click();
    })

    afterEach(async() => {
        //await browser.reset()
    })

    it ('should be able to see page title present',async () => {
         await cartPage.cartTitle.waitForDisplayed();
         const title = await cartPage.cartTitle.getText();
         chaiExpect(title).to.equal('My Cart');
    });

     it ('should be able to remove a product from the cart', async () => {
         await cartPage.removeCTA.waitForDisplayed();
         await cartPage.removeCTA.click();
         const isCartEmpty = await cartPage.isCartEmpty();
         chaiExpect(isCartEmpty).to.be.true;

     });

    //  it('should be able to proceed to checkout', async () => {
    //      await cartPage.checkoutCTA.waitForDisplayed();
    //      await cartPage.checkoutCTA.click();
    //      const isDisplayed = await checkoutPage.isCheckoutPageDisplayed();
    //      chaiExpect(isDisplayed).to.be.true;
    //  }); 
})
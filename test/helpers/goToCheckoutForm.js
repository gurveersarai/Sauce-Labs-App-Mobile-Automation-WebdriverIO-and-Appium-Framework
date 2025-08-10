import commonElements from "../pageobjects/commonElements";
import { addTicket } from "./addtoCart";
import cartPage from "../pageobjects/cart.page";
import loginPage from "../pageobjects/login.page";
import checkoutPage from "../pageobjects/checkout.page";

async function goToCheckoutForm() {
        await addTicket();
        await commonElements.Cart.click();
        await cartPage.checkoutCTA.waitForDisplayed();
        await cartPage.checkoutCTA.click();
        await loginPage.Login("tomsmith", "SuperSecretPassword!");
        const isDisplayed = await checkoutPage.isCheckoutPageDisplayed();
}

export default {
    goToCheckoutForm,
}
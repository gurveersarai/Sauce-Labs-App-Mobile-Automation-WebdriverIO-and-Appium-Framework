import appLaunch from "../helpers/appLaunch";
import cartPage from "../pageobjects/cart.page"
import checkoutPage from "../pageobjects/checkout.page";
import goToCheckoutForm from "../helpers/goToCheckoutForm";
import path from "path";
import fs from "fs";
import {expect as chaiExpect} from "chai";
import tearDown from "../helpers/tearDown";
import paymentPage from "../pageobjects/payment.page";
import fillCheckoutForm from "../helpers/fillCheckoutForm";

describe("Checkout Form Functionality", () => {
    
    beforeEach(async() => {
        await appLaunch.appLaunch();   
        await goToCheckoutForm.goToCheckoutForm();
    })

    afterEach(async() => {
        await tearDown.tearDown()
    })

    it('should be able to see the Checkout Title Present', async () => {
        const checkoutTitleDisplayed = await checkoutPage.checkoutTitle.isDisplayed();
        chaiExpect(checkoutTitleDisplayed).to.be.true;

    }),

    it('should not be able to proceed with an empty form', async () => {
        await checkoutPage.toPaymentCTA.click();
        const errorMessage = await checkoutPage.fullNameErrorMessage.getText();
        chaiExpect(errorMessage).to.equal('Please provide your full name.');
    }),

    it('should be able to fill in the form and proceed to the next step', async () => {
        await fillCheckoutForm.fillCheckoutForm();
        await checkoutPage.toPaymentCTA.click();
        const isPaymentPageDisplayed = await paymentPage.isPaymentPageDisplayed();
        chaiExpect(isPaymentPageDisplayed).to.be.true;
    });

});


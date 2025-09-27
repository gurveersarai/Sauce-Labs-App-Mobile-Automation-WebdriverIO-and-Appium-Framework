import appLaunch from "../helpers/appLaunch";
import checkoutPage from "../pageobjects/checkout.page";
import goToCheckoutForm from "../helpers/goToCheckoutForm";
import path from "path";
import fs from "fs";
import {expect as chaiExpect} from "chai";
import tearDown from "../helpers/tearDown";
import paymentPage from "../pageobjects/payment.page";
import fillCheckoutForm from "../helpers/fillCheckoutForm";
import fillPaymentForm from "../helpers/fillPaymentForm";

describe("Payment Form Functionality", () => {
    
    beforeEach(async() => {
        await appLaunch.appLaunch();   
        await goToCheckoutForm.goToCheckoutForm();
        await fillCheckoutForm.fillCheckoutForm();
        await checkoutPage.toPaymentCTA.click();
        await paymentPage.paymentTitle.waitForDisplayed();
    })

    afterEach(async() => {
        await tearDown.tearDown()
    })

    it('should not be able to proceed with an empty form', async () => {
        await paymentPage.reviewOrderCTA.click();
        const errorMessage = await paymentPage.fullNameErrorMessage.getText();
        chaiExpect(errorMessage).to.equal('Value looks invalid.');
    }),

    it('should be able to see the visa and mastercard icon present', async() => {
        const visaIconDisplayed = await paymentPage.visaIcon.isDisplayed();
        const masterCardIconDisplayed = await paymentPage.masterCardIcon.isDisplayed();
        chaiExpect(visaIconDisplayed).to.be.true;
        chaiExpect(masterCardIconDisplayed).to.be.true;
    }),

    it('should be able to uncheck the billing address checkbox', async() => { 
        await paymentPage.billingAddressCTA.waitForDisplayed();
        await paymentPage.billingAddressCTA.click();
        const isBillingAddressChecked = await paymentPage.billingAddressCTA.isSelected();
        const isFormDisplayed = await paymentPage.shippingAddressForm.isDisplayed();
        chaiExpect(isBillingAddressChecked).to.be.false;
        chaiExpect(isFormDisplayed).to.be.true;

    }),

    it('should be able to fill in the form and proceed to the next step', async () => {
        await fillPaymentForm.fillPaymentForm();
        await paymentPage.reviewOrderCTA.click();
        const reviewOrderText = await checkoutPage.reviewOrderText.getText();
        chaiExpect(reviewOrderText).to.equal('Review your order');
    });

});


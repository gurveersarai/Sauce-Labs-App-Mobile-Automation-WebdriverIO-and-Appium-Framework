import appLaunch from "../helpers/appLaunch";
import cartPage from "../pageobjects/cart.page"
import checkoutPage from "../pageobjects/checkout.page";
import goToCheckoutForm from "../helpers/goToCheckoutForm";
import path from "path";
import fs from "fs";
import {expect as chaiExpect} from "chai";
import tearDown from "../helpers/tearDown";
import paymentPage from "../pageobjects/payment.page";

describe("Checkout Form Functionality", () => {
    let personalDetails;
    const filePath = path.join(process.cwd(), 'test', 'testData', 'shippingAddress.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    personalDetails = JSON.parse(fileContent).shippingAddress;

    beforeEach(async() => {
        await appLaunch.appLaunch();   
        await goToCheckoutForm.goToCheckoutForm();
        
    })

    afterEach(async() => {
        await tearDown.tearDown()
    })

    it('should be able to see the Checkout Title Present', async () => {
        const checkoutTitleDisplayed = await cartPage.checkoutTitle.isDisplayed();
        chaiExpect(checkoutTitleDisplayed).to.be.true;

    }),

    it('should not be able to proceed with an empty form', async () => {
        await checkoutPage.toPaymentCTA.click();
        const errorMessage = await checkoutPage.fullNameErrorMessage.getText();
        chaiExpect(errorMessage).to.equal('Please provide your full name.');
    }),

    it('should be able to fill in the form and proceed to the next step', async () => {
        const { FullName, addressLine1, addressLine2, city, state, zipCode, country } = personalDetails;
        await checkoutPage.enterFormDetails(personalDetails);
        await checkoutPage.toPaymentCTA.click();
        const isPaymentPageDisplayed = await paymentPage.isPaymentPageDisplayed();
        chaiExpect(isPaymentPageDisplayed).to.be.true;
    });

});


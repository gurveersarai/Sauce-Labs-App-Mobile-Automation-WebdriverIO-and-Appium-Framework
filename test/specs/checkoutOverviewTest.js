import appLaunch from "../helpers/appLaunch"
import fillCheckoutForm from "../helpers/fillCheckoutForm";
import fillPaymentForm from "../helpers/fillPaymentForm";
import goToCheckoutForm from "../helpers/goToCheckoutForm";
import tearDown from "../helpers/tearDown";
import cartPage from "../pageobjects/cart.page";
import checkoutPage from "../pageobjects/checkout.page";
import checkoutConfirmationPage from "../pageobjects/checkoutConfirmation.page";
import commonElements from "../pageobjects/commonElements";
import paymentPage from "../pageobjects/payment.page";
import productsPage from "../pageobjects/products.page";
import {expect as chaiExpect} from "chai";
describe ("Checkout Overview and Confirmation Functionality", () => {
    
    beforeEach(async() => {
        await appLaunch.appLaunch();
        await goToCheckoutForm.goToCheckoutForm(); 
        await fillCheckoutForm.fillCheckoutForm();
        await checkoutPage.toPaymentCTA.click();
        await fillPaymentForm.fillPaymentForm();
        await paymentPage.reviewOrderCTA.click();
    }),

    afterEach(async() => {
        await tearDown.tearDown()
    })

    it('should be able to see the Checkout Overview Title Present', async () => {
        const overviewTitle= await checkoutPage.checkoutTitle.getText()
        chaiExpect(overviewTitle).to.equal('Checkout');
    })

    it('should be able to extract the delivery details', async () => {
        await driver.pause(1000)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/arrivalTV"))')
        const deliveryDetails = await checkoutPage.deliveryDetails();
        console.log('Delivery Details:', deliveryDetails);
        chaiExpect(deliveryDetails).to.include('DHL');;
    })

    it('should be able to see the purchase total', async () => {
        const totalPrice = await checkoutPage.purchaseTotal();
        chaiExpect(totalPrice).to.include('$');
    })

    it('should be able to place an order and see the confirmation message', async () => {
        await checkoutPage.placeOrderCTA.click();
        await checkoutConfirmationPage.confirmationMessage.waitForDisplayed({ timeout: 5000, message: "Confirmation message did not load in time" });
        const confirmationMessage = await checkoutConfirmationPage.confirmationMessage.getText();
        const checkoutCompleteTitle = await checkoutConfirmationPage.confirmationTitle.getText();
        chaiExpect(confirmationMessage).to.include('Thank you for your order');
        chaiExpect(checkoutCompleteTitle).to.include('Checkout Complete');
    })

    it('should be able to be redirected to the homepage after clicking continue shopping', async () => {
        await checkoutPage.placeOrderCTA.click();
        await checkoutConfirmationPage.continueShoppingCTA.click();
        await productsPage.productRecyclerView.waitForDisplayed({ timeout: 5000, message: "Product RecyclerView did not load in time" });
        const isProductRecyclerViewDisplayed = await productsPage.productRecyclerView.isDisplayed();
        await commonElements.Cart.click();
        const cartState = await cartPage.isCartEmpty();
        chaiExpect(isProductRecyclerViewDisplayed).to.be.true;
        chaiExpect(cartState).to.be.true;
})


})

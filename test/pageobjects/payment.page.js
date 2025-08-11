class paymentPage {

    get paymentTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV');
    }

    get visaIcon() {
        return $('~Visa card');
    }

    get masterCardIcon() {
        return $('~Mastercard');
    }
    
    get reviewOrderCTA() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn');
    }

    get billingAddressCTA() {
        return $('id=com.saucelabs.mydemoapp.android:id/billingAddressCB');
    }
    
    get fullNameErrorMessage() {
        return $('id=com.saucelabs.mydemoapp.android:id/nameErrorTV');
    }

    get shippingAddressForm() {
        return $('id=com.saucelabs.mydemoapp.android:id/checkoutInfoCL');
    }

    async isPaymentPageDisplayed() {
        await this.paymentTitle.waitForDisplayed();
        return await this.paymentTitle.isDisplayed();
    }

    async enterPaymentDetails(fullName, cardNumber, expDate, securityCode) {
        await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue(fullName);
        await $('id=com.saucelabs.mydemoapp.android:id/cardNumberET').setValue(cardNumber);
        await $('id=com.saucelabs.mydemoapp.android:id/expirationDateET').setValue(expDate);
        await $('id=com.saucelabs.mydemoapp.android:id/securityCodeET').setValue(securityCode);
    }
    

}
export default new paymentPage()
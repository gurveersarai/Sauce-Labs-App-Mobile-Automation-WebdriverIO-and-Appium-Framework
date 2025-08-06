class paymentPage {

    get paymentTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV');
    }

    get visaIcon() {
        return $('~Visa card');
    }

    get masterCardIcon() {
        return $('~MasterCard');
    }

    get reviewOrderCTA() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn');
    }

    get billingAddressCTA() {
        return $('com.saucelabs.mydemoapp.android:id/billingAddressCB');
    }

    get fullNameErrorMessage() {
        return $('com.saucelabs.mydemoapp.android:id/nameErrorTV');
    }

    async isPaymentPageDisplayed() {
        await this.paymentTitle.waitForDisplayed();
        return await this.paymentTitle.isDisplayed();
    }

    async enterPaymentDetails(fullName, cardNumber, expDate, securityCode) {
        await $('com.saucelabs.mydemoapp.android:id/nameET').setValue(fullName);
        await $('com.saucelabs.mydemoapp.android:id/cardNumberET').setValue(cardNumber);
        await $('com.saucelabs.mydemoapp.android:id/expirationDateET').setValue(expDate);
        await $('com.saucelabs.mydemoapp.android:id/securityCodeET').setValue(securityCode);
    }
    

}
export default new paymentPage()
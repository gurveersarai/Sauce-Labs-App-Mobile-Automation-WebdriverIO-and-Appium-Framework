class checkoutPage {
    get checkoutTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV');
    }

    get toPaymentCTA() {
        return $('~Saves user info for checkout');
    }

    get confirmationAddress() {
        return $('id=com.saucelabs.mydemoapp.android:id/addressLL');
    }

    get confirmationPaymentAddress() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentLL');
    }

    get placeOrderCTA() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn');
    }

    get fullNameErrorMessage() {
        return $('id=com.saucelabs.mydemoapp.android:id/fullNameErrorTV');
    }

    get reviewOrderText() {
        return $('id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV')
    }

    async enterFormDetails({fullName, addressLine1, addressLine2, city, state, zipCode, country}) {
        await $('id=com.saucelabs.mydemoapp.android:id/fullNameET').setValue(fullName);
        await $('id=com.saucelabs.mydemoapp.android:id/address1ET').setValue(addressLine1);
        await $('id=com.saucelabs.mydemoapp.android:id/address2ET').setValue(addressLine2);
        await $('id=com.saucelabs.mydemoapp.android:id/cityET').setValue(city);
        await $('id=com.saucelabs.mydemoapp.android:id/stateET').setValue(state);
        await $('id=com.saucelabs.mydemoapp.android:id/zipET').setValue(zipCode);
        await $('id=com.saucelabs.mydemoapp.android:id/countryET').setValue(country);
    }

    async isCheckoutPageDisplayed() {
        await this.checkoutTitle.waitForDisplayed();
        return await this.checkoutTitle.isDisplayed();
    }

    async deliveryDetails() {
        const address = await this.confirmationAddress.getText();
        const deliveryCourier = await $('id=com.saucelabs.mydemoapp.android:id/dhlTV').getText();
        const arrivalTime = await $('id=com.saucelabs.mydemoapp.android:id/arrivalTV').getText();
        const deliveryCost = await $('id=com.saucelabs.mydemoapp.android:id/amountTV').getText();
        return `\n${address}\n${deliveryCourier}\n${arrivalTime}\n${deliveryCost}`;
    }

    async purchaseTotal() {
        const totalPrice = await $('id=com.saucelabs.mydemoapp.android:id/totalAmountTV').getText();
        return totalPrice;
    }
}

export default new checkoutPage();
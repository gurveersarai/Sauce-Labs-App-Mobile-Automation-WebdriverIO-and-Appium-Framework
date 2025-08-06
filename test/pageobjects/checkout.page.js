class checkout {
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

    async enterFormDetails(firstName, lastName, addressLine, addressLine2, city, state, zipCode, country) {
        await $('id=com.saucelabs.mydemoapp.android:id/firstNameET').setValue(firstName);
        await $('id=com.saucelabs.mydemoapp.android:id/lastNameET').setValue(lastName);
        await $('id=com.saucelabs.mydemoapp.android:id/addressLine1ET').setValue(addressLine);
        await $('id=com.saucelabs.mydemoapp.android:id/addressLine2ET').setValue(addressLine2);
        await $('id=com.saucelabs.mydemoapp.android:id/cityET').setValue(city);
        await $('id=com.saucelabs.mydemoapp.android:id/stateET').setValue(state);
        await $('id=com.saucelabs.mydemoapp.android:id/zipCodeET').setValue(zipCode);
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
        const deliveryTime = await $('id=com.saucelabs.mydemoapp.android:id/arrivalTV').getText();
        return `\n${address}\n${deliveryCourier}\n${arrivalTime}\n${deliveryTime}`;
    }

    async purchaseTotal() {
        const totalPrice = await $('id=com.saucelabs.mydemoapp.android:id/totalAmountTV').getText();
        return totalPrice;
    }
}

export default new checkoutPage();
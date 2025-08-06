class checkoutConfirmationPage {

    get confirmationTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/completeTV');
    }

    get confirmationMessage() {
        return $('id=com.saucelabs.mydemoapp.android:id/thankYouTV');

    }

    get continueShoppingCTA() {
        return $('id=com.saucelabs.mydemoapp.android:id/shoopingBt')
    }
}

export default new checkoutConfirmationPage();
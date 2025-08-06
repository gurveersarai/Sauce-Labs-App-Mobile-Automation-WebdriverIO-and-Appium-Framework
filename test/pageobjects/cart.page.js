class cart {

    get noItemsText() {
        return $('id=com.saucelabs.mydemoapp.android:id/noItemsTV');
    }

    get removeCTA() {
        return $('~Removes product from cart')
    }

    get totalPrice() {
        return $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV');
    }

    get amountOfItems() {
        return $('id=com.saucelabs.mydemoapp.android:id/itemsTV');
    }

    get checkoutCTA() {
        return $('~Checkout CTA');
    }

    get cartTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV');
    }
    com.saucelabs.mydemoapp.android:id/productTV

    get firstNameErrorMessage() {
        return $('id=com.saucelabs.mydemoapp.android:id/firstNameErrorTV');
    }

    async isCartEmpty() {
        if (await this.noItemsText.isDisplayed()) {
            console.log("Cart is empty");
            return true;
        }
        else {
            console.log("Cart is not empty");
            return false;
        }
    }

    async cartDetails() {
        const totalPrice = await this.totalPrice.getText();
        const amountOfItems = await this.amountOfItems.getText();
        return {
            totalPrice: totalPrice,
            amountOfItems: amountOfItems
        };
    }
    
}
 export default new cart();
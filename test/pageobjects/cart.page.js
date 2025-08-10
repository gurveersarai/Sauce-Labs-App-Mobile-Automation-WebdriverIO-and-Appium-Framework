class cartPage {

    get noItemsText() {
        return $('id=com.saucelabs.mydemoapp.android:id/noItemTitleTV');
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
        return $('id=com.saucelabs.mydemoapp.android:id/cartBt');
    }

    get checkoutTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV');
    }
    
    async isCartEmpty() {
        try {
            await this.noItemsText.waitForDisplayed({ timeout: 5000});
            console.log('Cart is empty');
            return true;
        } catch {
            console.log('Cart is not empty');
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
 export default new cartPage();
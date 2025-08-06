class productDetails {
    get productTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV');
    }

    get quantityAccount() {
        return $('id=com.saucelabs.mydemoapp.android:id/noTV')
    }

    get addToCartButton() {
        return $('~Tap to add product to cart');
    }

    get productPrice() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV');
    }

    async alterQuantity(quantityID, amount) {
        const quantityButton = await $(`~{quantityID} item quantity`);
        const currentQuantity = await this.quantityAccount.getText();
        for(let i=0; i < amount; i++) {
            await quantityButton.click();
            if (quantityID === 'decrease' && parseInt(currentQuantity) < amount) {
                console.log(`Cannot decrease quantity below ${amount}`);
                break;
            }
        }
        return await parseInt(quantityAccount.getText());
    }

    async checkRadioButtonSelected(radioButtonId) {
        const radioButton = await $(`~{radioButtonId} color`)
        if (await radioButton.isSelected()){
            console.log(`${radioButtonId} is selected`);
            return true;
        }
        else if (!await radioButton.isExisting()) {
            console.log(`${radioButtonId} does not exist`);
            return null;
        }
        else {
            console.log(`${radioButtonId} is not selected`);
            return false;
        }
    }

    async selectRadioButton(radioButtonId) {
        const radioButton = await $(`~{radioButtonId} color`)
        const radioisSelected = checkRadioButtonSelected(radioButtonId);
        if(radioisSelected == false) {
            await radioButton.click();
            this.checkRadioButtonSelected(radioButtonId);
        }
    }

    async addToCart() {
        console.log("Current Quantity: " + parseInt(await this.quantityAccount.getText()));
        if (parseInt(await this.quantityAccount.getText()) >= 1 ) {
        await this.addToCartButton.click();
        console.log("Products added to cart"); 
        }
        else {
            console.log("Cannot add product to cart, quantity is zero");
        }
    }
}


export default new productDetails();
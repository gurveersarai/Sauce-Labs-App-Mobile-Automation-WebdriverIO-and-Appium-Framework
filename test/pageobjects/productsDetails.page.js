class productDetails {
    get productTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV');
    }

    get quantityAmount() {
        return $('id=com.saucelabs.mydemoapp.android:id/noTV')
    }

    get addToCartButton() {
        return $('~Tap to add product to cart');
    }

    get productPrice() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV');
    }

    async alterQuantity(quantityID, amount) {
        const quantityButton = await $(`~${quantityID} item quantity`);
        const currentQuantity = await this.quantityAmount.getText();
        for(let i=0; i < amount; i++) {
            await quantityButton.click();
            if (quantityID === 'decrease' && parseInt(currentQuantity) < amount) {
                console.log(`Cannot decrease quantity below ${amount}`);
                break;
            }
        }
        return await parseInt(await this.quantityAmount.getText());
    }

    async checkRadioButtonSelected(radioButtonId) {
        const radioButton = await $(`~${radioButtonId} color`)
        const exists = await radioButton.isExisting();

        const selectionIndicator = await $(
            `//*[@content-desc="${radioButtonId} color"]/..//*[@content-desc="Indicates when color is selected"]`
        );
        
        // if (await exists == false) {
        //     console.log(`${radioButtonId} does not exist`);
        //     return null;
        // }
        if (await selectionIndicator.isExisting()) {
            console.log(`${radioButtonId} is selected`);
            return true;
        }
        else {
            console.log(`${radioButtonId} is not selected`);
            return false;
        }
    
    }

    async selectRadioButton(radioButtonId) {
        const radioButton = await $(`~${radioButtonId} color`)
        if(await radioButton.isExisting() && await this.checkRadioButtonSelected(radioButtonId) === false) {
            await radioButton.click();
        }
    }

    async addToCart() {
        console.log("Current Quantity: " + parseInt(await this.quantityAmount.getText()));
        if (parseInt(await this.quantityAmount.getText()) >= 1 ) {
        await this.addToCartButton.click();
        console.log("Products added to cart"); 
        }
        else {
            console.log("Cannot add product to cart, quantity is zero");
        }
    }
}


export default new productDetails();
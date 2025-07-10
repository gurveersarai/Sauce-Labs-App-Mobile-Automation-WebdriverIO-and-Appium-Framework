import { browser } from "@wdio/globals";

class productsPage {

    get productRecyclerView() {
        return $('id=com.saucelabs.mydemoapp.android:id/productRV')
    }

    get productTile() {
        return $('android=new UiSelector().text("Sauce Labs Backpack")')
    }

    get productImages() {
        return $$('id=com.saucelabs.mydemoapp.android:id/productIV')
    }

    async isDialogDisplayed() {
        const dialog = await $('.android.widget.FrameLayout');
        const dialogFlag = false;
        if (!(await dialog.isDisplayed())) {
            console.log("Dialog is not Displayed") // Wait for the dialog to appear
            
        }
        else{
            console.log("Dialog is Displayed");
            dialogFlag = true;
            
        }
        return dialogFlag;
    }

    async productNames() { 
        const productElementNames = await $$('id:com.saucelabs.mydemoapp.android:id/titleTV')
        const productNames = [];
        for (const element of productElementNames) {
            const name = await element.getText();
            productNames.push(name);
        }
        return productNames;
    }

    async productPrices() {
        const productElementPrices = await $$('id:com.saucelabs.mydemoapp.android:id/priceTV');
        const productPrices = [];
        for (const element of productElementPrices) {
            const price = await element.getText();
            productPrices.push(price);
        }
        return productPrices;

    }

    


}
export default new productsPage();

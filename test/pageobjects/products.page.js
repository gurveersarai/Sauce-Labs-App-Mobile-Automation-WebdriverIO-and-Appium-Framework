import { browser } from "@wdio/globals";

class productsPage {

    async productNames() {
        const productElementNames = await $$('id:com.saucelabs.mydemoapp.android:id/titleTV')
        const productNames = [];
        for (const element of productElementNames) {
            const name = await element.getText();
            productNames.push(name);
        }
        return productNames;
    }
    get productRecyclerView() {
        return $('id=com.saucelabs.mydemoapp.android:id/productRV')
    }


}
export default new productsPage();

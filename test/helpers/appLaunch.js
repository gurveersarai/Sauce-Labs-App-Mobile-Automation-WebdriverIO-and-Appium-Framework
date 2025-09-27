import productsPage from "../pageobjects/products.page"

async function appLaunch() {
    await driver.execute('mobile: activateApp', { appId: 'com.saucelabs.mydemoapp.android' });
    await productsPage.productRecyclerView.waitForDisplayed({timeout: 6000, message: "Product RecyclerView did not load in time"});
}

export default {
    appLaunch
}
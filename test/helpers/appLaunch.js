import productsPage from "../pageobjects/products.page"

async function appLaunch() {
    await productsPage.productRecyclerView.waitForDisplayed({timeout: 6000, message: "Product RecyclerView did not load in time"});
}

export default {
    appLaunch
}
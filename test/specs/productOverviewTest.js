import commonElements from "../pageobjects/commonElements";
import {expect as chaiExpect} from "chai";
import productsPage from "../pageobjects/products.page";
import appLaunch from "../helpers/appLaunch.js";
import productsDetailsPage from "../pageobjects/productsDetails.page.js";
import tearDown from "../helpers/tearDown.js";
describe("Product Overview Functionality", () => {
    
    beforeEach(async () => {
        // Navigate to the page that requires scrolling
        await appLaunch.appLaunch();
        await console.log('App launched successfully');
    });

    afterEach(async () => {
        await tearDown.tearDown();
    });

    it ('should be able to exact title of the product overview page', async () => {
        await commonElements.pageTitle.waitForDisplayed();
        const title = await commonElements.pageTitle.getText();
        chaiExpect(title).to.equal("Products");
    });

    it("should be able to rate a product", async () => {
        const ratingContainer = await productsPage.ratingContainer;
        const ratings = await ratingContainer.$$(`android.widget.ImageView`);
        const ratingCount = ratings.length;
       
        if(ratingCount >= 5) {
            await ratings[4].click();
            const DialogDisplayed = productsPage.isDialogDisplayed();
            chaiExpect(await DialogDisplayed).to.be.true;
        }
        await $('id=com.saucelabs.mydemoapp.android:id/closeBt').click();
        await browser.waitUntil(async () => {
            return !(await productsPage.isDialogDisplayed());
         }, {
            timeout: 10000,
            timeoutMsg: 'Dialog did not close within 5 seconds'
         });
         const isDialogVisible = await productsPage.isDialogDisplayed();
         chaiExpect(await isDialogVisible).to.be.false;

    });

    it("should be able to extract all product names", async () => {
        const productNames = await productsPage.productNames();
        productNames.forEach(name => {
            console.log(name);
            chaiExpect(name).to.be.a('string').that.is.not.empty;
        });
    });

    it("should be able to extract all product prices", async () => {
        const productPrices = await productsPage.productPrices();
        productPrices.forEach(price => {
            console.log(price);
            chaiExpect(price).to.be.a('string').that.is.not.empty;
        })
    });

    it("should be able to click onto a product and redirect to the product page", async () => {
        await productsPage.productImages[0].click()
        const productPageTitle = await productsDetailsPage.productTitle.getText();
        chaiExpect(await productPageTitle).to.equal("Sauce Labs Backpack");
    });

});
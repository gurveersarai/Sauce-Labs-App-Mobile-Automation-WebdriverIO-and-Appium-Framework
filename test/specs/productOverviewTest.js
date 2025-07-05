import commonElements from "../pageobjects/commonElements";
import {expect as chaiExpect} from "chai";
import productsPage from "../pageobjects/products.page";
describe("Product Overview Functionality", () => {

    it ('should be able to exact title of the product overview page', async () => {
        await commonElements.pageTitle.waitForDisplayed();
        const title = await commonElements.pageTitle.getText();
        chaiExpect(title).to.equal("Product Overview");
    });

    it("should be able to rate a product", async () => {

    });

    it("should be able to extract all product names", async () => {
        const productNames = await productsPage.productNames();
    });

    it("should be able to extract all product prices", async () => {

    });

    it("should be able to click onto a product and redirect to the product page", async () => {

    });

});
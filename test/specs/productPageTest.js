import appLaunch from "../helpers/appLaunch";
import tearDown from "../helpers/tearDown";
import productsPage from "../pageobjects/products.page";
import productsDetailsPage from "../pageobjects/productsDetails.page";
import {expect as chaiExpect} from "chai";

describe("Product Page Functionality", () => {

    beforeEach(async () => {
        await appLaunch.appLaunch();
        await productsPage.productImages[0].click();
    })

    afterEach(async () => {
        await tearDown.tearDown();
    })

    it ("should be able to extract the product title", async () => {
        await productsDetailsPage.productTitle.waitForDisplayed();
        const title = await productsDetailsPage.productTitle.getText();
        console.log(`Product Title: ${title}`);
        chaiExpect(title).to.be.a('string').that.is.not.empty;
    }); 

    it("should be able to extract the product price", async() => {
        await productsDetailsPage.productPrice.waitForDisplayed();
        const price = await productsDetailsPage.productPrice.getText();
        console.log(`Product Price: ${price}`);
        chaiExpect(price).to.be.a('string').that.is.not.empty;
    })

    it.only("should be able to see the black radio button selected by default", async () => {
        const blackRadioBtnSelected = await productsDetailsPage.checkRadioButtonSelected('Black');
        chaiExpect(blackRadioBtnSelected).to.be.true;

    });

    it("should be able to select a new radio button colour ", async () => {
        await productsDetailsPage.selectRadioButton('Green');
        chaiExpect(await productsDetailsPage.checkRadioButtonSelected('Green')).to.be.true;
    });

    it("should be able to decrement the product quantity", async () => {
        const currentQuantity = parseInt(await productsDetailsPage.quantityAccount.getText())
        const newQuantity = await productsDetailsPage.alterQuantity('decrease', 1);
        chaiExpect(newQuantity).to.equal(currentQuantity - 1);
    });

    it("should be able to increment the product quantity", async () => {
        const currentQuantity = parseInt(await productsDetailsPage.quantityAccount.getText())
        const newQuantity = await productsDetailsPage.alterQuantity('increase', 5);
        chaiExpect(newQuantity).to.equal(currentQuantity + 5);
    });

    it("should be able to add the product to the cart", async () => {
        await productsDetailsPage.alterQuantity('increase', 5)
        await productsDetailsPage.addToCart();
        const cartCount = await $('id=com.saucelabs.mydemoapp.android:id/cartCountTV');
        chaiExpect(await parseInt(cartCount.getText())).to.equal('5');
    });

});
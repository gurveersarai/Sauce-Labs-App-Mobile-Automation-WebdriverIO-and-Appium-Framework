import appLaunch from "../helpers/appLaunch";
import tearDown from "../helpers/tearDown";
import commonElements from "../pageobjects/commonElements";
import productsPage from "../pageobjects/products.page";
import productDetails from "../pageobjects/productsDetails.page";
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
        await productDetails.productTitle.waitForDisplayed();
        const title = await productDetails.productTitle.getText();
        console.log(`Product Title: ${title}`);
        chaiExpect(title).to.be.a('string').that.is.not.empty;
    }); 

    it("should be able to extract the product price", async() => {
        await productDetails.productPrice.waitForDisplayed();
        const price = await productDetails.productPrice.getText();
        console.log(`Product Price: ${price}`);
        chaiExpect(price).to.be.a('string').that.is.not.empty;
    })

    it("should be able to see the black radio button selected by default", async () => {
        const blackRadioBtnSelected = await productDetails.checkRadioButtonSelected('Black');
        chaiExpect(blackRadioBtnSelected).to.be.true;

    });

    it("should be able to select a new radio button colour ", async () => {
        await productDetails.selectRadioButton('Green');
        const greenRadioBtnSelected = await productDetails.checkRadioButtonSelected('Green');
        chaiExpect(greenRadioBtnSelected).to.be.true;
    });

    it("should be able to decrement the product quantity", async () => {
        const currentQuantity = parseInt(await productDetails.quantityAmount.getText());
        const newQuantity = await productDetails.alterQuantity('Decrease', 1);
        chaiExpect(newQuantity).to.equal(currentQuantity - 1);
    });

    it("should be able to increment the product quantity", async () => {
        const currentQuantity = parseInt(await productDetails.quantityAmount.getText());
        const newQuantity = await productDetails.alterQuantity('Increase', 5);
        chaiExpect(newQuantity).to.equal(currentQuantity + 5);
    });

    it("should be able to add the product to the cart", async () => {
        await productDetails.alterQuantity('Increase', 5)
        await productDetails.addToCart();
        chaiExpect(parseInt(await commonElements.CartCount.getText())).to.eq(6);
    });

});
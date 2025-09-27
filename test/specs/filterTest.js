import appLaunch from "../helpers/appLaunch";
import tearDown from "../helpers/tearDown";
import productsPage from "../pageobjects/products.page"
import sortingPopup from "../pageobjects/sortingPopup";
import {expect as chaiExpect} from "chai";

describe("Filter Functionality", async() => {

    beforeEach(async () => {
        await appLaunch.appLaunch();
        await productsPage.sortIcon.waitForDisplayed({'timeout': 5000, 'timeoutMsg': 'Sort icon did not appear in time'});
        await productsPage.sortIcon.click();
    })

    afterEach(async () => {
        await tearDown.tearDown();
    })

    it('should be able to open the products filter and can see a tick by the selected filter', async()=> {
        const popup = await $('android=new UiSelector().className("android.view.ViewGroup")');
        const sortText = await popup.$('id=com.saucelabs.mydemoapp.android:id/sortTV').getText();
        chaiExpect(await sortText).to.equal('Sort by:');
        chaiExpect(await sortingPopup.selectedIcon.isDisplayed()).to.be.true;

    }),

    it('should be able to filter products by ascending price', async() => {
        await sortingPopup.sortByAscPrice.click();
        await sortingPopup.sortingPopupClosed();
        const sortedPrice = await sortingPopup.sortAscPrice();
        chaiExpect(sortedPrice).to.equal(true);

    }),
    it('should be able to filter products by descending price', async() => {
        await sortingPopup.sortByDescPrice.click();
        await sortingPopup.sortingPopupClosed();
        const sortedPrice = await sortingPopup.sortDescPrice();
        chaiExpect(sortedPrice).to.equal(true);
    }),
    it('should be able to filter products by descending name', async() => {
        await sortingPopup.sortByDescName.click();
        await sortingPopup.sortingPopupClosed();
        const sortedName = await sortingPopup.sortDescName();
        chaiExpect(sortedName).to.eq(true);
    })
})
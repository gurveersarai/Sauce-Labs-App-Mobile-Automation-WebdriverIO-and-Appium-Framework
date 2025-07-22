import productsPage from "../pageobjects/products.page"
import sortingPopup from "../pageobjects/sortingPopup";

describe("Filter Functionality", async() => {

    
    it('should be able to open the products filter and can see a tick by the selected filter', async()=> {
        const sortIconDisplayed = await productsPage.sortIcon.isDisplayed();
        chaiExpect(await productsPage.sortIconDisplayed).to.be.true;
        await productsPage.sortIcon.click();
        const popup = await $('android=new UiSelector().className("android.view.ViewGroup")');
        const sortText = await popup.$('id=com.saucelabs.mydemoapp.android:id/sortTV').getText();
        chaiExpect(await sortText).to.equal('Sort By');
        chaiExpect(await sortingPopup.sortIconDisplayed.isDisplayed()).to.be.true;

    }),

    it('should be able to filter products by ascending price', async() => {
        await productsPage.sortIcon.click();
        await sortingPopup.sortByAscPrice.click()
        await sortingPopup.sortingPopupClosed()
        const sortedPrice = await sortingPopup.sortAscPrice()
        chaiExpect(sortedPrice).to.equal(true)

    }),
    it('should be able to filter products by descending price', async() => {
        await productsPage.sortIcon.click();
        await sortingPopup.sortByDescPrice.click();
        await sortingPopup.sortingPopupClosed();
        const sortedPrice = await sortingPopup.sortDescPrice();
        chaiExpect(sortedPrice).to.equal(true);
    }),
    it('should be able to filter products by descending name', async() => {
        await productsPage.sortIcon.click();
        await sortingPopup.sortByDescName.click();
        await sortingPopup.sortingPopupClosed();
        const sortedName = await sortingPopup.sortByDescName();
        chaiExpect(sortedName).to.equal(true);
    })
})
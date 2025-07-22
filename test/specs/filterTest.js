import productsPage from "../pageobjects/products.page"

describe("Filter Functionality", async() => {

    
    it('should be able to open the products filter', async()=> {
        const sortIconDisplayed = await productsPage.sortIcon.isDisplayed();
        chaiExpect(await productsPage.sortIconDisplayed).to.be.true;
        await productsPage.sortIcon.click();
        const popup = await $('android=new UiSelector().className("android.view.ViewGroup")');
        const sortText = await popup.$('id=com.saucelabs.mydemoapp.android:id/sortTV').getText();
        chaiExpect(await sortText).to.equal('Sort By');

    }),

    it('should be able to filter products by ascending price', async() => {
        await productsPage.sortIcon.click();
        
    }),
    it('should be able to filter products by descending price', async() => {

    }),
    it('should be able to filter products by ascending name', async() => {

    }),
    it('should be able to filter products by descending name', async() => {

    })
})
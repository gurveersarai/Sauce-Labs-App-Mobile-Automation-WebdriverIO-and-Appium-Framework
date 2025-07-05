import appLaunch from "../helpers/appLaunch.js";
import commonElements from "../pageobjects/commonElements.js";
describe("Scroll Functionality", () => {
    beforeEach(async () => {
        // Navigate to the page that requires scrolling
        await appLaunch.appLaunch();
        await console.log('App launched successfully');
    });

    it("should be able to scroll to the bottom of the page", async() => {
        try {
            const el = await $('id:non_existent_element');
            await el.isDisplayed();  // This will throw if the element isn't found
          } catch (err) {
            console.log('Begin to scroll');
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(5)');
            console.log('Scrolled to the end');
        
            // Now try to find the footer element again
            const isFooterVisible = await commonElements.footer.isDisplayed()
            expect(isFooterVisible).toBe(true);
            console.log('Footer is visible');
          }
    }),

    it("should be able to scroll to a specific element", async() => {
        const elementToScrollTo = await $('id:com.saucelabs.mydemoapp.android:id/someElementId');
        await elementToScrollTo.scrollIntoView();
        const isElementVisible = await elementToScrollTo.isDisplayed();
        expect(isElementVisible).toBe(true);
    })
    
});



    
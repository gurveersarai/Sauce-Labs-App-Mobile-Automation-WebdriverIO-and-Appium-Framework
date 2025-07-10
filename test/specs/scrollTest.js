import appLaunch from "../helpers/appLaunch.js";
import commonElements from "../pageobjects/commonElements.js";
import productsPage from "../pageobjects/products.page.js";
describe("Scroll Functionality", () => {
    beforeEach(async () => {
        // Navigate to the page that requires scrolling
        await appLaunch.appLaunch();
        await console.log('App launched successfully');
    });

    it("should be able to scroll to the bottom of the page", async() => {
        await commonElements.pageTitle.isDisplayed();
        
        try {
            console.log('Checking for footer visibility');
            const el = await commonElements.facebookLink;
            await el.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: 'Facebook element is not displayed within the timeout period'
            });  // This will throw if the element isn't found
          } catch (err) {

            console.log('Begin to scroll');
            await driver.pause(1000)
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/FacebookIV"))');

            console.log('Scrolled to the end');
        
            // Now try to find the footer element again
            const Fb = await commonElements.facebookLink.isDisplayed();
            expect(await Fb).toBe(true);
            console.log('Footer is visible');
          }
    })

     it("should be able to scroll to a specific element", async() => {
         const elementToScrollTo = await $('-android uiautomator:new UiSelector().textContains("light")');
         await elementToScrollTo.scrollIntoView({
            direction: 'down',
            scrollableElement: await $('android=new UiScrollable(new UiSelector().scrollable(true))')
         });
         const isElementVisible = await elementToScrollTo.isDisplayed();
         expect(isElementVisible).toBe(true);
     })
    
});



    
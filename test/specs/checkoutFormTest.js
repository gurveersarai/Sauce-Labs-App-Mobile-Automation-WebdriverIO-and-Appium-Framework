import appLaunch from "../helpers/appLaunch";
import cartPage from "../pageobjects/cart.page"
import checkoutPage from "../pageobjects/checkout.page";

describe("Checkout Form Functionality", () => {
    let personalDetails;
    const filePath = path.join(process.cwd(), 'test', 'testData', 'shippingAddress.json');
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    personalDetails = JSON.parse(fileContent)[0];

    beforeEach(async() => {
        await appLaunch.appLaunch();
        
    })

    it('should be able to see the Checkout Title Present', async () => {
        const checkoutTitleDisplayed = await cartPage.checkoutTitle.isDisplayed();
        chaiExpect(checkoutTitleDisplayed).to.be.true;

    }),

    it('should not be able to proceed with an empty form', async () => {
        await cartPage.checkoutCTA.click();
        const errorMessage = await cartPage.firstNameErrorMessage.getText();
        chaiExpect(errorMessage).to.equal('Please provide your full name');
    }),

    it('should be able to fill in the form and proceed to the next step', async () => {
        const { firstName, lastName, address, city, state, zipCode } = personalDetails;
        await checkoutPage.enterFormDetails(personalDetails);
        await checkoutPage.toPaymentCTA.click();
        const isCheckoutPageDisplayed = await checkoutPage.isCheckoutPageDisplayed();
        chaiExpect(isCheckoutPageDisplayed).to.be.true;
    });

});


import appLaunch from "../helpers/appLaunch";
import goToLogin from "../helpers/goToLogin"
import commonElements from "../pageobjects/commonElements";
import loginPage from "../pageobjects/login.page";
import {expect as chaiExpect} from "chai"
import productsPage from "../pageobjects/products.page";

describe("Logout Functionality", () => {
    
    before(async () => {
        await appLaunch.appLaunch();
        await goToLogin.goToLogin();
        await loginPage.Login("tomsmith", "SuperSecretPassword!");
    })

    it("should logout successfully", async() => {
        //Open the hamburger menu
       await commonElements.LHN.isDisplayed();
       await commonElements.LHN.click();
       await commonElements.LogoutLink.click();
       await commonElements.logoutConfirmationPopup.isDisplayed();
       await commonElements.ConfirmationWindowConfirm.click();
         //Verify that the user is redirected to the login page after logout
       chaiExpect(await loginPage.loginTitle.isDisplayed()).to.be.true;
    });
});


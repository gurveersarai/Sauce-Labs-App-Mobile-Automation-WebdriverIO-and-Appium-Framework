import goToLogin from "../helpers/goToLogin"
import commonElements from "../pageobjects/commonElements";

describe("Logout Functionality", () => {
    Before(async () => {
        //Login before testing logout
        await goToLogin.goToLogin();
        await loginPage.Login("tomsmith", "SuperSecretPassword!");
    })

    it("should logout successfully", async() => {
        //Open the hamburger menu
       await commonElements.iconMenu.click();
       await commonElements.LHN.toBeDisplayed();
       await commonElements.LogoutLink.click();
         //Verify that the user is redirected to the login page after logout
       expect(await commonElements.loginPageTitle.isDisplayed()).toBe(true);
    });
});


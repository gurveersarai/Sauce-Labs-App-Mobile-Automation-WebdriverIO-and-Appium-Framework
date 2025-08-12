import {expect as chaiExpect} from "chai";
import loginPage from "../pageobjects/login.page.js";
import goToLogin from "../helpers/goToLogin.js";
import tearDown from "../helpers/tearDown.js";
import appLaunch from "../helpers/appLaunch.js";

describe("Login Functionality", () => {
  
  beforeEach(async () => {
    // Navigate to the login page before each test
    await appLaunch.appLaunch();
    await goToLogin.goToLogin();
  });

  afterEach(async () => {
    await tearDown.tearDown();
  });
  
  it("should login with valid credentials", async () => {
    await loginPage.Login("tomsmith", "SuperSecretPassword!");
    // Verify that the user is redirected to the secure page after login
  });
  it("should not be able to login without username", async() => {
    await loginPage.Login("", "SuperSecretPassword!");
    chaiExpect(await loginPage.usernameFieldErrorMessage.isDisplayed()).to.be.true;
  });
  it("should not be able to login without password", async() => {
    await loginPage.Login("tomsmith", "");
    chaiExpect(await loginPage.passwordFieldErrorMessage.isDisplayed()).to.be.true;
  });
  it("should not be able to login with a locked account", async () => {
    await loginPage.Login("alice@example.com", "10203040");
    const errorMessage = await loginPage.lockedOutErrorMessage.getText();
    chaiExpect(errorMessage).to.equal('Sorry this user has been locked out.')
  });
});

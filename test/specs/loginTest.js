import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import goToLogin from "../helpers/goToLogin.js";
import tearDown from "../helpers/tearDown.js";

describe("Login Functionality", () => {
  
  beforeEach(async () => {
    // Navigate to the login page before each test
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
    expect(await loginPage.usernameFieldError.isDisplayed()).toBe(true);
  });
  it("should not be able to login without password", async() => {
    await loginPage.Login("tomsmith", "");
    expect(await loginPage.passwordFieldError.isDisplayed()).toBe(true);
  });
  it("should not be able to login with invalid credentials", async () => {
    await loginPage.Login("invalidUser", "invalidPassword");
    expect(await loginPage.loginError.isDisplayed()).toBe(true);
  });
});

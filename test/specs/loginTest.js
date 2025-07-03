import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import goToLogin from "../helpers/goToLogin.js";

describe("Login Functionality", () => {
  beforeEach(async () => {
    // Navigate to the login page before each test
    await goToLogin.goToLogin();
  });
  it("should login with valid credentials", async () => {
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    // Verify that the user is redirected to the secure page after login
  });
});

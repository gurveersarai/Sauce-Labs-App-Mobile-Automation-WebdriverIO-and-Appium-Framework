import commonElements from "../pageobjects/commonElements";
import loginPage from "../pageobjects/login.page";

async function goToLogin() {
  await commonElements.LHN.click();
  await commonElements.LoginLink.click();
  await loginPage.loginTitle.waitForDisplayed({
    timeout: 5000,
    message: "Login page did not load in time",
  });
}

export default {
  goToLogin,
};

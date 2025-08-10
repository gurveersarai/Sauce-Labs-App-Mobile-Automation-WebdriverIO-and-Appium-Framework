import { $ } from "@wdio/globals";

// This class represents the login page of the application.

class loginPage {
  get usernameField() {
    return $("id=com.saucelabs.mydemoapp.android:id/nameET");
  }

  get passwordField() {
    return $("id=com.saucelabs.mydemoapp.android:id/passwordET");
  }

  get loginCTA() {
    return $("id=com.saucelabs.mydemoapp.android:id/loginBtn");
  }

  async Login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginCTA.click();
  }
}

export default new loginPage();

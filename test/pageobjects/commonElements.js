import { $, browser } from "@wdio/globals";

// This class contains common elements used across different page objects in the application.
// It provides methods to access elements like the LHN (Left Hand Navigation), Cart, CartCount, and various links.

class commonElements {
  get LHN() {
    return $("~View menu");
  }

  get Cart() {
    return $("id=com.saucelabs.mydemoapp.android:id/cartIV");
  }

  get CartCount() {
    return $("id=com.saucelabs.mydemoapp.android:id/cartTV");
  }

  get LHNContainer() {
    return $("~Recycler view for menu");
  }

  get LoginLink() {
    return $("~Login Menu Item");
  }

  get LogoutLink() {
    return $("~Logout Menu Item");
  }

  get ConfirmationWindowCancel() {
    return $("android:id/button2");
  }

  get ConfirmationWindowConfirm() {
    return $(
      '//android.widget.Button[@resource-id="com.example:id/button1" and @text="LOGOUT"]'
    );
  }

  get pageTitle() {
    return $("~title");
  }

  get footer() {
    return $("id=com.saucelabs.mydemoapp.android:id/socialLL");
  }

  get facebookLink() {
    return $("~Facebook");
  }

  get catalogLink() {
    return $('android=new UiSelector().text("Catalog")');
  }
  
}

export default new commonElements();

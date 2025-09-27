import productsPage from "../pageobjects/products.page";
import productsDetailsPage from "../pageobjects/productsDetails.page";

export async function addTicket() {
    await productsPage.productImages[0].click();
    await productsDetailsPage.addToCartButton.waitForDisplayed({timeout: 5000, message: "Add to Cart CTA did not load in time"});
    await productsDetailsPage.addToCart();
    
}

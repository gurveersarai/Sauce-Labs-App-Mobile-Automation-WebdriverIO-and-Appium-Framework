import path from 'path';
import fs from 'fs';
import checkoutPage from '../pageobjects/checkout.page';

async function fillCheckoutForm() {
    let personalDetails;
    const filePath = path.join(process.cwd(), 'test', 'testData', 'shippingAddress.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    personalDetails = JSON.parse(fileContent).shippingAddress;
    await checkoutPage.enterFormDetails(personalDetails);
}

export default {
    fillCheckoutForm
}
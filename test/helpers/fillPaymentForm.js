import path from 'path';
import fs from 'fs';
import paymentPage from '../pageobjects/payment.page';

async function fillPaymentForm() {
    let paymentDetails;
    const filePath = path.join(process.cwd(), 'test', 'testData', 'cardDetails.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    paymentDetails = JSON.parse(fileContent).card;
    const { cardHolderName, cardNumber, expiryDate, securityCode } = paymentDetails;
    await paymentPage.enterPaymentDetails(cardHolderName, cardNumber, expiryDate, securityCode);
}

export default {
    fillPaymentForm
}
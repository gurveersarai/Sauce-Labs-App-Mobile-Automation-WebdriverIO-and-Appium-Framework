import productsPage from './products.page.js';
class sortingPopup {

    get sortByAscPrice() {
        return $("~Ascending order by price");
    }

    get sortByDescPrice() { 
        return $("~Descending order by price");
    }

    get selectedIcon() {
        return $("~Shows which sorting order is selected")
    }

    get sortByDescName() {
        return $('~Descending order by name')
    }

    async sortingPopupClosed() {
        const sortText = await $('android=new UiSelector().className("android.view.ViewGroup")')
        .$(`id=com.saucelabs.mydemoapp.android:id/sortTV`)
        .waitForDisplayed
        ({
            reverse: true,
            timeout:5000,
            timeoutMsg: 'Sort popup did not disappear after sorting by ascending price'
        });
    }

    async sortAscPrice() {
        const productPrices = await productsPage.productPrices();
        const formattedPrice = productPrices.map(price => parseFloat(price.replace('$', '')));
        const isSorted = formattedPrice.every((price, index, arr) => {
            return index === 0 || price >= arr[index - 1];
        })
        return isSorted;
    }

    async sortDescPrice() {

        const productPrices = await productsPage.productPrices();
        const formattedPrice = productPrices.map(price => parseFloat(price.replace('$', '')));
        const isSorted = formattedPrice.every((price, index, arr) => {
            return index === 0 || price <= arr[index - 1];
        })
        return isSorted;
    }
    
    async sortDescName() {
        const productNames = await productsPage.productNames();
        const isSorted = productNames.every((name, index, arr) => {
            return index === 0 || name.localeCompare(arr[index - 1]) <= 0;
        });
        return isSorted;
    }
}

export default new sortingPopup();
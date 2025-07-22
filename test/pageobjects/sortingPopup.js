class sortingPopup {

    get sortByAscPrice() {
        return $("~Sort by ascending price");
    }

    get sortByDescPrice() { 
        return $("~Sort by descending price");
    }

    get selectedIcon() {
        return $("~Shows which sorting order is selected")
    }

    get sortByDescName() {
        return $('~Descending order by name')
    }

    g

}

export default new sortingPopup();
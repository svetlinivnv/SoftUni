function ListOfProducts(array) {
    let sortedArray = array.sort();
    for (let i = 0; i < sortedArray.length; i++) {
        console.log(`${i + 1}.${sortedArray[i]}`);
    }
}

ListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
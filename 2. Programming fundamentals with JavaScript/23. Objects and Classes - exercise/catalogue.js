function catalogue(input) {

    let productList = [];

    for (let current of input) {
        let [name, price] = current.split(' : ');
        let product = {
            name: name,
            price: price,
        }
        productList.push(product);
    }

    let sortedProductList = productList.sort((a, b) => a.name.localeCompare(b.name));

    let prevFirstLetter = '';
    for (let current of sortedProductList) {
        let firstLetter = current.name[0];

        if (prevFirstLetter !== firstLetter) {
            console.log(firstLetter);
        }
        prevFirstLetter = firstLetter;

        console.log(`  ${current.name}: ${current.price}`);

    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
function storeCatalogue(input) {
    let catalogue = {}
    input.sort((a, b) => a.localeCompare(b));

    for (let product of input) {
        let [name, price] = product.split(' : ');
        catalogue[name] = Number(price);
    }
    let lastLetter = '';
    for (let product in catalogue) {
        let currentLetter = product[0];
        if (currentLetter !== lastLetter) {
            console.log(currentLetter);
            lastLetter = currentLetter;
        }
        console.log(`  ${product}: ${catalogue[product]}`);
    }
}


storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
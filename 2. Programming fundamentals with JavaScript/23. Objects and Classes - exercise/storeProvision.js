function storeProvision(currStock, orderedStock) {
    let stock = {};

    for (i = 0; i < currStock.length; i += 2) {
        let productName = currStock[i]
        let productQuantity = +currStock[i + 1];
        stock[productName] = productQuantity;
    }

    for (i = 0; i < orderedStock.length; i += 2) {
        let productName = orderedStock[i]
        let productQuantity = +orderedStock[i + 1];

        if (stock[productName]) {
            stock[productName] += productQuantity;
        } else {
            stock[productName] = productQuantity;
        }
    }

    for (let key in stock) {
        console.log(`${key} -> ${stock[key]}`);
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]);
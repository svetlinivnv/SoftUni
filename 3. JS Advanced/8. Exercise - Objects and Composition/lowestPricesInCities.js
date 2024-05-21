function lowestPricesInCities(input) {

    let result = {};

    for (let row of input) {
        let [city, product, price] = row.split(' | ');
        price = Number(price);

        if (!result[product]) {
            result[product] = product;
            result[product] = { city, price };
        } else {
            if (result[product].price > price) {
                result[product].price = price;
                result[product].city = city;
            }
        }
    }

    for (current in result) {
        console.log(`${current} -> ${result[current].price} (${result[current].city})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sofia | Orange | 2',
    'Sample Town | Orange | 2',
    'Sofia | Peach | 2',
    'Sample Town | Peach | 1',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
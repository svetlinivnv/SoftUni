function aec(input) {

    let catalogue = {};

    input.forEach(data => {
        let [brand, model, quantity] = data.split(' | ');
        isModelPresent = false;
        quantity = Number(quantity);

        if (!catalogue[brand]) {
            catalogue[brand] = [];
        }

        if (catalogue[brand]) {
            for (const brand of Object.keys(catalogue)) {
                for (const kvp of catalogue[brand]) {
                    if (kvp.model === model) {
                        kvp.quantity += quantity;
                        isModelPresent = true;
                    }
                }
            }
        if (!isModelPresent) {
            catalogue[brand].push({ model, quantity })
        }
        }
    });
    
    for (const car of Object.keys(catalogue)) {
        console.log(car);
        for (const kvp of catalogue[car]) {
            console.log(`###${kvp.model} -> ${kvp.quantity}`);
        }
    }
}

aec(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
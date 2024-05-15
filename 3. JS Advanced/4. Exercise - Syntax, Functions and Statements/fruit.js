function fruit (fruitName, weightGr, pricePerKg) {

    let weightInKg = weightGr / 1000;
    let totalPrice = weightInKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`);
}

fruit('orange', 2500, 1.80);
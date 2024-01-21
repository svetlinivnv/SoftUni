function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    if (town === 'Sofia') {

        switch (product) {
            case 'coffee': totalPrice = quantity * 0.50; break;
            case 'water': totalPrice = quantity * 0.80; break;
            case 'beer': totalPrice = quantity * 1.20; break;
            case 'sweets': totalPrice = quantity * 1.45; break;
            case 'peanuts': totalPrice = quantity * 1.60; break;
        }

    } else if (town === 'Plovdiv') {

        switch (product) {
            case 'coffee': totalPrice = quantity * 0.40; break;
            case 'water': totalPrice = quantity * 0.70; break;
            case 'beer': totalPrice = quantity * 1.15; break;
            case 'sweets': totalPrice = quantity * 1.30; break;
            case 'peanuts': totalPrice = quantity * 1.50; break;

        }

    } else if (town === 'Varna') {

        switch (product) {
            case 'coffee': totalPrice = quantity * 0.45; break;
            case 'water': totalPrice = quantity * 0.70; break;
            case 'beer': totalPrice = quantity * 1.10; break;
            case 'sweets': totalPrice = quantity * 1.35; break;
            case 'peanuts': totalPrice = quantity * 1.55; break;

        }
    }
    console.log(totalPrice);

}

    smallShop(["sweets", "Sofia", "2.23"]);
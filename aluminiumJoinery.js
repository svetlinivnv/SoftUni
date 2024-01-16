function aluminiumJoinery(input) {

    let joineryCount = Number(input[0]);
    let type = input[1];
    let receive = input[2];
    let deliveryPrice = 60;
    let price = 0;

    if (joineryCount < 10) {
        console.log('Invalid order');
    } else {
        switch (type) {
            case '90X130':
                price = 110 * joineryCount;
                if (joineryCount >= 60) {
                    price *=0.92;
                } else if (joineryCount >= 30) {
                    price *= 0.95;
                } break;
            case '100X150':
                price = 140 * joineryCount;
                if (joineryCount >= 80) {
                    price *=0.90;
                } else if (joineryCount >= 40) {
                    price *= 0.94;
                } break;
            case '130X180':
                price = 190 * joineryCount;
                if (joineryCount >= 50) {
                    price *=0.88;
                } else if (joineryCount >= 20) {
                    price *= 0.93;
                } break;
            case '200X300':
                price = 250 * joineryCount;
                if (joineryCount >= 50) {
                    price *=0.86;
                } else if (joineryCount >= 25) {
                    price *= 0.91;
                } break;
        }
        if (receive === 'With delivery') {
            price += deliveryPrice;
        }
        if (joineryCount > 99) {
            price *= 0.96;
        }
        console.log(`${price.toFixed(2)} BGN`);
    }
}

aluminiumJoinery(["40","90X130","Without delivery"]);
// aluminiumJoinery(["105","100X150","With delivery"]);
// aluminiumJoinery(["2","130X180","With delivery"]);
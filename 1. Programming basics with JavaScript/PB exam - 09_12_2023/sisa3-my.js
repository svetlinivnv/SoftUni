function courierExpress(input) {
    let weight = Number(input[0]);
    let deliveryType = input[1];
    let distance = Number(input[2]);
    let pricePerKilometer = 0;
    let addition = 0;
    let totalPrice = 0;

    if (weight < 1) {
        pricePerKilometer = 0.03;
        addition = (pricePerKilometer * 0.8) * weight * distance;
    } else if (weight < 10) {
        pricePerKilometer = 0.05;
        addition = (pricePerKilometer * 0.4) * weight * distance;
    } else if (weight < 40) {
        pricePerKilometer = 0.10;
        addition = (pricePerKilometer * 0.05) * weight * distance;
    } else if (weight < 90) {
        pricePerKilometer = 0.15;
        addition = (pricePerKilometer * 0.02) * weight * distance;
    } else if (weight < 150) {
        pricePerKilometer = 0.20;
        addition = (pricePerKilometer * 0.01) * weight * distance;
    }

    totalPrice = distance * pricePerKilometer;

    if (deliveryType === 'express') {
        totalPrice += addition;
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`);
}

courierExpress(["1.5",
"standard",
"100"]);


// switch (deliveryType) {
//     case 'standard':
//         deliveryPrice = distance * pricePerKilometer;
//         break;
//     case 'express':
//         deliveryPrice = distance * (pricePerKilometer * )
//         break;
// }



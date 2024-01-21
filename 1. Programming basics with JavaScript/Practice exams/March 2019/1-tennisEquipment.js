function tennisEquipment(input) {

    rocketPrice = Number(input[0]);
    rocketsQuantity = Number(input[1]);
    trainersPrice = (1/6) * rocketPrice;
    trainersQuantity = Number(input[2]);

    cost = (rocketPrice * rocketsQuantity) + (trainersPrice * trainersQuantity);
    additionalEquipmentCost = 0.2 * cost;

    totalCost = cost + additionalEquipmentCost;

    athletePay = (1/8) * totalCost;
    sponsorPay = (7/8) * totalCost;

    console.log(`Price to be paid by Djokovic ${Math.floor(athletePay)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorPay)}`);
}

tennisEquipment(['850', '4', '2']);
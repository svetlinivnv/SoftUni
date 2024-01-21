function foodDelivery(input) {

    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegPrice = 8.15;
    let deliveryPrice = 2.5;

    let totalChickenPrice = Number(input[0]) * chickenPrice;
    let totalFishPrice = Number(input[1]) * fishPrice;
    let totalVegPrice = Number(input[2]) * vegPrice;
    
    let totalMenusPrice = totalChickenPrice + totalFishPrice + totalVegPrice;

    let desetPrice = totalMenusPrice * 0.2;

    let totalOrderPrice = totalMenusPrice + desetPrice + deliveryPrice;

    console.log(totalOrderPrice);
}

foodDelivery(["2", "4", "3"]);
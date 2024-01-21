function kongVsGodzilla(input) {

    let movieBudget = Number(input[0]);
    let actorCount = Number(input[1]);
    let actorOutfitPrice = Number(input[2]);
    let decorPrice = movieBudget * 0.1;
    console.log(`Decor: ${decorPrice.toFixed(2)}`);
    let actorOutfitTotal = actorOutfitPrice * actorCount;
    
    if (actorCount > 150) {
        actorOutfitTotal = actorOutfitTotal - actorOutfitTotal * 0.1;
    } 
    console.log(`Outfit: ${actorOutfitTotal.toFixed(2)}`);
    
    let totalPrice = decorPrice + actorOutfitTotal
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
    if (totalPrice > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(movieBudget - totalPrice).toFixed(2)} leva more.`);
    }
    
    if (totalPrice <= movieBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalPrice).toFixed(2)} leva left.`);
    }
}

kongVsGodzilla(["15437.62", "186", "57.99"]);
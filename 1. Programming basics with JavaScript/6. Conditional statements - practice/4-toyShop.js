function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    
    let totalToys = puzzleCount + dollCount + bearCount + minionCount+ truckCount
    let totalIncome = puzzleCount * 2.6 + dollCount * 3 + bearCount * 4.1 + minionCount * 8.2 + truckCount * 2;

    if (totalToys >= 50) {
        totalIncome *= 0.75;
    }

    availableMoney = totalIncome * 0.9;

    if (tripPrice <= availableMoney) {
        console.log(`Yes! ${(availableMoney - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - availableMoney).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);
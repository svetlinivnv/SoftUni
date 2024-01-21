function toysShop(input) {


    let puzzle = 2.6;
    let doll = 3;
    let bear = 4.10;
    let minion = 8.2;
    let truck = 2;

    let tripPrice = Number(input[0]);

    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let toysPrice = puzzle * puzzleCount + doll * dollCount + bear * bearCount + minion * minionCount + truck * truckCount;

    if (toysCount >= 50) {
        toysPrice = toysPrice - toysPrice * 0.25;
    }

    totalProfit = toysPrice - toysPrice * 0.1;

    if (totalProfit >= tripPrice) {
        console.log(`Yes! ${(totalProfit - tripPrice).toFixed(2)} lv left.`);
    }

    if (totalProfit < tripPrice) {
        console.log(`Not enough money! ${(tripPrice - totalProfit).toFixed(2)} lv needed.`);
    }

}

toysShop(["320", "8", "2", "5", "5", "1"]);
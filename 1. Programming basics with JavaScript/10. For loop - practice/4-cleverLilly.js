function cleverLilly(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyTotal = 0;
    let moneyGiven = 10;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyTotal += moneyGiven - 1;
            moneyGiven += 10;
        } else {
            moneyTotal += toyPrice;
        }
    }

    if (moneyTotal >= washerPrice) {
        console.log(`Yes! ${(moneyTotal - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - moneyTotal).toFixed(2)}`);
    }

}


cleverLilly(["21",

"1570.98",

"3"]);
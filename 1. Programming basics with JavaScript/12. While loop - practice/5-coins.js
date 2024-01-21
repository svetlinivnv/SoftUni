function coins(input) {

    let change = Number(input[0]);
    let changeInCents = Math.round(change * 100);
    let coinsCounter = 0;

    while (changeInCents != 0) {
        if (changeInCents >= 200) {
            coinsCounter++;
            changeInCents -= 200;
        } else if (changeInCents >= 100) {
            coinsCounter++;
            changeInCents -= 100;
        } else if (changeInCents >= 50) {
            coinsCounter++;
            changeInCents -= 50;
        } else if (changeInCents >= 20) {
            coinsCounter++;
            changeInCents -= 20;
        } else if (changeInCents >= 10) {
            coinsCounter++;
            changeInCents -= 10;
        } else if (changeInCents >= 5) {
            coinsCounter++;
            changeInCents -= 5;
        } else if (changeInCents >= 2) {
            coinsCounter++;
            changeInCents -= 2;
        } else if (changeInCents >= 1) {
            coinsCounter++;
            changeInCents -= 1;
        }
    }
    console.log(coinsCounter);
}

coins(["2.73"]);
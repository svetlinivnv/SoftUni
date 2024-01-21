function bitcoinMining(input) {

    let totalBC = 0;
    let FirstDayBC = 0;
    let days = 1;
    let money = 0;
    let totalMoney = 0;

    for (let i = 0; i < input.length; i++) {
        if (days % 3 === 0) {
            input[i] = input[i] - (input[i] * 0.3);
        }
        money = input[i] * 67.51;
        totalMoney += money;
        while (totalMoney >= 11949.16) {
            totalMoney -= 11949.16;
            totalBC++;
            if (totalBC === 1) {
                FirstDayBC = days;
            }
        }
        days++;
    }
    console.log(`Bought bitcoins: ${totalBC}`);
    if (FirstDayBC > 0) {
        console.log(`Day of the first purchased bitcoin: ${FirstDayBC}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining(['100', '200', '300']);
function footballKit(input) {


    let shirtPrice = Number(input[0]);
    let sumToWinBall = Number(input[1]);
    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = 2 * (shirtPrice + shortsPrice);

    let totalPrice = (shirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85;

    if (totalPrice >= sumToWinBall) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${(sumToWinBall - totalPrice).toFixed(2)} lv. more.`);
    }
}

footballKit(["59.99",
"500"])

;
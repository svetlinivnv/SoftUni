function poundsToUsd(amount) {

    let exchangeRate = 1.31;
    console.log(`${(amount * exchangeRate).toFixed(3)}`);

}

poundsToUsd(80);
function perfectNumber(number) {

    if (number <= 0) {
        console.log("It's not so perfect.");
    }

    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    sum === number ? console.log('We have a perfect number!') : console.log("It's not so perfect.");
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

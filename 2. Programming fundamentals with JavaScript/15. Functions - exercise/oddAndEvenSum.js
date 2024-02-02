function oddAndEven(number) {

    let numberAsString = String(number);
    let digitsEvenSum = 0;
    let digitsOddSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currDigit = Number(numberAsString[i]);
        if (currDigit % 2 === 0) {
            digitsEvenSum += currDigit;
        } else digitsOddSum += currDigit;

    }
    return console.log(`Odd sum = ${digitsOddSum}, Even sum = ${digitsEvenSum}`);
}


oddAndEven(3495892137259234);
oddAndEven(1000435);
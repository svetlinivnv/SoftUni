function sumEvenNumbers(array) {

    let sumOfEven = 0;

    for (i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i]);
        if (currentNumber % 2 === 0) {
            sumOfEven += currentNumber;
        }
    }

    console.log(sumOfEven);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
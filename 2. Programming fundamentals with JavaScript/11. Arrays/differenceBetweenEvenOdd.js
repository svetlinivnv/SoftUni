function differenceBetweenEvenOdd(array) {

    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        if (currentNumber % 2 === 0) {
            sumOfEven += currentNumber;
        } else {
            sumOfOdd += currentNumber;
        }
    }

    let diff = sumOfEven - sumOfOdd;
    console.log(diff);

}

differenceBetweenEvenOdd([1, 2, 3, 4, 5, 6]);
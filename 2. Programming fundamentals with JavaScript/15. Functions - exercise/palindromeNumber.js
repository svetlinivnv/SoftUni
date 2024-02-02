function palindromeNumber(numbers) {

    for (let i = 0; i < numbers.length; i++) {

        let currNumberAsString = String(numbers[i]);
        let arrayFromNumber = currNumberAsString.split('').reverse();
        let currNumberAsStringReversed = arrayFromNumber.join('');

        if (currNumberAsString === currNumberAsStringReversed) {
            console.log(true);
        } else console.log(false);
    }
}

// palindromeNumber([123, 323, 421, 121]);
palindromeNumber([32, 2, 232, 1010]);
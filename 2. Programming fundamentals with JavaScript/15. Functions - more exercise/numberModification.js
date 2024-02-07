function numberModification(number) {
    let numberAsString = number.toString();
    let digitsArray = numberAsString.split('');

    while (checkAvg(digitsArray) < 5) {
        digitsArray.push('9');
    }
    console.log(digitsArray.join(''));

    function checkAvg(array) {
        let digitsSum = 0;
        for (let currDigit of array) {
            digitsSum += Number(currDigit);
        }
        let avg = digitsSum / array.length;
        return avg;
    }
}

numberModification(5835);

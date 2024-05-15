function sameNumbers(number) {

    let sumOfDigits = 0;
    let numberAsString = String(number);
    let numberArr = [];
    let areSame = true;
    for (let i = 0; i < numberAsString.length; i++) {
        let currDigit = Number(numberAsString[i]);
        sumOfDigits += currDigit;
        numberArr.push(currDigit);
    }
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[0] != numberArr[i]) {
            areSame = false;
            break;
        }
    }
    
    if (areSame) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sumOfDigits);
}

sameNumbers(1234);
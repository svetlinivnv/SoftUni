function sumDigits(number) {

    let sum = 0;
    let numberAsString = String(number);
    
    for(let i = 0; i < numberAsString.length; i++) {
        let currentDigit = numberAsString[i];
        sum += Number(currentDigit);
    }
    console.log(sum);
}
sumDigits(245678);
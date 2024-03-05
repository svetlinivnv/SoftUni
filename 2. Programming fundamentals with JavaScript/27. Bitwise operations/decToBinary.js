function decToBin (number, digit) {
    let counter = 0;
    let binAsString = '';
    while (number !== 0) {
        if (number % 2 === 0) {
            number = Math.floor(number / 2);
            binAsString += '0';
        } else {
            number = Math.floor(number / 2);
            binAsString += '1';
            counter ++;
        }
    }
    console.log(binAsString.split('').reverse().join(''));
    console.log(digit === 0 ? (binAsString.length - counter) : counter);
}

decToBin(20, 0);
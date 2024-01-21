function maxNumber(input) {
    let currentNumber = input[0];
    let max = Number.MIN_SAFE_INTEGER;
    let index = 0;

while (currentNumber !== 'Stop') {
    if (Number(currentNumber) > max) {
        max = Number(currentNumber);
    }
    index++;
    currentNumber = input[index];
}
console.log(max);
}

maxNumber(["-1", "-2", "Stop"]);
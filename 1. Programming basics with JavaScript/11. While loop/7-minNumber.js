function minNumber(input) {
let currentNumber = input[0];
let min = Number.MAX_SAFE_INTEGER;
let index = 0;

while (currentNumber !== 'Stop') {
    if (Number(currentNumber) < min) {
        min = Number(input[index]);
    }
    index++;
    currentNumber = input[index];
}
console.log(min);
}

minNumber(["-1", "-2", "Stop"]);
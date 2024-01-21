function maxNumber(input) {
let maxNumber = Number(input[0]);
let currentNumber = Number(input[1]);
let sum = 0;
let index = 2;

while (sum < maxNumber) {

    sum += currentNumber;
    currentNumber = Number(input[index]);
    index++;

}
console.log(sum);
}

maxNumber(["100", "10", "20", "30", "40"]);
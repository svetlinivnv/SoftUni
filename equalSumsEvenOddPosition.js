function equalSumsEvenOddPosition(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);

  let output = "";

  for (let number = startNumber; number <= endNumber; number++) {
    let currentNumber = "" + number;
    let numberLength = currentNumber.length - 1;
    let sumEven = 0;
    let sumOdd = 0;

    for (let a = 0; a <= numberLength; a++) {
      let digit = Number(currentNumber[a]);
      if (a % 2 === 0) {
        sumEven += digit;
      } else {
        sumOdd += digit;
      }
    }
    if (sumEven === sumOdd) {
      output += currentNumber + " ";
    }
  }
  console.log(output);
}

equalSumsEvenOddPosition(["123456", "124000"]);

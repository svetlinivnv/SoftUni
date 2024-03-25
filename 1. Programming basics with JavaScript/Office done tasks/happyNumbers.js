function happyNumbers(input) {
  let n = input[0];
  let output = "";

  for (let number = 1001; number <= 9999; number++) {
    let numberAsString = String(number);

    let index = 0;
    while (index <= 3) {
      let digit = Number(numberAsString[index]);
      if (digit === 0) {
        break;
      }
      let firstDigitsSum = Number(numberAsString[0]) + Number(numberAsString[1]);
      let secondDigitsSum = Number(numberAsString[2]) + Number(numberAsString[3]);
      if (index === 3 && firstDigitsSum === secondDigitsSum && n % firstDigitsSum === 0) {
        output += numberAsString + " ";
      }
      index++;
    }
  }
  console.log(`${output}`);
}

happyNumbers(["7"]);

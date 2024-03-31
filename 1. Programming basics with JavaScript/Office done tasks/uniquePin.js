function uniquePin(input) {
  let firstMax = Number(input[0]);
  let secondMax = Number(input[1]);
  let thirdMax = Number(input[2]);

  let firstDigit = 0;
  let secondDigit = 0;
  let thirdDigit = 0;

  for (let d1 = 1; d1 <= firstMax; d1++) {
    if (d1 % 2 === 0) {
      firstDigit = d1;
      for (let d2 = 2; d2 <= secondMax; d2++) {
        if (d2 === 2) {
          secondDigit = d2;
          for (let d3 = 1; d3 <= thirdMax; d3++) {
            if (d3 % 2 === 0) {
              thirdDigit = d3;
              console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
            }
          }
        } else if (d2 === 3) {
          secondDigit = d2;
          for (let d3 = 1; d3 <= thirdMax; d3++) {
            if (d3 % 2 === 0) {
              thirdDigit = d3;
              console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
            }
          }
        } else if (d2 === 5) {
          secondDigit = d2;
          for (let d3 = 1; d3 <= thirdMax; d3++) {
            if (d3 % 2 === 0) {
              thirdDigit = d3;
              console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
            }
          }
        } else if (d2 === 7) {
          secondDigit = d2;
          for (let d3 = 1; d3 <= thirdMax; d3++) {
            if (d3 % 2 === 0) {
              thirdDigit = d3;
              console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
            }
          }
        }
      }
    }
  }
}

uniquePin(["8", "2", "8"]);

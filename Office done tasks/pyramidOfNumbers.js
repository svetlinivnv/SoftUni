function pyramidOfNumbers(input) {
  let number = Number(input[0]);

  let current = 1;
  let isBigger = false;

  for (let rows = 1; rows <= number; rows++) {
    let printCurrentLine = "";

    for (let cols = 1; cols <= rows; cols++) {
      if (current > number) {
        isBigger = true;
        break;
      }
      printCurrentLine += `${current} `;
      current++;
    }
    console.log(`${printCurrentLine}`);
    if (isBigger) {
      break;
    }
  }
}

pyramidOfNumbers(["15"]);

function specialNumbers(input) {
  let number = Number(input[0]);
  let output = "";

  for (let range = 1111; range <= 9999; range++) {
    let currentNumberAsString = String(range);
    let digitCounter = 0;

    while (digitCounter <= 3) {
      let currentDigit = Number(currentNumberAsString[digitCounter]);
      if (number % currentDigit !== 0) {
        break;
      }
      digitCounter++;
    }

    if (digitCounter === 4) {
      output += currentNumberAsString + " ";
    }
  }
  console.log(output);
}

specialNumbers(["16"]);

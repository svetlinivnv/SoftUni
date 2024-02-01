function simpleCalculator(numOne, numTwo, operator) {
  let multiply = (numOne, numTwo) => numOne * numTwo;
  let divide = (numOne, numTwo) => numOne / numTwo;
  let add = (numOne, numTwo) => numOne + numTwo;
  let subtract = (numOne, numTwo) => numOne - numTwo;

  switch (operator) {
    case "multiply":
      return console.log(multiply(numOne, numTwo));
    case "divide":
      return console.log(divide(numOne, numTwo));
    case "add":
      return console.log(add(numOne, numTwo));
    case "subtract":
      return console.log(subtract(numOne, numTwo));
  }
}

simpleCalculator(5, 5, "multiply");
function smallestTwoNumbers(array) {
  let arraySortedDesc = array.slice().sort((a, b) => b - a);
  let arrayOfSmallestTwo = arraySortedDesc.slice(-2).reverse();
  console.log(arrayOfSmallestTwo.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);

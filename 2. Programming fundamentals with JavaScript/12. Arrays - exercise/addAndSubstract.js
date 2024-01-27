function addAndSubstract(array) {
  let sumOriginal = 0;
  let sumModified = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    sumOriginal += currentNumber;

    if (currentNumber % 2 === 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }
    sumModified += array[i];
  }

  console.log(array);
  console.log(sumOriginal);
  console.log(sumModified);
}

addAndSubstract([5, 15, 23, 56, 35]);
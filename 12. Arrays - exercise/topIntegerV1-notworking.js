function topIntegers(array) {
  let topIntegers = [];

  for (let i = 0; i < array.length; i++) {
    let currentInteger = array[i];

    if (i === array.length - 1) {
      topIntegers.push(currentInteger);
    }

    for (let j = i + 1; j < array.length; j++) {
      if (currentInteger > array[j]) {
        topIntegers.push(currentInteger);
        break;
      } else break;
    }
  }

  console.log(topIntegers.join(" "));
}

// topIntegers([14, 24, 3, 19, 15, 17]);
// topIntegers([1, 4, 3, 2]);
topIntegers([1, 3, 5, 2, 4]);

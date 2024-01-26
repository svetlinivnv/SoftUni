function topIntegers(array) {
  let topIntegers = [];

  for (let i = 0; i < array.length; i++) {
    let currentInteger = array[i];

    if (i === array.length - 1) {
      topIntegers.push(currentInteger);
    }

    let isTopInteger = false;
    for (let j = i + 1; j < array.length; j++) {
      if (currentInteger > array[j]) {
        isTopInteger = true;
      } else {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      topIntegers.push(currentInteger);
    }
  }

  console.log(topIntegers.join(" "));
}

// topIntegers([14, 24, 3, 19, 15, 17]);
// topIntegers([1, 4, 3, 2]);
// topIntegers([27, 19, 42, 2, 13, 45, 48]);
// topIntegers([41, 41, 34, 20]);

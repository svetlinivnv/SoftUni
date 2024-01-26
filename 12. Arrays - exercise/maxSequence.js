function maxSequence(array) {
  let longestSequence = [];
  let currentSequence = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number === currentSequence[currentSequence.length - 1]) {
      currentSequence.push(number);
    } else {
      currentSequence = [number];
    }

    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence;
    }
  }
  console.log(longestSequence.join(' '));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
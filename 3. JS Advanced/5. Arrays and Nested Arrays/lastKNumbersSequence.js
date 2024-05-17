function lastKNumbersSequence(lengthOfArr, previousElements) {

    let result = [1];

    for (let i = 0; i < lengthOfArr - 1; i++) {
        let previous = previousElements;
        if (result.length < previousElements) {
            previous = result.length;
        }
        let nextElement = 0;
        for (let j = result.length - previous; j < result.length; j++) {
            nextElement += result[j];
        }
        result.push(nextElement);
    }
    return result;
}

console.log(lastKNumbersSequence(6, 3));
function exactIncreasingSubset(array) {

    let biggestNr = array[0];

    let filteredArray = array.filter(current => {
        if (biggestNr <= current) {
            biggestNr = current;
            return true;
        }
    });
    return filteredArray;
}

console.log(exactIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
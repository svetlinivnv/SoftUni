function sortingNumbers(numberArr) {

    numberArr.sort((a, b) => a - b);
    let sortedArr = [];

    while (numberArr.length) {
        sortedArr.push(numberArr.shift());
        sortedArr.push(numberArr.pop());
    }
    return sortedArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
function processOddPositions(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }

    let reversedResult = result.reverse();
    return reversedResult.join(' ')

}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
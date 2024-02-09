function processOddNumbers(array) {
    let oddArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            oddArray.push(array[i]);
        }
    }
    let oddArrayMultiplied = oddArray.map((num) => num * 2).reverse();
    console.log(oddArrayMultiplied.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);
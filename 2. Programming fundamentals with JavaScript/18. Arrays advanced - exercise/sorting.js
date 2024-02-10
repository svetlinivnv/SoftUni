function sorting(input) {
    input.sort((a, b) => a - b);

    let result = [];
    while (input.length != 0) {
        let largest = input.pop();
        result.push(largest);
        let smallest = input.shift();
        result.push(smallest);
    }
    console.log(result.join(' '));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
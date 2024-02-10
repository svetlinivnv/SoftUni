function bombNumbers(numbers, bomb) {
    let bombNumber = bomb[0];
    let neighbours = bomb[1];
    let sum = 0;

    while (numbers.includes(bombNumber)) {
        let appearanceIndex = numbers.indexOf(bombNumber);
        let start = Math.max(0, appearanceIndex - neighbours);
        let end = 2 * neighbours + 1;
        numbers.splice(start, end);
    }

    for (let curr of numbers) {
        sum += curr;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
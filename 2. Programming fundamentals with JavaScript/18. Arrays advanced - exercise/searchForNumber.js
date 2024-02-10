function searchForNumber(numbers, conditions) {
    let take = conditions.shift();
    let deleted = conditions.shift();
    let targetNumber = conditions.shift();

    let appearances = numbers.slice(0, take).slice(deleted).filter(number => number === targetNumber).length;
    console.log(`Number ${targetNumber} occurs ${appearances} times.`);
}

// searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
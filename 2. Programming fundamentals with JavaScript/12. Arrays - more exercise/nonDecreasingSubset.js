function nonDecreasingSubset(array) {

    let result = [];
    let biggestNum = 0;

    for (let currNum of array) {
        if (currNum >= biggestNum) {
            result.push(currNum);
            biggestNum = currNum;
        }
    }
    console.log(result.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
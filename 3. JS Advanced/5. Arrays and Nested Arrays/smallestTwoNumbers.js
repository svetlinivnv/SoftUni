function smallestTwoNumbers(array) {

    let sortedArr = array.sort((a, b) => a - b);
    let smallestArr = sortedArr.splice(0, 2);
    console.log(smallestArr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
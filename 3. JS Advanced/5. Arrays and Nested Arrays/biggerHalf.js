function biggerHalf(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let arrLength = sortedArr.length;
    let split = Math.ceil(arrLength / 2);
    let biggerHalf = sortedArr.slice(-split);

    return biggerHalf;
}


console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([4, 7, 2, 5, 6]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
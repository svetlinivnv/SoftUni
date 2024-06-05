function subSum (array, startI, endI) {
    let result = 0;

    if (!Array.isArray(array)) return NaN;
    startI = Math.max(startI, 0)
    endI = Math.min(endI, array.length - 1);

    for (let i = startI; i <= endI; i++) {
        let element = Number(array[i]);
        result += element;
    }
    return result;
}

let result = subSum([10, 20, 30, 40, 50, 60], 3, 300);
console.log(result);
function sumFirstLast(arr) {

    let first = Number(arr.shift());
    let last = Number(arr.pop());

    let result = first + last;

    return result;

}

console.log(sumFirstLast(['20', '30', '40']));
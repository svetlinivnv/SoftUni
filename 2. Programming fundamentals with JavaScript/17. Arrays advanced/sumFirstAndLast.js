function sumFirstAndLast(array) {

    let first = Number(array.shift());
    let last = Number(array.pop());
    let sumFirstLast = first + last;
    console.log(sumFirstLast);

}

sumFirstAndLast(['20', '30', '40']);
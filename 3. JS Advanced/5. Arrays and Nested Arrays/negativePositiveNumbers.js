function negativePositiveNumbers(array) {
    let result = [];

    array.forEach(element => {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    });

    result.forEach(element => {
        console.log(element);
    });
}

negativePositiveNumbers([7, -2, 8, 9]);
function negativeOrPositiveNumbers(array) {

    let result = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.unshift(array[i]);
        } else result.push(array[i]);

    }

    console.log(result.join('\n'));

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
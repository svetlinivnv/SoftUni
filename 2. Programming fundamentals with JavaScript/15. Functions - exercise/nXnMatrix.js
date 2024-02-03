function nXnMatrix(number) {
    let generateArray = [];

    for (let i = 0; i < number; i++) {
        generateArray.push(number);
    }

    for (let i = 0; i < number; i++) {
        console.log(generateArray.join(' '));
    }

}

nXnMatrix(7);
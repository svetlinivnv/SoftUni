function squareOfStars(number) {

    let row = '* '.repeat(number);
    for (let i = 0; i < number; i++) {
        console.log(row.trim());
    }
}

squareOfStars(5);
function evenPositionElement(array) {

    let resultArr = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(array[i]);
        }
    }
    console.log(resultArr.join(' '));
}


evenPositionElement(['20', '30', '40', '50', '60']);
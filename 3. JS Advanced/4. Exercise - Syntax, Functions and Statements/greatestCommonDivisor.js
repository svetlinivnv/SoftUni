function greatestCommonDivisor(numA, numB) {

    while (numB !== 0) {
        let remainder = numA % numB;
        numA = numB;
        numB = remainder;
    }
    console.log(numA);
}

greatestCommonDivisor(2154, 458);
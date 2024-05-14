function largestNumber (n1, n2, n3) {

    let largestNumber = n1;
    if (n2 > largestNumber) {
        largestNumber = n2;
    }
    if (n3 > largestNumber) {
        largestNumber = n3;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

largestNumber(5, -3, 16);
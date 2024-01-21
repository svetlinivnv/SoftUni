function sumOfNumbers(input) {

    let numberAsString = input[0];
    let sum = 0;
    for (let index = 0; index < numberAsString.length; index++) {

        sum += Number(numberAsString[index]);

    }

    console.log(`The sum of the digits is:${sum}`);

}

sumOfNumbers(['564891']);
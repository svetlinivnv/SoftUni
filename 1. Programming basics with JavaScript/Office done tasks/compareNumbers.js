function compareNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > num2) {
        console.log(`Number: ${num1} is greater than number: ${num2}.`);
    } else {
        console.log(`Number: ${num2} is greater than number: ${num1}.`);
    }

}

compareNumbers(["-1", "1"]);
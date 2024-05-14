function sumOfNumbers(n1, n2) {

    let number1 = Number(n1);
    let number2 = Number(n2);
    let result = 0;

    for (let i = number1; i <= number2; i++) {
        result += i;
    }
    console.log(result);
}

sumOfNumbers('-8', '20');
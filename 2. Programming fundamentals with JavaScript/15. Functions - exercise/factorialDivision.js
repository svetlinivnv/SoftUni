function factorialDivision(num1, num2) {

    let calculateFactorial = number => {
        let factorial = 1;
        for (i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }

    let result = (calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2);

    return console.log(result);
}

factorialDivision(5, 2);
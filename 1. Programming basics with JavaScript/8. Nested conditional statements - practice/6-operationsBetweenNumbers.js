function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let evenOrOdd = '';
    let result = 0;

    switch (operator) {
        case '+':
            result = n1 + n2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${n1} + ${n2} = ${result} - ${evenOrOdd}`); break;
        case '-':
            result = n1 - n2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${n1} - ${n2} = ${result} - ${evenOrOdd}`); break;
        case '*':
            result = n1 * n2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${n1} * ${n2} = ${result} - ${evenOrOdd}`); break;
        case '/':
            if (n2 != 0) {
                result = n1 / n2;
                console.log(`${n1} / ${n2} = ${(result).toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            } break;
        case '%':
            if (n2 != 0) {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            } break;
    }

}

operationsBetweenNumbers(["10", "0", "%"]);
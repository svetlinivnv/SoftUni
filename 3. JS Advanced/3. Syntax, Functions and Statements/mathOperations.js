function mathOperations(n1, n2, operator) {
    let result = 0;

    switch (operator) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '/': result = n1 / n2; break;
        case '*': result = n1 * n2; break;
        case '%': result = n1 % n2; break;
        case '**': result = n1 ** n2; break;
    }
    console.log(result);
}

// mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
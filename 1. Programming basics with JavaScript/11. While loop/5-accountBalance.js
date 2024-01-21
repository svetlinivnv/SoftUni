function accountBalance(input) {

    let currentTransaction = input[0];
    let balance = 0;
    let index = 0;

    while (currentTransaction != 'NoMoreMoney') {
        let currentTransactionAsNumber = Number(input[index]);
        if (currentTransactionAsNumber > 0) {
            balance += currentTransactionAsNumber;
            console.log(`Increase: ${currentTransactionAsNumber.toFixed(2)}`);
        }
        if (currentTransactionAsNumber < 0) {
            console.log('Invalid operation!');
            break;
        }
        index++;
        currentTransaction = input[index];
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);
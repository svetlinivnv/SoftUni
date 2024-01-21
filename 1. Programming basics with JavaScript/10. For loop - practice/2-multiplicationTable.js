function multiplicationTable(input) {

    let number = Number(input[0]);

    for (multiplicator = 1; multiplicator <= 10; multiplicator++) {
        let result = number * multiplicator;
        console.log(`${multiplicator} * ${number} = ${result}`);

    }
}

multiplicationTable(['5']);
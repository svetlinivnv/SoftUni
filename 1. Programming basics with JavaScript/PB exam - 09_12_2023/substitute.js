function substitute(input) {
    
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);

    let switches = 6;

    for (let number1digit1 = K; number1digit1 <= 8; number1digit1++) {
        for (let number1digit2 = 9; number1digit2 >= L; number1digit2--) {
            for (let number2digit1 = M; number2digit1 <= 8; number2digit1++) {
                for (let number2digit2 = 9; number2digit2 >= N; number2digit2--) {
                    if (number1digit1 % 2 === 0 && number1digit2 % 2 !== 0 && number2digit1 % 2 === 0 && number2digit2 % 2 !== 0 && switches != 0) {
                        let number1 = String(number1digit1) + String(number1digit2);
                        let number2 = String(number2digit1) + String(number2digit2);
                        if (number1 != number2) {
                            console.log(`${number1} - ${number2}`);
                            switches--;
                        } else console.log('Cannot change the same player.');
                    }
                }
            }
        }
    }
}

substitute(["7", "6", "8", "5"]);
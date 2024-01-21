function validSubstitutions(inputArray) {
    let K = Number(inputArray[0]);
    let L = Number(inputArray[1]);
    let M = Number(inputArray[2]);
    let N = Number(inputArray[3]);
    let changesCount = 0;

    for (let firstDigit1 = K; firstDigit1 <= 8; firstDigit1 += 1) {
        for (let secondDigit1 = 9; secondDigit1 >= L; secondDigit1 -= 1) {
            for (let firstDigit2 = M; firstDigit2 <= 8; firstDigit2 += 1) {
                for (let secondDigit2 = 9; secondDigit2 >= N; secondDigit2 -= 1) {
                    const firstDigit = `${firstDigit1}${secondDigit1}`
                    const secondDigit = `${firstDigit2}${secondDigit2}`
                    if (firstDigit1 % 2 === 0 && secondDigit1 % 2 !== 0 && firstDigit2 % 2 === 0 && secondDigit2 % 2 !== 0) {
                        if (changesCount < 6) {
                            if (firstDigit != secondDigit) {
                                console.log(`${firstDigit1}${secondDigit1} - ${firstDigit2}${secondDigit2}`);
                                changesCount++;
                            } else {
                                console.log("Cannot change the same player.");
                            }
                        }
                    }
                }
            }
        }
    }
}

validSubstitutions(["7", "6", "8", "5"]);
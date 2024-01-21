function sumOfTwoNumbers(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationNumber = 0;

    for (let n1 = intervalStart; n1 <= intervalEnd; n1++) {
        for (let n2 = intervalStart; n2 <= intervalEnd; n2++) {
            combinationNumber++;
            if (n1 + n2 === magicNumber) {
                console.log(`Combination N:${combinationNumber} (${n1} + ${n2} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinationNumber} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers(["88", "888", "2000"]);
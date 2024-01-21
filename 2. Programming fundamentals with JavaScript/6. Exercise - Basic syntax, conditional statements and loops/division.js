function division(num) {

    let toLog = 0;

    if (num % 2 === 0) {
        toLog = 2;
    }
    if (num % 3 === 0) {
        toLog = 3;
    }
    if (num % 6 === 0) {
        toLog = 6;
    }
    if (num % 7 === 0) {
        toLog = 7;
    }
    if (num % 10 === 0) {
        toLog = 10;
    }

    if (toLog === 0) {
        console.log("Not divisible");
    } else
    console.log(`The number is divisible by ${toLog}`);

}

const num = 1643;

division(num);
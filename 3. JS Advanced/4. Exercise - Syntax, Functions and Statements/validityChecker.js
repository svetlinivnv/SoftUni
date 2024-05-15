function validityChecker(x1, y1, x2, y2) {
    let x1Original = x1;
    let y1Original = y1;
    let x2Original = x2;
    let y2Original = y2;

    x2 = 0;
    y2 = 0;

    let xDifference1 = Math.pow(x2 - x1, 2);
    let yDifference1 = Math.pow(y2 - y1, 2);
    let result1 = Math.sqrt(xDifference1 + yDifference1);

    if (Number.isInteger(result1)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    x1 = x2Original;
    y1 = y2Original;

    x2 = 0;
    y2 = 0;

    let xDifference2 = Math.pow(x2 - x1, 2);
    let yDifference2 = Math.pow(y2 - y1, 2);
    let result2 = Math.sqrt(xDifference2 + yDifference2);

    if (Number.isInteger(result2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    x1 = x1Original;
    y1 = y1Original;

    x2 = x2Original;
    y2 = y2Original;

    let xDifference3 = Math.pow(x2 - x1, 2);
    let yDifference3 = Math.pow(y2 - y1, 2);
    let result3 = Math.sqrt(xDifference3 + yDifference3);

    if (Number.isInteger(result3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
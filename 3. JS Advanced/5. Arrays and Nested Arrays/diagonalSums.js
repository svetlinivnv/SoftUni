function diagonalSums(input) {

    let sumMain = 0;
    let sumSecond = 0;

    let positionMain = 0;
    let positionSecond = input.length - 1;

    for (current of input) {
        sumMain += current[positionMain];
        positionMain ++;
        sumSecond += current[positionSecond];
        positionSecond--;
    }

    console.log(`${sumMain} ${sumSecond}`);
}

diagonalSums([[20, 40], 
              [10, 60]]);

// diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
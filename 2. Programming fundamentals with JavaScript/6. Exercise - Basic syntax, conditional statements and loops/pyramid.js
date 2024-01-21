function pyramid(baseWidth, heightIncrement) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let row = 0;
    let currentBase = baseWidth;

    while (currentBase > 2) {
        let marble = currentBase * 4 - 4;
        let stone = currentBase * currentBase - marble;
        totalStone += stone;

        row++;
        if (row % 5 === 0) {
            totalLapis += marble;
        } else {
            totalMarble += marble;
        }
        currentBase -= 2;
    }
    row++;
    let gold = currentBase * currentBase;

    let stone = Math.ceil(totalStone * heightIncrement);
    let marble = Math.ceil(totalMarble * heightIncrement);
    let lapis = Math.ceil(totalLapis * heightIncrement);
    totalGold = Math.ceil(gold * heightIncrement);
    let totalHeight = Math.floor(row * heightIncrement);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);

}

const baseWidth = 11;
const heightIncrement = 1;

pyramid(baseWidth, heightIncrement);

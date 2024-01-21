function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);

    let piecesCount = length * width;
    let take = input[2];
    let index = 2;

    while (take != 'STOP') {

        take = input[index];
        piecesCount -= Number(take);
        index++;
        take = input[index];

        if (piecesCount < 0) {
            break;
        }
    }

    if (piecesCount < 0) {
        console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
    }
    if (piecesCount > 0) {
        console.log(`${piecesCount} pieces are left.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);

//cake(["10", "2", "2", "4", "6", "STOP"]);
function tennisRanklist(input) {

    let tournamentsCount = Number(input[0]);
    let points = Number(input[1]);
    let wonPoints = 0;
    let tournamentsCounter = 0;
    let wonTournamentsCounter = 0;

    for (i = 2; i <= input.length - 1; i++) {

        if (input[i] === 'W') {
            points += 2000;
            wonPoints += 2000;
            tournamentsCounter++;
            wonTournamentsCounter++;
        } else if (input[i] === 'F') {
            points += 1200;
            wonPoints += 1200;
            tournamentsCounter++;
        } else if (input[i] === 'SF') {
            points += 720;
            wonPoints += 720;
            tournamentsCounter++;
        }

    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(wonPoints / tournamentsCounter)}`);
    console.log(`${((wonTournamentsCounter / tournamentsCounter) * 100).toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
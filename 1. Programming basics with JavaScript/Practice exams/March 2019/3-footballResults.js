function footballResults(input) {

    let matchOne = input[0];
    let matchTwo = input[1];
    let matchThree = input[2];

    let wins = 0;
    let losses = 0;
    let draws = 0;

    if (Number(matchOne[0]) > Number(matchOne[2])) {
        wins += 1;
    } else if (Number(matchOne[0]) < Number(matchOne[2])) {
        losses += 1;
    } else if (Number(matchOne[0]) === Number(matchOne[2])) {
        draws += 1;
    }

    if (Number(matchTwo[0]) > Number(matchTwo[2])) {
        wins += 1;
    } else if (Number(matchTwo[0]) < Number(matchTwo[2])) {
        losses += 1;
    } else if (Number(matchTwo[0]) === Number(matchTwo[2])) {
        draws += 1;
    }

    if (Number(matchThree[0]) > Number(matchThree[2])) {
        wins += 1;
    } else if (Number(matchThree[0]) < Number(matchThree[2])) {
        losses += 1;
    } else if (Number(matchThree[0]) === Number(matchThree[2])) {
        draws += 1;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);

}

footballResults(['4:2', '0:3', '1:0']);
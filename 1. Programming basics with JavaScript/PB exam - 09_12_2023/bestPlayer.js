function findBestPlayer(input) {
    let bestPlayer = "";
    let maxGoals = 0;
    let hetTrick = 0;

    for (let i = 0; i < input.length; i += 2) {
        let currentPlayer = input[i];
        if (currentPlayer === 'END') { break; }
        let goals = Number(input[i + 1]);

        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = currentPlayer;
            if (goals >= 3) {
                hetTrick = 1;
            }
        }
        if (goals >= 10) { break; }
    }

    console.log(`${bestPlayer} is the best player!`);
    if (hetTrick === 1) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

findBestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
//findBestPlayer(["Silva", "5", "Harry Kane", "10"]);
//findBestPlayer(["Petrov", "2", "Drogba", "11"]);
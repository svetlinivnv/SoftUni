function darts(inputData) {
    const playerName = inputData[0];
    let points = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    for (let i = 1; i < inputData.length; i += 2) {
        const field = inputData[i];
        const score = parseInt(inputData[i + 1]);

        let multiplier = 1;
        if (field === "Triple") {
            multiplier = 3;
        } else if (field === "Double") {
            multiplier = 2;
        }

        const totalScore = score * multiplier;

        if (totalScore > points) {
            unsuccessfulShots++;
        } else {
            points -= totalScore;
            successfulShots++;
        }

        if (points === 0) {
            console.log(`${playerName} won the leg with ${successfulShots} shots.`);
            return;
        }
    }

    console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
}

// Example from the task:
darts([
    "Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
]);

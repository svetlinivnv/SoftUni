function biscuitFactory(input) {

    let biscuitsPerDayPerWorker = Number(input[0]);
    let workersCount = Number(input[1]);
    let competitorProduction = Number(input[2]);

    let production = 0;

    for (let day = 1; day <= 30; day++) {
        let currentDayProduction = biscuitsPerDayPerWorker * workersCount;

        if (day % 3 === 0) {
            currentDayProduction *= 0.75;
        }
        production += Math.floor(currentDayProduction);
    }

    let diff = production - competitorProduction;
    let diffInPercentage = (diff / competitorProduction) * 100;

    console.log(`You have produced ${production} biscuits for the past month.`);
    console.log(diff > 0 ? `You produce ${diffInPercentage.toFixed(2)} percent more biscuits.` : `You produce ${Math.abs(diffInPercentage).toFixed(2)} percent less biscuits.`);
}

// biscuitFactory(["78", "8", "16000"]);
// biscuitFactory(["65", "12", "26000"]);
biscuitFactory(["163", "16", "67020"]);
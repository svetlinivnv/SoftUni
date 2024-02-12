function blackFlag(input) {

    let piratingLasts = Number(input[0]);
    let stolenPerDay = Number(input[1]);
    let targetStolen = Number(input[2]);
    let totalStolen = 0;

    for (let day = 1; day <= piratingLasts; day++) {
        totalStolen += stolenPerDay;
        if (day % 3 === 0) {
            totalStolen += stolenPerDay * 0.5;
        }
        if (day % 5 === 0) {
            totalStolen -= 0.3 * totalStolen;
        }
    }

    if (totalStolen >= targetStolen) {
        console.log(`Ahoy! ${totalStolen.toFixed(2)} plunder gained.`);
    } else {
        let percentageStolen = (totalStolen / targetStolen) * 100;
        console.log(`Collected only ${percentageStolen.toFixed(2)}% of the plunder.`);
    }
}


blackFlag(["5", "40", "100"]);
// blackFlag(["10", "20", "380"]);
function mountainRun (input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsFor1Meter = Number(input[2]);

    let notDeductedTimeForDistance = distanceInMeters * timeInSecondsFor1Meter;
    let deductionTime = Math.floor(distanceInMeters/50) * 30;
    let totalTime = notDeductedTimeForDistance + deductionTime;

    if (totalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["5554.36",
"1340",
"3.23"]);
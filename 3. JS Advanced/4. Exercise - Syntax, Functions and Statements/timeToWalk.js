function timeToWalk (steps, meterPerStep, speedInKmh) {

    let distanceToDestination = steps * meterPerStep;
    let additionalBreaksTime = Math.floor(distanceToDestination / 500);
    let distanceInKm = distanceToDestination / 1000;
    let timeInSeconds = (distanceInKm / speedInKmh * 60 + additionalBreaksTime) * 60;

    let hours = timeInSeconds / 3600;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;

    console.log(`${String(Math.floor(hours)).padStart(2, '0')}:${String(Math.floor(minutes)).padStart(2, '0')}:${String(Math.ceil(seconds)).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
// timeToWalk(10000, 0.70, 5.5);
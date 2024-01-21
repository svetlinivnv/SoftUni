function swimRecord(input) {

    recordTime = Number(input[0]);
    distanceMeters = Number(input[1]);
    timePerMeter = Number(input[2]);
    waterDelay = Math.floor(distanceMeters / 15) * 12.5;
    
    tryTime = distanceMeters * timePerMeter + waterDelay;
    
    if (recordTime > tryTime){
        console.log(`Yes, he succeeded! The new world record is ${(tryTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(tryTime - recordTime).toFixed(2)} seconds slower.`);
    }

}

swimRecord(["10464", "1500", "20"]);
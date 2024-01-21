function skeleton(input) {

    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let controlTimeInSeconds = controlMinutes * 60 + controlSeconds;
    let tunnelInMeters = Number(input[2]);
    let secondsFor100M = Number(input[3]);
    
    let timeDelay = tunnelInMeters/120
    let timeDeduct = timeDelay * 2.5
    let hisTime = (tunnelInMeters/100) * secondsFor100M - timeDeduct;
    
    if (hisTime <= controlTimeInSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!\nHis time is ${hisTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(hisTime - controlTimeInSeconds).toFixed(3)} second slower.`);
    }

}

skeleton(['1', '20', '1546', '12']);
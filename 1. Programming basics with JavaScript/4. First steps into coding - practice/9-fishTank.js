function fishTank(input) {

    let tankLenghthInCm = Number(input[0]);
    let tankWidthInCm = Number(input[1]);
    let tankHeightInCm = Number(input[2]);
    let fullPercent = Number(input[3]) / 100;

    let tankVolumeInLiters = (tankLenghthInCm * tankWidthInCm * tankHeightInCm) * 0.001;
    
    let availableCapacity = tankVolumeInLiters * (1 - fullPercent);

    console.log(availableCapacity);
}

fishTank(["85", "75", "47", "17"]);
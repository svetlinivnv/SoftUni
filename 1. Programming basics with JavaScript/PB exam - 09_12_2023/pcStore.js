function pcStore(input) {

    let usdInLeva = 1.57;
    let cpuPriceInUsd = Number(input[0]);
    let gpuPriceInUsd = Number(input[1]);
    let ramPriceInUsd = Number(input[2]);
    let numberOfRam = Number(input[3]);
    let disountInPercentage = Number(input[4]);

    let gpuCpuDiscount = (gpuPriceInUsd + cpuPriceInUsd) * disountInPercentage;

    let totalInUsd = cpuPriceInUsd + gpuPriceInUsd + (ramPriceInUsd * numberOfRam) - gpuCpuDiscount;
    console.log(`Money needed - ${(totalInUsd * usdInLeva).toFixed(2)} leva.`);

}

pcStore(["200",
    "100",
    "80",
    "1",
    "0.01"])
    ;
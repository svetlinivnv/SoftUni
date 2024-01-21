function shopping(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuTotal = gpuCount * 250;
    let cpuTotal = 0.35 * gpuTotal * cpuCount;
    let ramTotal = 0.10 * gpuTotal * ramCount;

    let total = gpuTotal + cpuTotal + ramTotal;

    if (gpuCount > cpuCount) {
        total *= 0.85
    }

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);

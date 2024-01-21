function finalCompetition(input) {
    let dancersCount = Number(input[0]);
    let pointsCount = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let prize = dancersCount * pointsCount;
    let prizeAbroad = (prize * 0.5) + prize;

    totalPrize = 0;

    switch (place) {
        case 'Bulgaria':
            if (season === 'summer') {
                totalPrize = prize * 0.95;
            } else if (season === 'winter') {
                totalPrize = prize * 0.92;
            }
            break;

        case 'Abroad':
            if (season === 'summer') {
                totalPrize = prizeAbroad * 0.9;
            } else if (season === 'winter') {
                totalPrize = prizeAbroad * 0.85;
            }

            break;
    }

    let prizeAfterCharity = totalPrize * 0.25;
    console.log(`Charity - ${(totalPrize - prizeAfterCharity).toFixed(2)}`);

    let prizePerDancer = prizeAfterCharity / dancersCount;
    console.log(`Money per dancer - ${prizePerDancer.toFixed(2)}`);
}

finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"]);
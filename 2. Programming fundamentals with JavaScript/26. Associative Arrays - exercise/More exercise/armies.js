function armies(input) {

    const leadersArmies = {};

    input.forEach((element) => {
        if (element.includes("arrives")) {
            const leader = element.split("arrives").join(" ").trim();
            leadersArmies[leader] = {};
        } else if (element.includes("defeated")) {
            const defeated = element.split("defeated").join(" ").trim();
            if (defeated in leadersArmies) {
                delete leadersArmies[defeated];
            }
        } else if (element.includes(":")) {
            const [leaderName, rest] = element.split(": ");
            const [armyName, armyCount] = rest.split(", ");
            if (leaderName in leadersArmies) {
                leadersArmies[leaderName][armyName] = +armyCount;
            }
        } else if (element.includes("+")) {
            const [armyName, addCount] = element.split(" + ");
            for (current in leadersArmies) {
                if (armyName in leadersArmies[current]) {
                    leadersArmies[current][armyName] += +addCount;
                }
            }
        }
    });
    const leaderTotals = {};
    for (const leader in leadersArmies) {
        let tempTotal = 0;
        for (const army in leadersArmies[leader]) {
            tempTotal += leadersArmies[leader][army];
        }
        leaderTotals[leader] = tempTotal;
        tempTotal = 0;
    }
    const sortDesc = (objectToSort) => Object.entries(objectToSort).sort((a, b) => b[1] - a[1]);
    const sortedLeaders = sortDesc(leaderTotals);
    sortedLeaders.forEach((leader) => {
        console.log(`${leader[0]}: ${leader[1]}`);
        const sortedArmies = sortDesc(leadersArmies[leader[0]]);
        sortedArmies.forEach(([army, count]) => {
            console.log(`>>> ${army} - ${count}`);
        });
    });
}

// armies(['Rick Burr arrives',
//         'Fergus: Wexamp, 30245',
//         'Rick Burr: Juard, 50000',
//         'Findlay arrives',
//         'Findlay: Britox, 34540',
//         'Wexamp + 6000',
//         'Juard + 1350',
//         'Britox + 4500',
//         'Porter arrives',
//         'Porter: Legion, 55000',
//         'Legion + 302',
//         'Rick Burr defeated',
//         'Porter: Retix, 3205']);

armies([
    "Rick Burr arrives",
    "Findlay arrives",
    "Rick Burr: Juard, 1500",
    "Wexamp arrives",
    "Findlay: Wexamp, 34540",
    "Wexamp + 340",
    "Wexamp: Britox, 1155",
    "Wexamp: Juard, 43423",
]);

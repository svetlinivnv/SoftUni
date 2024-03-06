function armies(input) {

    let leadersArmies = {};

    input.forEach((element) => {
        if (element.includes("arrives")) {
            let leader = element.split("arrives").join(" ").trim();
            leadersArmies[leader] = {};
        } else if (element.includes("defeated")) {
            let defeated = element.split("defeated").join(" ").trim();
            if (defeated in leadersArmies) {
                delete leadersArmies[defeated];
            }
        } else if (element.includes(":")) {
            let [leaderName, rest] = element.split(": ");
            let [armyName, armyCount] = rest.split(", ");
            if (leaderName in leadersArmies) {
                leadersArmies[leaderName][armyName] = +armyCount;
            }
        } else if (element.includes("+")) {
            let [armyName, addCount] = element.split(" + ");
            for (current in leadersArmies) {
                if (armyName in leadersArmies[current]) {
                    leadersArmies[current][armyName] += +addCount;
                }
            }
        }
    });
    let leaderTotals = {};
    for (let leader in leadersArmies) {
        let tempTotal = 0;
        for (let army in leadersArmies[leader]) {
            tempTotal += leadersArmies[leader][army];
        }
        leaderTotals[leader] = tempTotal;
        tempTotal = 0;
    }
    let sortedLeaders = Object.entries(leaderTotals).sort((a, b) => b[1] - a[1]);
    sortedLeaders.forEach((leader) => {
        console.log(`${leader[0]}: ${leader[1]}`);
        let sortedArmies = Object.entries(leadersArmies[leader[0]]).sort(
            (a, b) => b[1] - a[1]
        );
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

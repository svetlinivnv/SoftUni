function aMinerTask(input) {

    let list = {};

    for (let i = 0; i < input.length; i += 2) {
        if (i % 2 === 0) {
            if (!list.hasOwnProperty(input[i])) {
                list[input[i]] = +input[i + 1];
            } else {
                list[input[i]] += +input[i + 1];
            }
        }
    }

    for (let material in list) {
        console.log(`${material} -> ${list[material]}`);
    }
}

// aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
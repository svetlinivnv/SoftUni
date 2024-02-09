function train(input) {
    let wagonsArr = input.shift().split(' ').map(Number);
    let wagonCap = +input.shift();

    for (let element of input) {
        let action = element.split(' ');

        if (action[0] === 'Add') {
            let passengersIn = Number(action[1]);
            wagonsArr.push(passengersIn);
        } else {
            let peopleToLoad = Number(action[0]);
            for (let i = 0; i < wagonsArr.length; i++) {
                let currentlyInWagon = wagonsArr[i];
                if (currentlyInWagon + peopleToLoad <= wagonCap) {
                    wagonsArr[i] += peopleToLoad; break;
                }
            }
        }
    }
    console.log(wagonsArr.join(' '));
}

train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75']);
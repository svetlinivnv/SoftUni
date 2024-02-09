function houseParty(input) {
    let guests = [];

    for (let command of input) {
        let splittedInput = command.split(' ');
        let name = splittedInput[0];

        if (splittedInput.includes('not')) {
            if (guests.includes(name)) {
                guests = guests.filter(guest => guest !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (!guests.includes(name)) {
                guests.push(name);
            } else console.log(`${name} is already in the list!`);
        }
    }
    console.log(guests.join('\n'));

}

houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!']);


// houseParty(['Tom is going!',

// 'Annie is going!',

// 'Tom is going!',

// 'Garry is going!',

// 'Jerry is going!']);
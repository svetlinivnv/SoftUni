function piccolo(input) {

    let carWithStatus = {};
    let parking = [];

    for (let current of input) {
        let [direction, number] = current.split(', ');
        switch (direction) {
            case 'IN':
                carWithStatus[number] = 1;
                break;
            case 'OUT':
                carWithStatus[number] = 0;
                break;
        }
    }

    for (let car in carWithStatus) {
        if (carWithStatus[car] === 1) {
            parking.push(car);
        }
    }
    let parkingSorted = parking.sort((a, b) => a.localeCompare(b));

    console.log(parking.length > 0 ? parkingSorted.join('\n') : 'Parking Lot is Empty');
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

// piccolo(['IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'OUT, CA1234TA']);
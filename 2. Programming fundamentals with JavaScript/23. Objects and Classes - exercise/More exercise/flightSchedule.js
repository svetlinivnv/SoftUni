function flightSchedule(input) {

    let flights = input[0];
    let statusChanges = input[1];
    let checkStatus = input[2].join('');
    let finalSchedule = [];

    for (let current of flights) {
        let [number, ...destination] = current.split(' ');
        destination = destination.join(' ');
        let flightObj = { number: number, destination: destination, status: 'Ready to fly' };
        for (let current of statusChanges) {
            let [numberTochange, statusToSet] = current.split(' ');
            if (number === numberTochange) {
                flightObj.status = statusToSet;
            }
        }
        finalSchedule.push(flightObj);
    }
    for (let flight of finalSchedule) {
        if (checkStatus === flight.status) {
            console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
        }
    }
}

// flightSchedule([['WN269 Delaware',
// 'FL2269 Oregon',
// 'WN498 Las Vegas',
// 'WN3145 Ohio',
// 'WN612 Alabama',
// 'WN4010 New York',
// 'WN1173 California',
// 'DL2120 Texas',
// 'KL5744 Illinois',
// 'WN678 Pennsylvania'],

// ['DL2120 Cancelled',
// 'WN612 Cancelled',
// 'WN1173 Cancelled',
// 'SK430 Cancelled'],

// ['Cancelled']]);


flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],

['Ready to fly']]);
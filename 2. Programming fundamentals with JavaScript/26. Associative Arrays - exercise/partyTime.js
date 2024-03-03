function partyTime(input) {

    let indexOfParty = input.indexOf('PARTY');
    let partyList = input.slice(0, indexOfParty);
    let attending = input.slice(indexOfParty + 1);

    let attended = [];

    attending.forEach(element => {
        if (partyList.includes(element)) {
            let index = partyList.indexOf(element);
            attended.push(element);
            partyList.splice(index, 1);
        }
    });

    console.log(partyList.length);
    partyList.forEach(element => {
        if (!isNaN(element[0])) {
            console.log(element);
        }
    });

    partyList.forEach(element => {
        if (isNaN(element[0])) {
            console.log(element);
        }
    });
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
// partyTime(['m8rfQBvl', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])
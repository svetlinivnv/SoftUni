function arrayManipulations(array) {

    let arrayToManipulate = array.shift().split(' ').map(Number);

    for (let current of array) {
        let [command, ...workNumArr] = current.split(' ');
        workNumArr = workNumArr.map(Number);
        switch (command) {
            case 'Add':
                arrayToManipulate.push(workNumArr[0]);
                break;
            case 'Remove':
                arrayToManipulate = arrayToManipulate.filter(num => num !== workNumArr[0]);
                break;
            case 'RemoveAt':
                arrayToManipulate.splice(workNumArr[0], 1);
                break;
            case 'Insert':
                arrayToManipulate.splice(workNumArr[1], 0, workNumArr[0]);
                break;
        }
    }
    console.log(arrayToManipulate.join(' '));
}

// arrayManipulations(['4 19 2 53 6 43',

// 'Add 3',

// 'Remove 2',

// 'RemoveAt 1',

// 'Insert 8 3']);


arrayManipulations(['6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2']);
function arrayManipulations(array) {

    let arrayToManipulate = array.shift().split(' ').map(Number);

    for (let current of array) {
        let [command, ...args] = current.split(' ');
        args = args.map(Number);
        switch (command) {
            case 'Add':
                arrayToManipulate.push(args[0]);
                break;
            case 'Remove':
                arrayToManipulate = arrayToManipulate.filter(num => num !== args[0]);
                break;
            case 'RemoveAt':
                arrayToManipulate.splice(args[0], 1);
                break;
            case 'Insert':
                arrayToManipulate.splice(args[1], 0, args[0]);
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
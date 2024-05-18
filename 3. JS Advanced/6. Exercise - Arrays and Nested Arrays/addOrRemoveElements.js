function addOrRemoveElements(input) {

    let inititalNr = 1;
    let resultArr = [];

    for (command of input) {
        switch (command) {
            case 'add': resultArr.push(inititalNr); break;
            case 'remove': resultArr.pop(); break;
        }
        inititalNr++;
    }

    if (resultArr.length > 0) {
        resultArr.forEach(element => console.log(element));
    } else {
        console.log('Empty');
    }
}

// addOrRemoveElements(['add', 'add', 'remove', 'add', 'add']);

// addOrRemoveElements(['remove', 'remove', 'remove']);


addOrRemoveElements(['add',
    'add',
    'add',
    'add']);
function storage(input) {

    let store = new Map();

    input.forEach(item => {
        let [currItem, quantity] = item.split(' ');
        
        if (!store.has(currItem)) {
            store.set(currItem, +quantity);
        } else {
            store.set(currItem, store.get(currItem) + +quantity);

        }
    });

    store.forEach((value, key) => {

        console.log(`${key} -> ${value}`);

    });
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
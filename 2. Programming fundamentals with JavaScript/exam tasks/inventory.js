function inventory(input) {
    let inventoryItems = input.shift().split(', ');

    for (let command of input) {
        if (command === 'Craft!') {
            break;
        }

        let [action, item] = command.split(' - ');

        switch (action) {
            case 'Collect':
                if (!inventoryItems.includes(item)) {
                    inventoryItems.push(item);
                }
                break;
            case 'Drop':
                if (inventoryItems.includes(item)) {
                    let index = inventoryItems.indexOf(item);
                    inventoryItems.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if (inventoryItems.includes(oldItem)) {
                    let index = inventoryItems.indexOf(oldItem);
                    inventoryItems.splice(index + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (inventoryItems.includes(item)) {
                    let index = inventoryItems.indexOf(item);
                    inventoryItems.splice(index, 1);
                    inventoryItems.push(item);
                }
                break;
        }
    }

    console.log(inventoryItems.join(', '));
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]);
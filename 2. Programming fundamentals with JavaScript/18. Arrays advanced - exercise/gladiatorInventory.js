function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let step of input) {
        let [command, item] = step.split(' ');

        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    let [storedItem] = inventory.splice(inventory.indexOf(item), 1)
                    inventory.push(storedItem);
                }
                break;
            case 'Upgrade':
                let [itemToUpgrade, upgrade] = item.split('-');
                let insertAs = itemToUpgrade + ':' + upgrade;
                if (inventory.includes(itemToUpgrade)) {
                    inventory.splice(inventory.indexOf(itemToUpgrade) + 1, 0, insertAs);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}


// gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);
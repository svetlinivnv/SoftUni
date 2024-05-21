function heroicInventory(array) {
    let result = [];

    for (let hero of array) {
        let [name, level, items] = hero.split(' / ');
        let heroObj = {
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : [],
        }
        result.push(heroObj);
    }

    result.pop();
    
    let resultJson = JSON.stringify(result);
    return resultJson;
}

let output = heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

// let output = heroicInventory(['Jake / 1000 ']);

console.log(output);
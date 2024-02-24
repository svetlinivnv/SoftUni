function inventory(input) {

    let heroes = [];

    for (let current of input) {

        let [name, level, items] = current.split(' / ')
        level = +level;
        let hero = { name: name, level: level, items: items };
        heroes.push(hero);

    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    for (let currHero of sortedHeroes) {
        console.log(`Hero: ${currHero.name}`);
        console.log(`level => ${currHero.level}`);
        console.log(`items => ${currHero.items}`);
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

]);
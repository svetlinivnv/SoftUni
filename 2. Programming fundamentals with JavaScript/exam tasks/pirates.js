function pirates(input) {
    let cities = {};

    for (let line of input) {
        if (line === 'Sail') {
            break;
        }

        let [town, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(town)) {
            cities[town] = { population, gold };
        } else {
            cities[town].population += population;
            cities[town].gold += gold;
        }
    }

    for (let command of input) {
        if (command === 'End') {
            break;
        }

        let [action, town, param1, param2] = command.split('=>');
        param1 = Number(param1);
        param2 = Number(param2);

        switch (action) {
            case 'Plunder':
                cities[town].population -= param1;
                cities[town].gold -= param2;
                console.log(`${town} plundered! ${param2} gold stolen, ${param1} citizens killed.`);

                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                if (param1 < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    cities[town].gold += param1;
                    console.log(`${param1} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                }
                break;
        }
    }

    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let town in cities) {
            console.log(`${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]));
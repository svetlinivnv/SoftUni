function carFactory(car) {
    let result = {
        model: car['model'],
    };

    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }

    if (car.power < 120) {
        result['engine'] = engines.small;
    } else if (car.power < 200) {
        result['engine'] = engines.normal;
    } else {
        result['engine'] = engines.monster;
    }

    let carriage = {
        type: car['carriage'],
        color: car['color'],
    }

    result['carriage'] = carriage;

    let wheelsSize = car['wheelsize'];
    wheelsSize = wheelsSize % 2 === 0 ? Math.floor(wheelsSize - 1) : wheelsSize;

    result['wheels'] = new Array(4).fill(wheelsSize);

    return result;
}

const output = carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
// const output = carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });
console.log(output);
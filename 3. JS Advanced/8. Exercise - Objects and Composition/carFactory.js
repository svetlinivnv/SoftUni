function carFactory(car) {

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    if (car.power < 120) {
        car['engine'] = smallEngine;
    } else if (car.power < 200) {
        car['engine'] = normalEngine;
    } else {
        car['engine'] = monsterEngine;
    }

    delete car['power']

    let carriageType = car['carriage'];
    let carriageColor = car['color'];
    delete car['carriage'];
    car['carriage'] = { type: carriageType, color: carriageColor };
    delete car['color'];

    let wheelsSize = car['wheelsize'];
    if (wheelsSize % 2 === 0) {
        wheelsSize = Math.floor(wheelsSize - 1);
    }

    car['wheels'] = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];
    delete car['wheelsize'];

    return car;
}

// const output = carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
const output = carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });
console.log(output);
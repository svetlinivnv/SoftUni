function garage (input) {

    let garages = {};

    input.forEach(item => {
        let [garage, info] = item.split(' - ');
        let carInfo = info;
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
            garages[garage].push(carInfo);
        } else
            garages[garage].push(carInfo);
    });
    for (let current in garages) {
        console.log(`Garage № ${current}`);
        garages[current].forEach(car => {
            carFormatted = car.split(': ').join(' - ');
            console.log(`--- ${carFormatted}`);
        });
    }
}

garage(['1 - color: blue, fuel type: diesel', 
        '1 - color: red, manufacture: Audi', 
        '2 - fuel type: petrol', 
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
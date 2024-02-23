function towns(input) {

    class Town {
        constructor(name, latitude, longitude) {
            this.town = name;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }

    for (let current of input) {
        let [name, longitude, latitude] = current.split(' | ');
        let town = new Town(name, longitude, latitude);
        console.log(`{ ${Object.keys(town)[0]}: '${town.town}', ${Object.keys(town)[1]}: '${town.latitude}', ${Object.keys(town)[2]}: '${town.longitude}' }`);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625']);
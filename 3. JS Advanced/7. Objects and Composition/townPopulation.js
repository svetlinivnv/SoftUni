function townPopulation(input) {
    let cityObject = {};

    input.forEach(element => {
        let [town, population] = element.split(' <-> ');
        if (!cityObject[town]) {
            cityObject[town] = Number(population);
        } else {
            cityObject[town] += Number(population);
        }
    });

    for (let current in cityObject) {
        console.log(`${current} : ${cityObject[current]}`);
    }
}

// townPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
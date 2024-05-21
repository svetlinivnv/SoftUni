function cityRecord(name, population, treasury) {

    let city = {
        name,
        population,
        treasury,
    }
    return city;
}

let solve = cityRecord('Tortuga', 7000, 15000);
console.log(solve);
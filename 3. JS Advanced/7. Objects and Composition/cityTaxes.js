function cityTaxes(name, population, treasury) {

    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {this.treasury += this.population * this.taxRate},
        applyGrowth(percentage) {this.population += this.population * (percentage / 100)},
        applyRecession(percentage) {this.treasury -= this.treasury * (percentage/100)},
    }
    return city;
}

let solve = cityTaxes('Tortuga', 7000, 15000);
console.log(solve);


const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);
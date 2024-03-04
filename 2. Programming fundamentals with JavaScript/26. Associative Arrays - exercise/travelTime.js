function travelTime(input) {

    let trips = {};

    input.forEach(trip => {
        let [country, city, cost] = trip.split(' > ');

        if (!trips.hasOwnProperty(country)) {
            trips[country] = {};
        }

        if (!trips[country].hasOwnProperty(city) || cost < trips[country][city]) {
            trips[country][city] = +cost;
        }
    });

    let sortedByCountry = Object.keys(trips).sort((a, b) => a.localeCompare(b));

    for (let country of sortedByCountry) {
        let sortedCities = Object.entries(trips[country]).sort((a, b) => a[1] - b[1]);

        console.log(`${country} -> ${sortedCities.map(city => `${city[0]} -> ${city[1]}`).join(' ')}`);

    }
}

// travelTime([
//     "Bulgaria > Sofia > 500",   
//     "Bulgaria > Sopot > 800",    
//     "France > Paris > 2000",    
//     "Albania > Tirana > 1000",    
//     "Bulgaria > Sofia > 200"    
//     ]);


travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);
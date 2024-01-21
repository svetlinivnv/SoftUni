function trip(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let location = '';
    let stayPrice = '';
    let accomodation = '';

    if (budget <= 100) {
        location = 'Bulgaria';
    } else if (budget <= 1000) {
        location = 'Balkans';
    } else {
        location = 'Europe';
    }

    switch (season) {
        case 'summer':
            switch (location) {
                case 'Bulgaria':
                    accomodation = 'Camp';
                    stayPrice = budget * 0.3; break;
                case 'Balkans':
                    accomodation = 'Camp';
                    stayPrice = budget * 0.4; break;
                case 'Europe':
                    accomodation = 'Hotel';
                    stayPrice = budget * 0.9; break;
            }
            break;

        case 'winter':
            switch (location) {
                case 'Bulgaria':
                    stayPrice = budget * 0.7;
                    accomodation = 'Hotel'; break;
                case 'Balkans':
                    accomodation = 'Hotel';
                    stayPrice = budget * 0.8; break;
                case 'Europe':
                    accomodation = 'Hotel';
                    stayPrice = budget * 0.9; break;
            }
            break;
    }

    console.log(`Somewhere in ${location}`);
    console.log(`${accomodation} - ${stayPrice.toFixed(2)}`);

}

trip(["50", "summer"]);
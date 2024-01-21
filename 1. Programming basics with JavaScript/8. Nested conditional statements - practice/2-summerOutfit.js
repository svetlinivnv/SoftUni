function summerOutfit(input) {

    let temp = Number(input[0]);
    let dayTime = input[1];
    let outfit = '';
    let shoes = '';

    switch (dayTime) {
        case 'Morning':
            if (temp >= 10 && temp <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (temp > 18 && temp <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temp > 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;

        case 'Afternoon':
            if (temp >= 10 && temp <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temp > 18 && temp <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (temp > 24) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;

        case 'Evening':
            if (temp >= 10 && temp <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temp > 18 && temp <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temp > 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            break;
    }

    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);

}

// summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
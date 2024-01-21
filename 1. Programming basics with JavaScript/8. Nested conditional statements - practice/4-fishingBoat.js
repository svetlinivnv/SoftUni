function fishingBoat(input) {

let budget = Number(input[0]);
let season = input[1];
let groupCount = Number(input[2]);

let evenOrOdd = '';

let boatRent = 0;

switch(season) {
    case 'Spring':
        boatRent = 3000;
        break;

    case 'Summer':    
    case 'Autumn':
        boatRent = 4200;
        break;

    case 'Winter':
        boatRent = 2600;
        break;
}

if(groupCount <= 6) {
    boatRent *= 0.90;
} else if(groupCount > 6 && groupCount <= 11) {
    boatRent *= 0.85;
} else {
    boatRent *= 0.75;
}

if(groupCount % 2 === 0) {
    evenOrOdd = 'even';
} else {
    evenOrOdd = 'odd';
}

if(evenOrOdd === 'even' && season != 'Autumn'){
    boatRent *= 0.95;
}

if(boatRent <= budget) {
    console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`);
}

}

fishingBoat(["3600",

"Autumn",

"6"]);
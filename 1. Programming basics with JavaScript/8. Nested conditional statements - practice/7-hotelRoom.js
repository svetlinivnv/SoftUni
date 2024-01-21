function hotelRoom(input) {

    let month = input[0];
    let nightsCount = input[1];
    let studioPerNight = 0;
    let apartmentPerNight = 0;
    let studioTotal = 0;
    let apartmentTotal = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPerNight = 50;
            studioTotal = studioPerNight * nightsCount;
            apartmentPerNight = 65;
            apartmentTotal = apartmentPerNight * nightsCount;
            break;
        case 'June':
        case 'September':
            studioPerNight = 75.20;
            studioTotal = studioPerNight * nightsCount;
            apartmentPerNight = 68.70;
            apartmentTotal = apartmentPerNight * nightsCount;
            break;
        case 'July':
        case 'August':
            studioPerNight = 76;
            studioTotal = studioPerNight * nightsCount;
            apartmentPerNight = 77;
            apartmentTotal = apartmentPerNight * nightsCount;
            break;
    }

    if (nightsCount > 7 && nightsCount <= 14) {
        if (month === 'May' || month === 'October')
            studioTotal *= 0.95;
    } else if (nightsCount > 14) {
        if (month === 'May' || month === 'October') {
            studioTotal *= 0.7;
        } else if (month === 'June' || month === 'September') {
            studioTotal *= 0.8;
        }
    }

    if (nightsCount > 14) {
        apartmentTotal *= 0.9;
    }

    console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);

}

hotelRoom(["August", "20"]);
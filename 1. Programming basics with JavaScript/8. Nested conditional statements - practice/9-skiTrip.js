function skiTrip(input) {

    let stayDays = Number(input[0]);
    let stayNights = stayDays - 1;
    let roomType = input[1];
    let oppinion = input[2];

    roomPrice = 18;
    apartmentPrice = 25;
    presidentApartmentPrice = 35;


    switch(roomType) {
        case 'room for one person':
            totalPrice = stayNights * roomPrice;
            break;

        case 'apartment':
            totalPrice = stayNights * apartmentPrice;
            if(stayDays < 10) {
                totalPrice *= 0.7;
            } else if(stayDays >= 10 && stayDays <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
            break;

        case 'president apartment':
            totalPrice = stayNights * presidentApartmentPrice;
            if(stayDays < 10) {
                totalPrice *= 0.9;
            } else if(stayDays >= 10 && stayDays <= 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
            break;
    }

    if(oppinion === 'positive'){
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));

}

skiTrip(["2", "apartment", "positive"]);
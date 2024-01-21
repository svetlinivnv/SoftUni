function snooker(input) {

    let stage = input[0];
    let ticketType = input[1];
    let ticketCount = input[2];
    let trophyPhoto = input[3];

    let ticketPrice = 0;
    let trophyTax = ticketCount * 40;

    switch (stage) {
        case 'Quarter final':
            switch (ticketType) {
                case 'Standard':
                    ticketPrice = 55.50;
                    break;
                case 'Premium':
                    ticketPrice = 105.20;
                    break;
                case 'VIP':
                    ticketPrice = 118.90;
                    break;
            }
            break;
        case 'Semi final':
            switch (ticketType) {
                case 'Standard':
                    ticketPrice = 75.88;
                    break;
                case 'Premium':
                    ticketPrice = 125.22;
                    break;
                case 'VIP':
                    ticketPrice = 300.40;
                    break;
            }
            break;
        case 'Final':
            switch (ticketType) {
                case 'Standard':
                    ticketPrice = 110.10;
                    break;
                case 'Premium':
                    ticketPrice = 160.66;
                    break;
                case 'VIP':
                    ticketPrice = 400.00;
                    break;
            }
            break;
    }

    let totalTicketPrice = ticketPrice * ticketCount;

    if (totalTicketPrice > 4000) {
        totalTicketPrice *= 0.75;
    } else if (totalTicketPrice > 2500) {
        totalTicketPrice *= 0.9;
        if (trophyPhoto === 'Y') {
            totalTicketPrice += trophyTax;
        }
    } else {
        if (trophyPhoto === 'Y') {
            totalTicketPrice += trophyTax;
        }
    }

    console.log(totalTicketPrice.toFixed(2));

}

// snooker(["Final", "Premium", "25", "Y"]);
// snooker(["Semi final", "VIP", "9", "Y"]);
snooker(["Quarter final", "Standard", "11", "N"]);
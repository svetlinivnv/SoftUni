function vacation(group, type, day) {

    let pricePerPerson = 0;
    let total = 0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 8.45;
                    break;
                case 'Saturday':
                    pricePerPerson = 9.80;
                    break;
                case 'Sunday':
                    pricePerPerson = 10.46
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 10.90;
                    break;
                case 'Saturday':
                    pricePerPerson = 15.60;
                    break;
                case 'Sunday':
                    pricePerPerson = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 15;
                    break;
                case 'Saturday':
                    pricePerPerson = 20;
                    break;
                case 'Sunday':
                    pricePerPerson = 22.50;
                    break;
            }
            break;
    }

    total = group * pricePerPerson;

    //discounts:
    if (type === 'Students' && group >= 30) {
        total = (group * pricePerPerson) * 0.85;
    } else if (type === 'Business' && group >= 100) {
        group -= 10;
        total = group * pricePerPerson;
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        total = (group * pricePerPerson) * 0.95;
    } 

    console.log(`Total price: ${total.toFixed(2)}`);
}

const group = 40;
const type = 'Regular';
const day = 'Saturday';
vacation(group, type, day);
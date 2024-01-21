function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];

    let price = 0;

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch(fruit) {
                case 'banana': price = quantity * 2.50; break;
                case 'apple': price = quantity * 1.20; break;
                case 'orange': price = quantity * 0.85; break;
                case 'grapefruit': price = quantity * 1.45; break;
                case 'kiwi': price = quantity * 2.70; break;
                case 'pineapple': price = quantity * 5.50; break;
                case 'grapes': price = quantity * 3.85; break;
                default: console.log('error');
            }
        break;
        case 'Saturday':
        case 'Sunday':
            switch(fruit) {
                case 'banana': price = quantity * 2.70; break;
                case 'apple': price = quantity * 1.25; break;
                case 'orange': price = quantity * 0.90; break;
                case 'grapefruit': price = quantity * 1.60; break;
                case 'kiwi': price = quantity * 3.00; break;
                case 'pineapple': price = quantity * 5.60; break;
                case 'grapes': price = quantity * 4.20; break;
                default: console.log('error');
            }
        break;
        default: console.log('error');
    }

    if (price != 0) {
        console.log(price.toFixed(2));
    }
}

fruitShop(["tomato", "Monday", "0.5"]);
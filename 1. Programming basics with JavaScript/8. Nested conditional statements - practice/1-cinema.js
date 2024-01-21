function cinema(input) {

let projectionType = input[0];
let rowsCount = Number(input[1]);
let columnsCount = Number(input[2]);

let seats = rowsCount * columnsCount;

let totalPrice = 0;

switch (projectionType) {
    case 'Premiere':
        totalPrice = seats * 12.00;
        break;

    case 'Normal':
        totalPrice = seats * 7.50;
        break;

    case 'Discount':
        totalPrice = seats * 5.00;
        break;
    
}

console.log(`${totalPrice.toFixed(2)} leva`);

}

cinema(["Discount", "12", "30"]);
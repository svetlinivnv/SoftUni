function birthDay(input) {

let roomRent = Number(input[0]);
let cakePrice = roomRent * 0.2;
let drinksPrice = cakePrice - (cakePrice * 0.45);
let animationPrice = (1 / 3) * roomRent;

let totalPrice = roomRent + cakePrice + drinksPrice + animationPrice;

console.log(totalPrice);

}

birthDay(["2250"]);
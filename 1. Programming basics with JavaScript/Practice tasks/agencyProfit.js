function agencyProfit(input) {

let companyName = input[0];
let adultsTicketsCount = Number(input[1]);
let childrenTicketsCount = Number(input[2]);
let adultTicketNetPrice = Number(input[3]);
let staffTax = Number(input[4]);

let childTicketNetPrice = adultTicketNetPrice - (adultTicketNetPrice * 0.7);

let adultTicketPrice = adultTicketNetPrice + staffTax;
let childTicketPrice = childTicketNetPrice + staffTax;

let totalPrice = adultTicketPrice * adultsTicketsCount + childTicketPrice * childrenTicketsCount;
let totalIncome = totalPrice * 0.2;

console.log(`The profit of your agency from ${companyName} tickets is ${totalIncome.toFixed(2)} lv.`);

}

agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);


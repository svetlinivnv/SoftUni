function agencyProfit(input) {
  let agencyName = input[0];
  let adultTickets = Number(input[1]);
  let childTickets = Number(input[2]);
  let adultNetPrice = Number(input[3]);
  let serviceTax = Number(input[4]);

  let childPrice = adultNetPrice * 0.3 + serviceTax;
  let adultPrice = adultNetPrice + serviceTax;

  let totalCost = childPrice * childTickets + adultPrice * adultTickets;

  let profit = totalCost * 0.2;

  console.log(
    `The profit of your agency from ${agencyName} tickets is ${profit.toFixed(
      2
    )} lv.`
  );
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);

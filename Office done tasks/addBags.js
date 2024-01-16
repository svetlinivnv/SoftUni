function addBags(input) {
  let above20KgPrice = Number(input[0]);
  let luggageWeight = Number(input[1]);
  let daysToTrip = Number(input[2]);
  let luggageCount = Number(input[3]);

  let between10And20KgPrice = above20KgPrice * 0.5;
  let upTo10KgPrice = above20KgPrice * 0.2;

  let totalCost = 0;

  if (luggageWeight > 20) {
    totalCost = above20KgPrice * luggageCount;
  } else if (luggageWeight >= 10) {
    totalCost = between10And20KgPrice * luggageCount;
  } else {
    totalCost = upTo10KgPrice * luggageCount;
  }

  if (daysToTrip > 30) {
    totalCost *= 1.1;
  } else if (daysToTrip >= 7) {
    totalCost *= 1.15;
  } else {
    totalCost *= 1.4;
  }

  console.log(`The total price of bags is: ${totalCost.toFixed(2)} lv.`);

}

// addBags(["30", "18", "15", "2"]);
// addBags(["25.50","5","36","6"]);
addBags(["63.80","23","3","1"]);
function orders(type, quantity) {
  let total = 0;
  switch (type) {
    case "coffee":
      total = quantity * 1.5;
      return total.toFixed(2);
    case "coke":
      total = quantity * 1.4;
      return total.toFixed(2);
    case "water":
      total = quantity * 1;
      return total.toFixed(2);
    case "snacks":
      total = quantity * 2;
      return total.toFixed(2);
  }
}

console.log(orders("water", 5));

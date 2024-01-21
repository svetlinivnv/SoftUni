function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrokenCount = 0;

    for (i = 1; i <= lostFights; i++){
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 6 === 0) {
            expenses += shieldPrice;
            shieldBrokenCount ++;
            if (shieldBrokenCount % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);
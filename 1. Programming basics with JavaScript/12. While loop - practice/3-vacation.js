function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);

    let daysSpending = 0;
    let totalDays = 0;
    let index = 2;

    while (moneyNeeded > moneyAvailable) {

        let action = input[index];
        index ++;
        let amountSavedOrSpent = Number(input[index]);
        index ++;

        if (action === 'spend') {
            daysSpending++;
            totalDays++;
            if (moneyAvailable < amountSavedOrSpent) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= amountSavedOrSpent;
            }
        }

        if (action === 'save') {
            daysSpending=0;
            totalDays++;
            moneyAvailable += amountSavedOrSpent;
        }
        if (daysSpending === 5) {
            console.log(`You can't save the money.\n${totalDays}`);
            break;
        }
    }

    if (moneyNeeded <= moneyAvailable) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"]);

function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);

    let daysSpending = 0;
    let totalDays = 0;
    let index = 2;

    while (daysSpending < 5 && moneyAvailable < moneyNeeded) {
        let action = input[index];
        index++;
        let amountSavedOrSpent = Number(input[index]);
        index++;

        if (action === 'spend') {
            daysSpending++;
            totalDays++;
            if (moneyAvailable < amountSavedOrSpent) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= amountSavedOrSpent;
            }
        }

        if (action === 'save') {
            daysSpending = 0;
            totalDays++;
            moneyAvailable += amountSavedOrSpent;
        }
    }

    if (daysSpending === 5) {
        console.log(`You can't save the money.\n${totalDays}`);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
        
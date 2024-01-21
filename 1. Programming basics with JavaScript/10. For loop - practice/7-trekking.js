function trekking(input) {

    let groupsCount = Number(input[0]);

    let peopleTotal = 0;

    let mussalaCounter = 0;
    let monblanCounter = 0;
    let kilimanCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;


    for (i = 1; i <= input.length - 1; i++) {

        peopleTotal += Number(input[i]);

        if (Number(input[i]) < 6) {
            mussalaCounter += Number(input[i]);
        } else if (Number(input[i]) < 13) {
            monblanCounter += Number(input[i]);
        } else if (Number(input[i]) < 26) {
            kilimanCounter += Number(input[i]);
        } else if (Number(input[i]) < 41) {
            k2Counter += Number(input[i]);
        } else {
            everestCounter += Number(input[i]);
        }

    }

    console.log(`${((mussalaCounter / peopleTotal) * 100).toFixed(2)}%`);
    console.log(`${((monblanCounter / peopleTotal) * 100).toFixed(2)}%`);
    console.log(`${((kilimanCounter / peopleTotal) * 100).toFixed(2)}%`);
    console.log(`${((k2Counter / peopleTotal) * 100).toFixed(2)}%`);
    console.log(`${((everestCounter / peopleTotal) * 100).toFixed(2)}%`);
}

trekking(["5", "25", "41", "31", "250", "6"]);
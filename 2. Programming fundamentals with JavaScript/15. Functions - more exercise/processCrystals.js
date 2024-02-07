function processCrystals(input) {
    const targetThickness = input[0];
    let currentThickness = 0;


    let cut = () => currentThickness / 4;
    let lap = () => currentThickness * 0.8;
    let grind = () => currentThickness - 20;
    let etch = () => currentThickness - 2;
    let xray = () => currentThickness + 1;
    let tranWash = () => Math.floor(currentThickness);

    for (let i = 1; i < input.length; i++) {
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let usedXray = false;
        currentThickness = input[i];
        console.log(`Processing chunk ${currentThickness} microns`);
        while (currentThickness > targetThickness) {
            if (cut() >= targetThickness) {
                currentThickness = cut(); cutCount++;
            } else if (lap() >= targetThickness) {
                currentThickness = lap(); lapCount++;
            } else if (grind() >= targetThickness) {
                currentThickness = grind(); grindCount++;
            } else if (etch() >= targetThickness) {
                currentThickness = etch(); etchCount++;
            } else if (xray() >= targetThickness && usedXray === false) {
                currentThickness = xray(); usedXray = true;
            }

            currentThickness = tranWash();

        }

        if (cutCount > 0) { console.log(`Cut x${cutCount}\nTransporting and washing`); }
        if (lapCount > 0) { console.log(`Lap x${lapCount}\nTransporting and washing`); }
        if (grindCount > 0) { console.log(`Grind x${grindCount}\nTransporting and washing`); }
        if (etchCount > 0) { console.log(`Etch x${etchCount}\nTransporting and washing`); }
        if (usedXray) { console.log('X-ray x1'); }
        console.log(`Finished crystal ${currentThickness} microns`);

    }
}

// processCrystals([1375, 50000]);
// processCrystals([1000, 4000, 8100]);
processCrystals([100, 101.9]);

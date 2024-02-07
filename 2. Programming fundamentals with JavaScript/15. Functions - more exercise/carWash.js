function carWash(array) {
    let value = 0;

    let soap = () => value += 10;
    let water = () => value *= 1.2;
    let vacuum = () => value *= 1.25;
    let mud = () => value *= 0.9;

    for (let command of array) {
        switch (command) {
            case "soap":
                soap();
                break;
            case "water":
                water();
                break;
            case "vacuum cleaner":
                vacuum();
                break;
            case "mud":
                mud();
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);

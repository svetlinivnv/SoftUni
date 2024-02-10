function muOnline(input) {
    let dungeonRooms = input.split('|'); // Convert the string to an array
    let health = 100;
    let bitcoins = 0;
    let isDead = false;
    let bestRoom = 0;

    for (let i = 0; i < dungeonRooms.length; i++) {
        let [command, value] = dungeonRooms[i].split(' ');

        value = Number(value);

        switch (command) {
            case 'potion':
                if (health + value > 100) {
                    value = 100 - health;
                    health = 100;
                } else {
                    health += value;
                }
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health <= 0) {
                    isDead = true;
                    bestRoom = i + 1;
                    break;
                }
                console.log(`You slayed ${command}.`);
                break;
        }

        if (isDead) {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${bestRoom}`);
            break;
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
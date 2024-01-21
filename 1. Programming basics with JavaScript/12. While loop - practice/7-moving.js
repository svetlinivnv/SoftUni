function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volumeAvailable = width * length * height;
    let volumeNeeded = 0;

    let volume = input[3];
    let index = 3;

    while (volume !== 'Done') {

        volumeNeeded += Number(volume);
        index++;
        volume = input[index];

        if (volumeNeeded > volumeAvailable) {
            break;
        }
    }

    if (volume === 'Done') {
        console.log(`${volumeAvailable - volumeNeeded} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(volumeNeeded - volumeAvailable)} Cubic meters more.`);
    }
}

//moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
function magicSum (array, number) {

    for (let i = 0; i < array.length; i++) {

        let currentN = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if ((currentN + array[j]) === number) {
                console.log(currentN, array[j]);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
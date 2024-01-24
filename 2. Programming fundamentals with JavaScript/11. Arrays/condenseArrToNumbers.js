function condenseArrToNumbers(array) {

    while (array.length > 1) {
        let condensedArray = [];

        for (let i = 0; i < array.length - 1; i++) {
            condensedArray[i] = array[i] + array[i+1];
        }

        array = condensedArray;

    }
    console.log(array[0]);
}

condenseArrToNumbers ([5,0,4,1,2]);


function smallestOfThree (nOne, nTwo, nThree) {

    let array = [];
    array.push(nOne,nTwo,nThree);
    let smallestN = array[0];

    for (let i = 1; i < array.length; i++) {

        if (smallestN > array[i]) {
            smallestN = array[i];
        }
    }
    console.log(smallestN);
}

smallestOfThree(2, 5, 3);
smallestOfThree(600, 342, 123);
smallestOfThree(25, 21, 4);
smallestOfThree(2, 2, 2);
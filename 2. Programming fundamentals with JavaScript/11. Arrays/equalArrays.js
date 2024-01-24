function equalArrays(arr1, arr2) {

    let areDifferent = false;
    let sum = 0;

    for (i = 0; i < arr1.length; i++) {
        let currArr1 = Number(arr1[i]);
        let currArr2 = Number(arr2[i]);
        sum += currArr1;

        if (currArr1 !== currArr2) {
            areDifferent = true;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if (!areDifferent) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(['1'], ['10']);
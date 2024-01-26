function equalSums(array) {

    let result = 'no';
    
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        for (let k = array.length - 1; k > i; k--) {
            rightSum += array[k];
        }
        if (leftSum === rightSum) {
            result = i;
            break;
        }
    } 

    console.log(result);

}

equalSums([1, 2, 3, 3]);
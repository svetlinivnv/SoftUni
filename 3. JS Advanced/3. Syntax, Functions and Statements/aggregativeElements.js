function aggregativeElements(array) {

    let sum = 0;
    let inverseSum = 0;
    let concatenatedElements = '';
    array.forEach(element => {
        sum += element;
        inverseSum += 1/element;
        concatenatedElements += String(element);
    });

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenatedElements);
}

aggregativeElements([1, 2, 3]);
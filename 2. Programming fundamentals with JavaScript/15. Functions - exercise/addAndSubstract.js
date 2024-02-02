function addAndSubtract(n1, n2, n3) {

    let sum = (n1, n2) => n1 + n2;

    let resultOfSum = sum(n1, n2);

    let subtract = (resultOfSum, n3) => resultOfSum - n3;

    console.log(subtract(resultOfSum, n3));

}

addAndSubtract(23, 6, 10);
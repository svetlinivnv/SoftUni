function biggestElement(input) {

    let biggestElement = Number.NEGATIVE_INFINITY;

    for (current of input) {
        for (element of current) {
            if (element > biggestElement) {
                biggestElement = element;
            }
        }
    }
    return biggestElement;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
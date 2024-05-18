function printArrayWithGivenDelimiter(array, delimiter) {

    let delimiterAdded = array.map((element, index) => {
        if (index < array.length - 1) {
            return element += delimiter;
        } else {
            return element;
        }
    });

    console.log(delimiterAdded.join(''));
}

printArrayWithGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
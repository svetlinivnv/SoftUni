function lettersChangeNumbers(input) {

    let arrOfInputs = input.split(' ').filter(str => str != '');
    let result = 0;

    for (let current of arrOfInputs) {
        let firstLetter = current[0];
        let lastLetter = current[current.length - 1];
        let number = Number(current.substring(1, current.length - 1));
        let alphabetPositionFirst = firstLetter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let alphabetPositionLast = lastLetter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;

        if (firstLetter !== firstLetter.toLowerCase()) {
            number /= alphabetPositionFirst;
        } else {
            number *= alphabetPositionFirst;
        }

        if (lastLetter !== lastLetter.toLowerCase()) {
            number -= alphabetPositionLast;
        } else {
            number += alphabetPositionLast;
        }

        result += number
    }
    console.log(result.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
// lettersChangeNumbers('P34562Z q2576f H456z');
// lettersChangeNumbers('a1A');
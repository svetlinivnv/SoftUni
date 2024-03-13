function valueOfAString(input) {
    let string = input[0];
    let letterType = input[1];

    let upperSum = 0;
    let lowerSum = 0;

    for (let i = 0; i < string.length; i++) {
        let currLetter = string[i];
        let asciiValue = currLetter.charCodeAt();

        if ((asciiValue >= 65 && asciiValue <= 90) || (asciiValue >= 97 && asciiValue <= 122)) {

            if (currLetter === currLetter.toLowerCase()) {
                lowerSum += asciiValue;
            } else upperSum += asciiValue;
        }
    }
    console.log(`The total sum is: ${letterType === 'LOWERCASE' ? lowerSum : upperSum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);

valueOfAString(['AC/DC',
    'UPPERCASE']);
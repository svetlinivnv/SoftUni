function charactersInRange(char1, char2) {

    const char1Code = char1.charCodeAt(0);
    const char2Code = char2.charCodeAt(0);
    const start = Math.min(char1Code, char2Code);
    const end = Math.max(char1Code, char2Code);

    let arrayOfChars = [];

    for (let i = start + 1; i < end; i++) {
        currChar = String.fromCharCode(i);
        arrayOfChars.push(currChar);
    }
    console.log(arrayOfChars.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
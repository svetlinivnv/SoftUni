function stringSubstring(word, string) {

    let stringToLowerCase = string.toLowerCase();
    let stringArr = stringToLowerCase.split(' ');
    let isFound = false;

    for (let currWord of stringArr) {
        if (currWord === word) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language');
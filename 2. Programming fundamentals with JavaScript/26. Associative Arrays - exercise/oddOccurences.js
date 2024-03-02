function oddOccurences(input) {

    let wordsArr = input.split(' ').map((a) => a.toLowerCase());
    let unique = [];
    let wordOccurences = {}

    wordsArr.forEach(word => {
        if (!unique.includes(word)) {
            unique.push(word);
        }
        if (!wordOccurences.hasOwnProperty(word)) {
            wordOccurences[word] = 1;
        } else {
            wordOccurences[word] += 1;
        }
    });

    let output = [];
    unique.forEach(currWord => {
        if (wordOccurences[currWord] % 2 !== 0) {
            output.push(currWord);
        }
    });

    console.log(output.join(' '));
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
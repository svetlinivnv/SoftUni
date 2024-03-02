function oddOccurences(input) {

    let wordsArr = input.split(' ').map((a) => a.toLowerCase());
    let uniqueArray = [...new Set(wordsArr)];
    let wordsWithCount = {}

    wordsArr.forEach(word => {
        if (!wordsWithCount.hasOwnProperty(word)) {
            wordsWithCount[word] = 1;
        } else {
            wordsWithCount[word] += 1;
        }
    });

    let valid = [];

    Object.entries(wordsWithCount).forEach(element => {
        let word = element[0];
        let count = element[1];
        if (count % 2 !== 0) {
            valid.push(word);
        }

    });

    let output = [];

    for (let currWord of uniqueArray) {
        if (valid.includes(currWord)) {
            output.push(currWord);
        }
    }
    console.log(output.join(' '));
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
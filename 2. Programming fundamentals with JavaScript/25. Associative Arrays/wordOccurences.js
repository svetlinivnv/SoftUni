function wordOccurences(input) {

    let wordsList = {}

    input.forEach(word => {
        if (!wordsList.hasOwnProperty(word)) {
            wordsList[word] = 1;
        } else {
            wordsList[word] += 1;
        }
    });

    let sortedWordsList = Object.entries(wordsList).sort((a, b) => b[1] - a[1]);

    sortedWordsList.forEach(word => {
        console.log(`${word[0]} -> ${word[1]} times`);
    });
}

wordOccurences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
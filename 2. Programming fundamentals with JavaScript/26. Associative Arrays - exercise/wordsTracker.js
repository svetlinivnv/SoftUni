function wordsTracker(input) {

    let lookFor = input.shift().split(' ');
    let occurrences = {};

    lookFor.forEach(word => {
        let occurrencesWord = word;
        occurrences[word] = 0;

        input.forEach(word => {
            if (word === occurrencesWord) {
                occurrences[word] += 1;
            }
        });
    });

    let sortedOccurences = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    sortedOccurences.forEach(currWord => {
        console.log(`${currWord[0]} - ${currWord[1]}`);
    });
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
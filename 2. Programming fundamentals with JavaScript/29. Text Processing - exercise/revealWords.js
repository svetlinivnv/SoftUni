function revealWords(words, sentence) {

    const wordsArr = words.split(', ');
    const sentenceArr = sentence.split(' ');

    wordsArr.forEach(word => {
        sentenceArr.forEach(wordInSentence => {
            if (wordInSentence.includes('*') && wordInSentence.length === word.length) {
                let index = sentenceArr.indexOf(wordInSentence);
                sentenceArr[index] = word;
            }
        });
    });
    console.log(sentenceArr.join(' '));
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');

revealWords('great, learning', 
            'softuni is ***** place for ******** new programming languages');
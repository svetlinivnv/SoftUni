function modernTimesOfHashtag(input) {
    let inputArr = input.split(' ');
    var lettersRegex = /^[A-Za-z]+$/;
    let validWords = [];

    inputArr.forEach(word => {
        if (word.includes('#') && word.length > 1) {
            let slicedWord = word.slice(1);
            if (lettersRegex.test(slicedWord)) {
                validWords.push(slicedWord);
            }
        }
    });
    validWords.forEach(word => {
        console.log(word);
    });
}

modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
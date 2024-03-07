function censoredWords(input, censor) {

    let censored = input.replace(censor, '*'.repeat(censor.length));
    while (censored.includes(censor)) {
        censored = censored.replace(censor, '*'.repeat(censor.length));
    }
    console.log(censored);
}

censoredWords('A small sentence with some words',
    'small');
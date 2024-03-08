function pascalCaseSplitter(input) {

    let stringWithSpace = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase() && i > 0) {
            stringWithSpace += ' ' + input[i];
        } else {
            stringWithSpace += input[i];
        }
    }
    let result = stringWithSpace.split(' ').join(', ');
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
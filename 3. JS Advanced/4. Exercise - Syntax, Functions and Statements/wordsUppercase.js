function wordsUppercase(input) {

    let inputArr = input.toUpperCase().split(/\W+/);
    let lastElement = inputArr.length - 1;
    if (!inputArr[lastElement]) {
        inputArr.pop();
    }

    console.log(inputArr.join(', '));
}

wordsUppercase('Hi, how are you?');
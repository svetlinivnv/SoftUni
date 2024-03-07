function countStringOccurrences(input, countWord) {
    let inputArr = input.split(' ');
    counter = 0;
    
    inputArr.forEach(word => {
        if (word === countWord) {
            counter++;
        }
    });
    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
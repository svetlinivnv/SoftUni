function passwordGenerator(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let concated = input[0] + input[1];
    let concatedArr = concated.split('');
    let word = input[2];
    let wordIndex = 0;

    for (let i = 0; i < concatedArr.length; i++) {
        if (wordIndex > word.length - 1) {
            wordIndex = 0;
        }
        if (vowels.includes(concatedArr[i])) {
            concatedArr[i] = word[wordIndex].toUpperCase();
            wordIndex ++;
        }
    }

    let result = concatedArr.reverse().join('');
    console.log(`Your generated password is ${result}`);
}

passwordGenerator(['ilovepizza',
    'ihatevegetables',
    'orange'
]);
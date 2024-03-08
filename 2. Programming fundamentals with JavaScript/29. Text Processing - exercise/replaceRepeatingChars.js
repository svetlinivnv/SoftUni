function replaceRepeatingChars(input) {

    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (i === 0 || input[i] !== input[i - 1]) {
            result += input[i];        
        }
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
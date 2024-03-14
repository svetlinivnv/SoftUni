function asciiSumator(input) {
    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);
    let stringArr = input[2].split('');
    let asciiSum = 0;

    stringArr.forEach(char => {
        let charCode = char.charCodeAt(0)
        if (charCode > start && charCode < end || charCode < start && charCode > end) {
            asciiSum += charCode;
        }
    });

    console.log(asciiSum);

}

// asciiSumator(['.', '@', 'dsg12gr5653feee5']);
// asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);
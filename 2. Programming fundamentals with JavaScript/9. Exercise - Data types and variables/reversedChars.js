function reversedChars(c1, c2, c3) {
    
    let charsArray = [c1, c2, c3]
    let output = '';
    charsArray.reverse();
    
    for (let i = 0; i < charsArray.length; i++) {
        output += charsArray[i] + ' ';
    }

    console.log(output);

}

reversedChars('A', 'B', 'C');
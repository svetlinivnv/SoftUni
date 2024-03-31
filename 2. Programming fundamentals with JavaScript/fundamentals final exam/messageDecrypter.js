function messageDecrypter(input) {
 
    let lineNumber = input[0];
    let pattern = /^([$|%])([A-Z][a-z]{2,})\1: \[\d+\]\|\[\d+\]\|\[\d+\]\|$/;
    let digitPattern = /[\d]+/g;
    let tagPattern = /[A-za-z]+/;
 
    for (let k = 1; k <= Number(lineNumber); k++) {
        let line = input[k];
        if (pattern.test(line)) {
            let tag = line.match(tagPattern)[0];
            let matches = line.match(digitPattern).map((a) => Number(a));
            let word = '';
            for (let code of matches) {
                let char = String.fromCharCode(code)
                word += char
            }
            console.log(`${tag}: ${word}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
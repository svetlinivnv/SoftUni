function deserializeString(input) {

    let output = [];
    let outputLength = 0;

    for (let element of input) {
        if (element !== 'end') {
            let indexes = element.substring(2).split('/');
            outputLength += indexes.length;
        }
    }
    while (output.length < outputLength) {
        output.push(0);
    }
    for (let element of input) {
        if (element !== 'end') {
            let letter = element[0];
            let indexes = element.substring(2).split('/');
            indexes.forEach(index => {
                output[+index] = letter;
            });
        }
    }
    console.log(output.join(''));
}

deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
function deserializeString(input) {
    for (let element of input) {
        if (element !== 'end') {

        let letter = element[0];
        let indexes = element.substring(2).split('/');
        console.log(letter);
        console.log(indexes);

        }
    }
}

deserializeString(['a:0/2/4/6',
                   'b:1/3/5',
                   'end']);
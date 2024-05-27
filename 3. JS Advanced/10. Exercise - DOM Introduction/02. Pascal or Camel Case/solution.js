function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let wordsArr = input.split(' ').map((word) => word.toLowerCase());
<<<<<<< HEAD
    let resultArr = [];
    
    function camelCase() {
        for (let i = 0; i < wordsArr.length; i++) {
            let wordAsArr = wordsArr[i].split('');
            if (i === 0) {
                resultArr.push(wordAsArr.join(''));
            } else {
                wordAsArr[0] = wordAsArr[0].toUpperCase();
                resultArr.push(wordAsArr.join(''));
            }
        }
        let returnValue = resultArr.join('');
        return (returnValue);
=======
    let result = [];

    function camelCase() {
        for (let i = 0; i < wordsArr.length; i++) {
            let word = wordsArr[i];
            if (i > 0) {
                let formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
                result.push(formattedWord);
            } else result.push(word);
        }
        return (result.join(''));
>>>>>>> d999a1547dbb48f322c7b2c6674bbe41a49521e6
    }
    
    function pascalCase() {
        for (let word of wordsArr) {
<<<<<<< HEAD
            let wordAsArr = word.split('');
            wordAsArr[0] = wordAsArr[0].toUpperCase();
            resultArr.push(wordAsArr.join(''));
        }
        let returnValue = resultArr.join('');
        return (returnValue);
=======
            let formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
            result.push(formattedWord);
        }
        return (result.join(''));
>>>>>>> d999a1547dbb48f322c7b2c6674bbe41a49521e6
    }

    let output = 'Error!';
    if (convention === 'Camel Case') {
        output = camelCase();
    } else if (convention === 'Pascal Case') {
        output = pascalCase();
    }
<<<<<<< HEAD
    
    result.textContent = output;
=======

    document.getElementById('result').textContent = output;
>>>>>>> d999a1547dbb48f322c7b2c6674bbe41a49521e6
}
function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let wordsArr = input.split(' ').map((word) => word.toLowerCase());
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
    }
    
    function pascalCase() {
        for (let word of wordsArr) {
            let wordAsArr = word.split('');
            wordAsArr[0] = wordAsArr[0].toUpperCase();
            resultArr.push(wordAsArr.join(''));
        }
        let returnValue = resultArr.join('');
        return (returnValue);
    }
    
    let output = 'Error!';
    if (convention === 'Camel Case') {
        output = camelCase();
    } else if (convention === 'Pascal Case') {
        output = pascalCase();
    }
    
    result.textContent = output;
}
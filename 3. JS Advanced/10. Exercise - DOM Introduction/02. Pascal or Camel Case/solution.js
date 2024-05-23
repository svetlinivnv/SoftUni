function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    
    let wordsArr = input.split(' ').map((word) => word.toLowerCase());
    let result = [];
    
    function camelCase() {
        for (let i = 0; i < wordsArr.length; i++) {
            let wordAsArr = wordsArr[i].split('');
            if (i === 0) {
                result.push(wordAsArr.join(''));
            } else {
                wordAsArr[0] = wordAsArr[0].toUpperCase();
                result.push(wordAsArr.join(''));
            }
        }
        let returnValue = result.join('');
        return (returnValue);
    }
    
    function pascalCase() {
        for (let word of wordsArr) {
            let wordAsArr = word.split('');
            wordAsArr[0] = wordAsArr[0].toUpperCase();
            result.push(wordAsArr.join(''));
        }
        let returnValue = result.join('');
        return (returnValue);
    }
    
    let output = 'Error!';
    if (convention === 'Camel Case') {
        output = camelCase();
    } else if (convention === 'Pascal Case') {
        output = pascalCase();
    }
    
    document.getElementById('result').textContent = output;
}
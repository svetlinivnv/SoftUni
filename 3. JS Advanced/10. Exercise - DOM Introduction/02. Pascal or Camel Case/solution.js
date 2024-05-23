function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    let wordsArr = input.split(' ').map((word) => word.toLowerCase());
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
    }

    function pascalCase() {
        for (let word of wordsArr) {
            let formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
            result.push(formattedWord);
        }
        return (result.join(''));
    }

    let output = 'Error!';
    if (convention === 'Camel Case') {
        output = camelCase();
    } else if (convention === 'Pascal Case') {
        output = pascalCase();
    }

    document.getElementById('result').textContent = output;
}
function passwordValidator(input) {

    let pattern = /^[a-zA-Z0-9_]+$/;
    let upperCasePattern = /[A-Z]/;
    let lowerCasePattern = /[a-z]/;
    let digitPattern = /[0-9]/;
    let string = input.shift();
    let stringArr = string.split('');

    for (let line of input) {
        if (line.includes('Make Upper')) {
            let index = line.split('Make Upper ')[1];
            stringArr[index] = stringArr[index].toUpperCase();
            console.log(stringArr.join(''));
        } else if (line.includes('Make Lower')) {
            let index = line.split('Make Lower ')[1];
            stringArr[index] = stringArr[index].toLowerCase();
            console.log(stringArr.join(''));
        } else if (line.includes('Insert')) {
            let [command, index, char] = line.split(' ');
            if (index >= 0 && index < string.length) {
                stringArr.splice(index, 0, char);
                console.log(stringArr.join(''));
            }
        } else if (line.includes('Replace')) {
            let [command, replaceChar, value] = line.split(' ');
            let asciiCode = replaceChar.charCodeAt(0);
            let sum = +asciiCode + +value;
            let asciiNewChar = String.fromCharCode(sum);
            stringArr.map((a, index) => {
                if (a === replaceChar) {
                    stringArr[index] = asciiNewChar;
                }
            });
            console.log(stringArr.join(''));
        }
        else if (line === 'Validation') {
            let result = stringArr.join('');
            if (result.length <= 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (!pattern.test(result)) {
                console.log("Password must consist only of letters, digits and _!");
            }
            if (!upperCasePattern.test(result)) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (!lowerCasePattern.test(result)) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!digitPattern.test(result)) {
                console.log("Password must consist at least one digit!");
            }

        }
    }
}

passwordValidator(['invalidp/assword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete',
    'Replace i -50']);
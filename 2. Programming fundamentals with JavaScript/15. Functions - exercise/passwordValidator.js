function passwordValidator(pass) {

    const regexCheck = /^[a-zA-Z0-9]+$/;
    let digitsCount = 0;
    let passedRules = 0;

    if (pass.length > 10 || pass.length < 6) {
        console.log('Password must be between 6 and 10 characters');
    } else {
        passedRules++;
    }

    if (regexCheck.test(pass) === false) {
        console.log('Password must consist only of letters and digits');
    } else {
        passedRules++;
    }

    for (let currChar of pass) {
        if (!isNaN(parseInt(currChar)) === true) {
            digitsCount++;
        }
    }

    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
    } else {
        passedRules++;
    }

    if (passedRules === 3) {
        console.log('Password is valid');
    }

}


// passwordValidator('logI.n');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
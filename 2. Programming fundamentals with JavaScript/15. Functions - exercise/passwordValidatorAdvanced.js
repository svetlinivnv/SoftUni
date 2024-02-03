function passwordValidator(pass) {

    let checkLength = password => {
        if (pass.length > 10 || pass.length < 6) {
            console.log('Password must be between 6 and 10 characters');
            return false;
        } return true;
    }

    let checkSymbols = password => {
        const regexCheck = /^[a-zA-Z0-9]+$/;
        if (regexCheck.test(pass) === false) {
            console.log('Password must consist only of letters and digits');
            return false;
        } return true;
    }

    let checkDigitsCount = password => {
        let digitsCount = 0;
        for (let currChar of pass) {
            if (!isNaN(parseInt(currChar)) === true) {
                digitsCount++;
            }
        }
        if (digitsCount < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        } return true;
    }

    let isValidLength = checkLength(pass);
    let hasValidSymbols = checkSymbols(pass);
    let hasValidDigitsCount = checkDigitsCount(pass);

    if (isValidLength && hasValidSymbols && hasValidDigitsCount) {
        console.log('Password is valid');
    }

}

// passwordValidator('logI.n');
passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');
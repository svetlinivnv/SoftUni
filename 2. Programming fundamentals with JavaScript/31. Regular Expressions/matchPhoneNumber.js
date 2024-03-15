function matchPhoneNumber(input) {
    let pattern = /\+359([ |-])2?\1\b[0-9]{3}\1\b[0-9]{4}\b/g;
    let validList = [];
    let validPhone;

    while (validPhone = pattern.exec(input)) {
        validList.push(validPhone[0]);
    }
    console.log(validList.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
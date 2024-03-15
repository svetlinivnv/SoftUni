function matchFullName (input) {

    let pattern = /\b[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}\b/g;
    let validNames = [];
    let validName;

    while ((validName = pattern.exec(input)) !== null) {
        if (!validNames.includes(validName[0])){
        validNames.push(validName[0]);
        }
    }
    console.log(validNames.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
function matchFullName(input) {
    let validNames = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validName;
    while (validName = pattern.exec(input)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov");
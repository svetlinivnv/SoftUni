function matchFullName (input) {

    let pattern = /\b[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}\b/g;
    let namesArr = input.split(', ');
    let validNames = [];

    namesArr.forEach(name => {
        const isValid = pattern.test(name);
        if (isValid) {
            validNames.push(name);
        }
    });
    console.log(validNames.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
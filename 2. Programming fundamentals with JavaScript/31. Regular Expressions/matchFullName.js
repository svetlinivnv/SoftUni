function matchFullName (input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let namesArr = input.split(',');
    let validNames = [];

    namesArr.forEach(name => {
        const isValid = pattern.test(name);
        if (isValid) {
            validNames.push(name.trim());
        }
    });
    console.log(validNames.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
// matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov");
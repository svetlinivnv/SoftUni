function employees(input) {

    class PersonalNumber {
        constructor(name, number) {
            this.name = name;
            this.persNumber = number;
        }
    }

    for (let person of input) {
        let number = person.length;
        let name = person;
        let employee = new PersonalNumber(name, number);

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.persNumber}`);

    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
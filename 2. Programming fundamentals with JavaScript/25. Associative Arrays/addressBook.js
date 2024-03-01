function addressBook(input) {

    let addressBook = {};

    input.forEach(person => {
        let [name, address] = person.split(':');
        if (!addressBook.hasOwnProperty(name)) {
            addressBook[name] = address;
        } else {
            addressBook[name] = address;
        }
    });

    let sortedAddressBook = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    sortedAddressBook.forEach(person => {
        console.log(`${person[0]} -> ${person[1]}`);
    });
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
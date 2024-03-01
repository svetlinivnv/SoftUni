function phoneBook(input) {

    let phoneBook = {};

    input.forEach(entry => {
        let [name, number] = entry.split(' ');
        if (!phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = number;
        } else {
            phoneBook[name] = number;
        }
    });

    for (let person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
function books(input) {

    let bookNeeded = input[0];
    let booksChecked = 0;
    let index = 1;
    let currentBook = input[1];

    while (currentBook !== 'No More Books') {

        if (currentBook === bookNeeded) {
            break;
        }

        booksChecked += 1;
        index++;
        currentBook = input[index];

    }

    if (currentBook === bookNeeded) {
        console.log(`You checked ${booksChecked} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${booksChecked} books.`);
    }

}

books(["Bourne",

    "True Story",

    "Forever",

    "More Space",

    "The Girl",

    "Spaceship",

    "Strongest",

    "Profit",

    "Tripple",

    "Stella",

    "The Matrix",

    "Bourne"]);
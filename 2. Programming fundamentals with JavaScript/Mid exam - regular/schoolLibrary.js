function schoolLibrary(input) {
    let shelfWithBooks = input.shift().split('&');

    for (let current of input) {
        let [command, ...arr] = current.split(' | ');
        switch (command) {
            case 'Add Book':
                if (!shelfWithBooks.includes(arr[0])) {
                    shelfWithBooks.unshift(arr[0]);
                }
                break;
            case 'Take Book':
                let index = shelfWithBooks.indexOf(arr[0]);
                if (index !== -1) {
                    shelfWithBooks.splice(index, 1);
                }
                break;
            case 'Swap Books':
                let indexBook1 = shelfWithBooks.indexOf(arr[0]);
                let indexBook2 = shelfWithBooks.indexOf(arr[1]);
                if (indexBook1 !== -1 && indexBook2 !== -1) {
                    [shelfWithBooks[indexBook1], shelfWithBooks[indexBook2]] = [shelfWithBooks[indexBook2], shelfWithBooks[indexBook1]];
                }
                break;
            case 'Insert Book':
                if (!shelfWithBooks.includes(arr[0])) {
                    shelfWithBooks.push(arr[0]);
                }
                break;
            case 'Check Book':
                let checkIndex = +arr[0];
                if (checkIndex >= 0 && checkIndex < shelfWithBooks.length) {
                    console.log(shelfWithBooks[checkIndex]);
                }
                break;
        }
    }
    console.log(shelfWithBooks.join(', '));
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]);

// schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
// "Add Book | Catch-22",
// "Swap Books | Anna Karenina | Catch-22",
// "Take Book | David Copperfield",
// "Done"]);

// schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
//     "Check Book | 2",
//     "Swap Books | Don Quixote | Ulysses",
//     "Done"]);
function companyUsers(input) {

    let noteBook = {};

    input.forEach(element => {
        let [company, employee] = element.split(' -> ');
        if (!noteBook.hasOwnProperty(company)) {
            noteBook[company] = [employee];
        } else {
            if (!noteBook[company].includes(employee)) {
            noteBook[company].push(employee);
            }
        }
    });

    noteBookSorted = Object.keys(noteBook).sort((a, b) => a.localeCompare(b));
    for (let current of noteBookSorted) {
        console.log(current);
        console.log(`-- ${noteBook[current].join('\n-- ')}`);
    }
}

// companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);
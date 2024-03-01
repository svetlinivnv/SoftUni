function schoolGrades(input) {

    let schoolBook = {};
    let result = {};

    input.forEach(student => {
        let studentArray = student.split(' ');
        let name = studentArray.shift();
        let grades = studentArray.join(', ')

        if (!schoolBook.hasOwnProperty(name)) {
            schoolBook[name] = grades;
        } else {
            schoolBook[name] += `, ${grades}`;
        }
    });

    for (let student in schoolBook) {
        let gradesArr = schoolBook[student].split(', ');
        let sum = 0;
        let count = 0;
        for (let grade of gradesArr) {
            sum += +grade;
            count++;
        }
        result[student] = sum / count;
    }

    let sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    sortedResult.forEach(student => {
        console.log(`${student[0]}: ${student[1].toFixed(2)}`);

    });
}

schoolGrades(['Lilly 4 6 6 5',
            'Tim 5 6',
            'Tammy 2 4 3',
            'Tim 6 6']);
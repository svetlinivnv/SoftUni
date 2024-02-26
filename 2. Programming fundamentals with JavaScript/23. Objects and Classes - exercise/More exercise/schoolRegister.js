function schoolRegister(input) {
    let students = [];
    let avgScore = 0;
    let numberOfStudents = 0;

    for (let currentStudent of input) {
        const studentArr = currentStudent.split(", ");
        const name = studentArr[0].split(" ").pop();
        let grade = Number(studentArr[1].split(" ").pop()) + 1;
        const score = Number(studentArr[2].split(" ").pop());
        let student = { name: name, grade: grade, score: score };
        if (score >= 3) {
            avgScore += score;
            numberOfStudents++;
            students.push(student);
        }
    }
    students.sort((a, b) => a.grade - b.grade);

    let studentsByGrade = {};
    for (let student of students) {
        if (!studentsByGrade[student.grade]) {
            studentsByGrade[student.grade] = [];
        }
        studentsByGrade[student.grade].push(student);
    }

    for (let grade in studentsByGrade) {
        let studentsString = studentsByGrade[grade].map(student => student.name).join(", ");
        let avgScore = studentsByGrade[grade].reduce((total, student) => total + student.score, 0) / studentsByGrade[grade].length;
        console.log(`${grade} Grade\nList of students: ${studentsString}\nAverage annual score from last year: ${avgScore.toFixed(2)}\n`);
    }
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

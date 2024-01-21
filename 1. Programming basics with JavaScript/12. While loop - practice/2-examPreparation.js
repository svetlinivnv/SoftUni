function examPreparation(input) {

    let badGradesMax = Number(input[0]);
    let badGradeCount = 0;
    let command = input[1];
    let index = 1;
    let problemName = '';
    let gradeTotal = 0;
    let gradeIndex = 2;
    let gradeCounter = 0;

    while (command !== 'Enough') {
        let grade = Number(input[gradeIndex]);
        gradeTotal += grade;
        gradeCounter++;
        problemName = command;
        gradeIndex += 2;

        if (grade <= 4) {
            badGradeCount++;
        }
        if (badGradeCount >= badGradesMax) {
            break;
        }
        index +=2;
        command = input[index];
    }

    if (command === 'Enough') {
        console.log(`Average score: ${(gradeTotal/gradeCounter).toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${problemName}`);
    }
    if (badGradeCount === badGradesMax) {
        console.log(`You need a break, ${badGradeCount} poor grades.`);
    }

}

//examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
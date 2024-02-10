function bonusScoringSystem(input) {
    let numberOfStudents = Number(input.shift());
    let totalLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let maxBonus = 0;
    let maxAttendances = 0;

    for (let i = 0; i < numberOfStudents; i++) {
        let attendances = Number(input[i]);

        let currentBonus = (attendances / totalLectures) * (5 + additionalBonus);
        currentBonus = Math.ceil(currentBonus);

        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxAttendances = attendances;
        }
    }

    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);
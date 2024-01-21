function graduation(input) {

    let name = input[0];
    let grade = 1;
    let excluded = 0;
    let sum = 0;
    let currentScore = Number(input[grade]);

    while (grade <= 12) {

        if (currentScore < 4) {
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }

        sum += currentScore;
        grade++;
        currentScore = Number(input[grade]);
    }

    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
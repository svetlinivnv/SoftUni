function trainTheTrainers(input) {
  let teachersCount = Number(input[0]);
  let index = 1;
  let command = input[index];
  let totalAvg = 0;
  let presentationsCount = 0;

  while (command != "Finish") {
    let currentPresentation = command;
    index++;

    let totalScore = 0;

    let gradesCounter = 0;
    while (gradesCounter < teachersCount) {
      let currentScore = Number(input[index]);
      totalScore += currentScore;
      gradesCounter++;
      index++;
    }

    presentationsCount++;
    console.log(
      `${currentPresentation} - ${(totalScore / teachersCount).toFixed(2)}.`
    );
    totalAvg += totalScore / teachersCount;
    command = input[index];
  }
  console.log(
    `Student's final assessment is ${(totalAvg / presentationsCount).toFixed(
      2
    )}.`
  );
}

//trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);

trainTheTrainers([
  "3",

  "Arrays",

  "4.53",

  "5.23",

  "5.00",

  "Lists",

  "5.83",

  "6.00",

  "5.42",

  "Finish",
]);

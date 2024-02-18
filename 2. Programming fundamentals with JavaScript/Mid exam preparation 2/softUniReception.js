function softUniReception(input) {
  let employees = input.splice(0, 3).map(Number);
  let studentsCount = Number(input[0]);
  let totalAnswersPerHour = 0;
  let timeNeeded = 0;

  for (let answers of employees) {
    totalAnswersPerHour += answers;
  }

  while (studentsCount > 0) {
    studentsCount -= totalAnswersPerHour;
    timeNeeded++;
    if (timeNeeded % 4 === 0) {
      timeNeeded++;
    }
  }
  console.log(`Time needed: ${timeNeeded}h.`);
}

softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
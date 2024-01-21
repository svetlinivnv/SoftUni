function projectsCreation(input) {

    let architectName = input[0];
    let projectsCount = Number(input[1]);
    let neededHours = Number(input[1]) * 3;

console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projectsCount} project/s.`);
}

projectsCreation(["Architect4o", "4"]);
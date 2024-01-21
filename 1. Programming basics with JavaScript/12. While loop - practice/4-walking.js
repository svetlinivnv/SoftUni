function walking(input) {

    let goalSteps = 10000;
    let totalSteps = 0;
    let currentSteps = input[0];
    let index = 0;

    while (currentSteps != 'Going home') {
        currentSteps = Number(input[index]);
        totalSteps += currentSteps;
        index++;

        if (totalSteps >= goalSteps) {
            break;
        }
        currentSteps = input[index];
    }
    if (currentSteps === 'Going home') {
        totalSteps += Number(input[index + 1]);
    }
    if (totalSteps >= goalSteps) {
        console.log('Goal reached! Good job!');
        console.log(`${Math.abs(totalSteps - goalSteps)} steps over the goal!`);
    } else {
        console.log(`${Math.abs(totalSteps - goalSteps)} more steps to reach goal.`);
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
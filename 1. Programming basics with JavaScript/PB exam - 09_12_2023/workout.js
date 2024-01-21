function workout(input) {

    let daysTraining = Number(input[0]);
    let initialDistance = Number(input[1]);

    let totalDistance = initialDistance;

    for (index = 2; index <= daysTraining + 1; index++) {
        let percentageIncrease = Number(input[index]);
        initialDistance += (percentageIncrease / 100) * initialDistance;
        totalDistance += initialDistance;
    }

    if (totalDistance >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalDistance - 1000)} more kilometers!`);
      } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalDistance)} more kilometers`);
      }
}

workout(["4",
"100",
"30",
"50",
"60",
"80"]);
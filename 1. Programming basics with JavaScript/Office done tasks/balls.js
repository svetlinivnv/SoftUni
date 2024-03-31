function balls(input) {
  let ballsCount = Number(input[0]);
  let totalPoints = 0;
  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let otherBalls = 0;
  let pointDivisions = 0;

  for (i = 1; i <= ballsCount; i++) {
    let color = input[i];
    switch (color) {
        case 'red':
            totalPoints += 5;
            redBalls++;
            break;
        case 'orange':
            totalPoints += 10;
            orangeBalls++;
            break;
        case 'yellow':
            totalPoints +=15;
            yellowBalls++;
            break;
        case 'white':
            totalPoints +=20;
            whiteBalls++;
            break;
        case 'black':
            totalPoints = Math.floor(totalPoints/2);
            pointDivisions++;
            break;
        default:
            otherBalls++;
            continue;
    }
  }

  console.log(`Total points: ${totalPoints}\nRed balls: ${redBalls}\nOrange balls: ${orangeBalls}\nYellow balls: ${yellowBalls}\nWhite balls: ${whiteBalls}\nOther colors picked: ${otherBalls}\nDivides from black balls: ${pointDivisions}`);

}

//balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);

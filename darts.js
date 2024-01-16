function darts(input) {
  let playerName = input[0];
  let points = 301;
  let successfulShots = 0;
  let unsuccessfulShots = 0;

  for (let i = 1; i <= input.length - 1; i += 2) {
    let sector = input[i];
    if (input[i] === "Retire") {
      console.log(
        `${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`
      );
    }
    if (points >= 0) {
      switch (sector) {
        case "Single":
          let singlePoints = input[i + 1];
          if (singlePoints <= points) {
            points -= singlePoints;
            successfulShots++;
          } else {
            unsuccessfulShots++;
          }
          break;
        case "Double":
          let doublePoints = 2 * input[i + 1];
          if (doublePoints <= points) {
            points -= doublePoints;
            successfulShots++;
          } else {
            unsuccessfulShots++;
          }
          break;
        case "Triple":
          let triplePoints = 3 * input[i + 1];
          if (triplePoints <= points) {
            points -= triplePoints;
            successfulShots++;
          } else {
            unsuccessfulShots++;
          }
          break;
      }
    }
  }
  if (points === 0) {
    console.log(`${playerName} won the leg with ${successfulShots} shots.`);
  }
}

// darts([
//   "Michael van Gerwen",
//   "Triple",
//   "20",
//   "Triple",
//   "19",
//   "Double",
//   "10",
//   "Single",
//   "3",
//   "Single",
//   "1",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "20",
// ]);

// darts([
//   "Rob Cross",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "5",
//   "Triple",
//   "10",
//   "Double",
//   "6",
//   "Retire",
// ]);

// darts(["Stephen Bunting",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Double",
// "7",
// "Single",
// "12",
// "Double",
// "1",
// "Single",
// "1"])
// ;

darts([
  "Michael van Gerwen",
  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);

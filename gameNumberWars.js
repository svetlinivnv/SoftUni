function gameNumberWars(input) {
  let player1 = input[0];
  let player2 = input[1];
  let p1points = 0;
  let p2points = 0;

  for (let i = 2; i <= input.length - 1; i += 2) {
    if (Number(input[i]) > Number(input[i + 1])) {
      p1points += Number(input[i]) - Number(input[i + 1]);
    } else if (input[i] < input[i + 1]) {
      p2points += Number(input[i + 1]) - Number(input[i]);
    }
    if (Number(input[i]) === Number(input[i + 1])) {
      console.log("Number wars!");
      if (Number(input[i + 2]) > Number(input[i + 3])) {
        console.log(`${player1} is winner with ${p1points} points`);
      } else if (Number([i + 2]) < Number(input[i + 3])) {
        console.log(`${player2} is winner with ${p2points} points`);
      }
    }
    if (input[i] === "End of game") {
      console.log(`${player1} has ${p1points} points`);
      console.log(`${player2} has ${p2points} points`);
    }
  }
}
gameNumberWars([
  "Aleks",
  "Georgi",
  "4",
  "5",
  "3",
  "2",
  "4",
  "3",
  "4",
  "4",
  "5",
  "2",
]);
//gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3","3", "5", "3"]);
//gameNumberWars(['Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game'])

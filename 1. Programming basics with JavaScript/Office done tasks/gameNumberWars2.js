function gameNumberWars(input) {
  let player1 = input[0];
  let player2 = input[1];

  let p1points = 0;
  let p2points = 0;

  for (let i = 2; i < input.length; i += 2) {
    if (input[i] === "End of game") {
      console.log(`${player1} has ${p1points} points`);
      console.log(`${player2} has ${p2points} points`);
      return;
    }
    let card1 = Number(input[i]);
    let card2 = Number(input[i + 1]);
    if (card1 > card2) {
      p1points += card1 - card2;
    } else if (card1 < card2) {
      p2points += card2 - card1;
    } else {
      console.log("Number wars!");
      i += 2;
      if (i >= input.length) {
        console.log(`${player1} has ${p1points} points`);
        console.log(`${player2} has ${p2points} points`);
        return;
      }
      let extraCard1 = Number(input[i]);
      let extraCard2 = Number(input[i + 1]);
      if (extraCard1 > extraCard2) {
        console.log(`${player1} is winner with ${p1points} points`);
      } else if (extraCard1 < extraCard2) {
        console.log(`${player2} is winner with ${p2points} points`);
      } else {
        console.log("Number wars!");
        continue;
      }

      return;
    }
  }
}

// Example usage
gameNumberWars([
  "Elena",
  "Simeon",
  "6",
  "3",
  "2",
  "5",
  "8",
  "9",
  "End of game",
]);

// Example usage
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

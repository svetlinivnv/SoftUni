function dungeonestDark(array) {
  let splittedArray = array[0].split("|");
  let health = 100;
  let coins = 0;
  let currentRoom = 0;
  let finishGame = true;

  for (let i = 0; i < splittedArray.length; i++) {
    let [item, value] = splittedArray[i].split(" ");
    value = Number(value);
    currentRoom = i + 1;
    if (item === "potion") {
      let healAmount = Math.min(100 - health, value);
      if (health + value > 100) {
        health = 100;
      } else {
        health += value;
      }
      console.log(`You healed for ${healAmount} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (item === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${item}.`);
      } else {
        console.log(`You died! Killed by ${item}.`);
        console.log(`Best room: ${currentRoom}`);
        finishGame = false;
        break;
      }
    }
  }

  if (finishGame) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

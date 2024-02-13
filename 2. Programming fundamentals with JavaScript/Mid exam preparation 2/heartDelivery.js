function heartDelivery(input) {
  let neighbourhood = input.shift().split("@").map(Number);
  input.pop();
  let currentIndex = 0;

  for (let current of input) {
    let [command, jumpLength] = current.split(" ");
    jumpLength = Number(jumpLength);

    let jumpIndex = currentIndex + jumpLength;

    if (jumpIndex >= neighbourhood.length || jumpIndex < 0) {
      jumpIndex = 0;
    }
    if (neighbourhood[jumpIndex] === 0) {
      console.log(`Place ${jumpIndex} already had Valentine's day.`);
    } else {
      neighbourhood[jumpIndex] -= 2;
      if (neighbourhood[jumpIndex] <= 0) {
        console.log(`Place ${jumpIndex} has Valentine's day.`);
      }
    }
    currentIndex = jumpIndex;
  }
  console.log(`Cupid's last position was ${currentIndex}.`);
  let notCelebratedCount = neighbourhood.filter((x) => x > 0).length;
  if (notCelebratedCount === 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${notCelebratedCount} places.`);
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

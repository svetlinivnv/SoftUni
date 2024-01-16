function examTime(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);

  let examInMinutes = examHour * 60 + examMinute;
  let arrivalInMinutes = arrivalHour * 60 + arrivalMinute;

  let diff = Math.abs(examInMinutes - arrivalInMinutes);

  let diffHour = Math.floor(diff / 60);
  let diffMinutes = diff % 60;

  if (diffHour < 60 && diffMinutes < 10) {
    diffMinutes = `0${diffMinutes}`;
  }
  if (examInMinutes === arrivalInMinutes) {
    console.log("On time");
  } else if (examInMinutes < arrivalInMinutes) {
    console.log("Late");
    if (diff < 60) {
      console.log(`${diff} minutes after the start`);
    } else {
      console.log(`${diffHour}:${diffMinutes} hours after the start`);
    }
  } else {
    if (diff <= 30) {
      console.log("On time");
      console.log(`${diff} minutes before the start`);
    } else {
      console.log("Early");
      if (diff < 60) {
        console.log(`${diff} minutes before the start`);
      } else {
        console.log(`${diffHour}:${diffMinutes} hours before the start`);
      }
    }
  }
}

examTime(["11", "30", "12", "29"]);

function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (let a = floors; a > 0; a--) {
    let row = "";

    for (let b = 0; b < rooms; b++) {
      if (a === floors) {
        row += `L${a}${b} `;
      } else if (a % 2 === 0) {
        row += `0${a}${b} `;
      } else {
        row += `A${a}${b} `;
      }
    }
    console.log(row);
  }
}

building(["6", "4"]);

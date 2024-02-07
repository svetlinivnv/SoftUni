function printDna(number) {

    let model = "ATCGTTAGGG";
    let counter = 0;
  
    for (let i = 0; i < number; i++) {
      if (i % 4 == 0) {
        console.log(`**${model[counter % 10]}${model[(counter % 10) + 1]}**`);
      } else if (i % 4 == 1) {
        console.log(`*${model[counter % 10]}--${model[(counter % 10) + 1]}*`);
      } else if (i % 4 == 2) {
        console.log(`${model[counter % 10]}----${model[(counter % 10) + 1]}`);
      } else if (i % 4 == 3) {
        console.log(`*${model[counter % 10]}--${model[(counter % 10) + 1]}*`);
      }
      counter += 2;
    }
  }
  
printDna(4);
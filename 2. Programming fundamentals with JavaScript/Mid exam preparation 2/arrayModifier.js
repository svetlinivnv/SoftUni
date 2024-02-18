function arrayModifier(input) {
  let array = input.shift().split(" ").map(Number);

  for (let current of input) {
    let [command, ...arr] = current.split(" ");
    arr = arr.map(Number);
    let index1 = arr[0];
    let index2 = arr[1];

    let element1 = array[index1];
    let element2 = array[index2];

    switch (command) {
      case "swap":
        array.splice(index1, 1, element2);
        array.splice(index2, 1, element1);
        break;
      case "multiply":
        let product = element1 * element2;
        array[index1] = product;
        break;
      case "decrease":
        array = array.map((element) => element - 1);
        break;
    }
  }
  console.log(array.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",

  "swap 1 3",

  "swap 3 6",

  "swap 1 0",

  "multiply 1 2",

  "multiply 2 1",

  "decrease",

  "end",
]);

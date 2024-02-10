function arrayManipulator(numbers, commands) {
    for (let action of commands) {
      let [command, ...arr] = action.split(' ');
  
      switch (command) {
        case 'add':
          numbers.splice(Number(arr[0]), 0, Number(arr[1]));
          break;
        case 'addMany':
          let atIndex = Number(arr.shift());
          numbers.splice(atIndex, 0, ...arr.map(Number));
          break;
        case 'contains':
          let index = numbers.indexOf(Number(arr[0]));
          console.log(index);
          break;
        case 'remove':
          numbers.splice(Number(arr[0]), 1);
          break;
        case 'shift':
          let positions = Number(arr[0]) % numbers.length;
          for (let i = 0; i < positions; i++) {
            let shiftedElement = numbers.shift();
            numbers.push(shiftedElement);
          }
          break;
        case 'sumPairs':
          let result = [];
          for (let i = 0; i < numbers.length; i += 2) {
            let pairSum = Number(numbers[i]) + (Number(numbers[i + 1]) || 0);
            result.push(pairSum);
          }
          numbers = result;
          break;
        case 'print':
          console.log(`[ ${numbers.join(', ')} ]`);
          break;
      }
    }
  }
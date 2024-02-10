function arrayManipulator(numbers, commands) {
    
    for (let action of commands) {
        let [command, ...arr] = action.split(' ');
        arr = arr.map(Number);

        switch (command) {
            case 'add':
                numbers.splice(arr[0], 0, arr[1]);
                break;
            case 'addMany':
                let atIndex = arr.shift();
                numbers.splice(atIndex, 0, ...arr);
                break;
            case 'contains':
                let index = numbers.indexOf(arr[0]);
                console.log(index);
                break;
            case 'remove':
                numbers.splice(arr[0], 1);
                break;
            case 'shift':
                let positions = arr[0] % numbers.length;
                for (let i = 0; i < positions; i++) {
                    let shiftedElement = numbers.shift();
                    numbers.push(shiftedElement);
                }
                break;
            case 'sumPairs':
                let result = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    let pairSum = numbers[i] + (numbers[i + 1] || 0);
                    result.push(pairSum);
                }
                numbers = result;
                break;
            case 'print':
                console.log(` [ ${numbers.join(', ')} ]`);
                break;
        }
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);

arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print', 'sumPairs']);
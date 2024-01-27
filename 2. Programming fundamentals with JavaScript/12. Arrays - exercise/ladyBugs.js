function ladyBugs(array) {

    let fieldSize = array[0];
    let fieldArray = [];
    // initialize bugs:
    let initialBugsArray = array[1].split(' ').map(Number);

    // fill an array representing field:
    for (let i = 0; i < fieldSize; i++) {
        fieldArray.push(0);
    }
    // fill fieldArray with bugs:
    for (let j = 0; j < initialBugsArray.length; j++) {
        let currentIndex = initialBugsArray[j];
        if (currentIndex <= fieldSize && currentIndex >= 0) {
        fieldArray[currentIndex] = 1;
        }
    }
    // console.log(fieldArray.join(' '));
    // commands:
    for (let k = 2; k < array.length; k++) {
        let [commandIndex, commandDirection, commandStep] = array[k].split(' ');
        commandIndex = Number(commandIndex);
        commandStep = Number(commandStep);
        let bugStart = fieldArray[commandIndex];
        // handle directions:
        switch (commandDirection) {
            case 'right':
                // check if free & if bug present on initial spot
                if (bugStart === 1) {
                    fieldArray[commandIndex] = 0;
                    // check free spots and place the bug, if there's one, otherwise it flies away:
                    for (let l = commandIndex + commandStep; l < fieldArray.length; l++) {
                        if (fieldArray[l] === 0) {
                            fieldArray[l] = 1;
                            break;
                        } else {
                            break;
                        }
                    }
                }
                break; 
            case 'left':
                // check if free & if bug present on initial spot
                if (bugStart === 1) {
                    fieldArray[commandIndex] = 0;
                    // check free spots and place the bug, if there's one, otherwise it flies away:
                    for (let l = commandIndex - commandStep; l >= 0; l--) {
                        if (fieldArray[l] === 0) {
                            fieldArray[l] = 1;
                            break;
                        }
                    }
                }
                break;
        }
    }
    console.log(fieldArray.join(' '));
}

// ladyBugs([ 3, '0 1',
//             '0 right 1',
//             '2 right 1']);

// ladyBugs([ 3, '0 1 2',
//             '0 right 1',
//             '1 right 1', 
//             '2 right 1']);

// ladyBugs([5, '3',
//     '3 left 2',
//     '1 left -2']);

ladyBugs([6, '1 3 5',
    '1 left 2',
    '3 right 2',
    '5 left 3']);
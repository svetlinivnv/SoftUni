function ladyBugs(array) {

    let fieldSize = array[0];
    let fieldArray = [];
    //initialize bugs:
    let initialBugsArray = array[1].split(' ');
    
    // fill an array representing field:
    for (let i = 0; i < fieldSize; i++) {
        fieldArray.push(0);
        
    }    
    for (let j = 0; j < initialBugsArray.length; j++) {
        let currentIndex = initialBugsArray[j];
        fieldArray[currentIndex] = 1;
    }
    //commands
    for (let k = 2; k < array.length; k++) {
        let [commandIndex, commandDirection, commandStep] = array[k].split(' ');
        if (commandDirection = 'right' && fieldArray[commandIndex] !== 0) {
            fieldArray[commandIndex] = 0;
            if (commandIndex + commandStep < fieldArray.length) {
                if(fieldArray[commandStep] === 1) {
                    
                }
            }
        }   

    }

}

ladyBugs([ 3, '0 1',
        '0 right 1',
        '2 right 1']);
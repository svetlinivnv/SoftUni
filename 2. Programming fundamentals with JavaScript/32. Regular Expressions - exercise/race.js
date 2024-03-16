function race(input) {
    const patternName = /[^A-Za-z]+/g;
    const patternDigits = /[^0-9]+/g;
    let resultObj = {};
    let participants = input.shift().split(', ');

    for (let currentParticipant of input) {
        if (currentParticipant === 'end of race') {
            break;
        } else {
            let name = currentParticipant.replace(patternName, '');
            if (participants.includes(name)) {
                let digits = currentParticipant.replace(patternDigits, '').split('').map(Number);
                let sum = digits.reduce((sum, currentDigit) => sum + currentDigit, 0);
                if (!resultObj.hasOwnProperty(name)) {
                    resultObj[name] = sum;
                } else {
                    resultObj[name] += sum;
                }
            }
        }
    }
    let resultSorted = Object.entries(resultObj).sort((a, b) => b[1] - a[1]);
    while (resultSorted.length != 3) {
        resultSorted.pop();
    }
    console.log(`1st place: ${resultSorted[0][0]}`);
    console.log(`2nd place: ${resultSorted[1][0]}`);
    console.log(`3rd place: ${resultSorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
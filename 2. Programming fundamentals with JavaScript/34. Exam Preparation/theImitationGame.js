function theImitationGame (input) {
    let message = input.shift();
    input.pop();
    for (let element of input) {
            let [command, ...rest] = element.split('|');
            // Moves the first n letters to the back of the string.
            if (command === 'Move') {
                let numberOfLetters = rest[0];
                let firstPart = message.slice(0, numberOfLetters);
                let secondPart = message.slice(numberOfLetters);
                message = secondPart + firstPart;
            // Inserts the given value before the given index in the string.
            } else if (command === 'Insert') {
                let indexToInsertBefore = rest[0];
                let valueToInsert = rest[1];
                let firstPart = message.substring(0, indexToInsertBefore);
                let secondPart = message.substring(indexToInsertBefore);
                message = firstPart + valueToInsert + secondPart;
            // Changes all occurrences of the given substring with the replacement text.
            } else if (command === 'ChangeAll') {
                let substring = rest[0];
                let replacement = rest[1];
                message = message.split(substring).join(replacement);
            }
        }
        console.log(`The decrypted message is: ${message}`);    
    }

theImitationGame([  'zzHe',
                    'ChangeAll|z|l',
                    'Insert|2|o',
                    'Move|3',
                    'Decode']);

theImitationGame([  'owyouh',
                    'Move|2',
                    'Move|3',
                    'Insert|3|are',
                    'Insert|9|?',
                    'Decode']);
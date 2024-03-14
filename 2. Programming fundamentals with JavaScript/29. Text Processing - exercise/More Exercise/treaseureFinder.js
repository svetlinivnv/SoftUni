function treasureFinder(input) {
    let key = input.shift().split(' ');
    let decryptedMessages = [];

    for (let message of input) {
        let currentMsgDecrypted = '';
        if (message !== 'find') {
            let messageArr = message.split('');
            let j = 0;
            for (let i = 0; i < messageArr.length; i++) {
                if (j === key.length) {
                    j = 0;
                }
                let currSymbol = messageArr[i];
                let charCodeOfCurrSymbol = currSymbol.charCodeAt(0);
                let editedCharCodeOfCurrSymbol = charCodeOfCurrSymbol -= +key[j];
                let editedCurrSymbol = String.fromCharCode(editedCharCodeOfCurrSymbol);
                currentMsgDecrypted += editedCurrSymbol;
                j++;
            }
        }
        decryptedMessages.push(currentMsgDecrypted);
    }
    decryptedMessages.forEach(message => {
        let treasureMatch = message.match(/&([^&]*)&/);
        let coordinatesMatch = message.match(/<([^>]*)>/);
        if (treasureMatch && coordinatesMatch) {
            let treasure = treasureMatch[1];
            let coordinates = coordinatesMatch[1];
            console.log(`Found ${treasure} at ${coordinates}`);
        }
    });
}

treasureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
// treasureFinder(["1 4 2 5 3 2 1", `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`, "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC", "'stj)>34W68Z@", "find"]);
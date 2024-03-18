function starEnigma(list) {
    list.shift();
    const lettersRegex = /s|t|a|r|S|T|A|R/g;
    const elementsRegex = /@(?<planet>[A-Za-z]+)[^@\-!>:]*:(?<population>[0-9]+)[^@\-!>:]*!(?<type>[AD])![^@\-!>:]*->(?<soldiers>[0-9]+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let message of list) {
        let finalMessage;
        if (elementsRegex.test(message)) {
            finalMessage = message;
        } else {
            let deduct = message.match(lettersRegex) && message.match(lettersRegex).length;
            let msgArr = message.split('');
            let decryptedMsg = [];
            msgArr.forEach(symbol => {
                let decryptedSymbolCode = symbol.charCodeAt(0) - deduct;
                decryptedMsg.push(String.fromCharCode(decryptedSymbolCode));
            });
            finalMessage = decryptedMsg.join('')
        }
        let destructuredMsg = elementsRegex.exec(finalMessage);
        if (destructuredMsg != null) {
            let { planet, type } = destructuredMsg.groups;
            type === 'A' ? attackedPlanets.push(planet) : destroyedPlanets.push(planet);
        }
    }
    let attackedPlanetsSorted = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let destroyedPlanetsSorted = destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanetsSorted.length}`);
    attackedPlanetsSorted.forEach(planet => {
        console.log(`-> ${planet}`);
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanetsSorted.forEach(planet => {
        console.log(`-> ${planet}`);
    });
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);

// starEnigma(['3',
//     "tt(''DGsvywgerx>6444444444%H%1B9444",
//     'GQhrr|A977777(H(TTTT',
//     'EHfsytsnhf?8555&I&2C9555SR']);

// starEnigma(['1',
//     '@Cantonica:3000!D!->4000NM']);
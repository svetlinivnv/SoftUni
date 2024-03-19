function rageQuit(input) {
    const pattern = /\D+[0-9]+/g;
    let result = '';
    const matches = input[0].match(pattern);
    matches.forEach(matchWithNr => {
        let match = matchWithNr.match(/[^0-9]+/)[0];
        let xTimes = +matchWithNr.match(/[0-9]+/)[0];
        result += match.toUpperCase().repeat(xTimes);
    });
    const uniqueSymbols = new Set(result.split(''));
    console.log(`Unique symbols used: ${uniqueSymbols.size}\n${result}`);
}

// rageQuit(['a3']);
rageQuit(['aSd2&5s@1'])
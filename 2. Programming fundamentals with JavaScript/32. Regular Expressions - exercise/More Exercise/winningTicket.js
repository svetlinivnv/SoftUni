function winningTicket(input) {
    const winnerRegex = /@{6,}|#{6,}|\${6,}|\^{6,}/;
    let ticketPool = input.split(/[, ]+/g);

    for (let ticket of ticketPool) {
        if (ticket.length === 20) {
            let leftSide = ticket.substring(0, 10);
            let rightSide = ticket.substring(10, 21);
            if (leftSide.match(winnerRegex) && rightSide.match(winnerRegex) && leftSide.match(winnerRegex)[0][1] === rightSide.match(winnerRegex)[0][1]) {
                let matchSymbol = leftSide.match(winnerRegex)[0][0];
                let shorterSide = Math.min(leftSide.match(winnerRegex)[0].length, rightSide.match(winnerRegex)[0].length);
                console.log(`ticket "${ticket}" - ${shorterSide}${matchSymbol}${shorterSide === 10 ? ' Jackpot!' : ''}`);
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else console.log('invalid ticket');
    }
}

// winningTicket('Cash$$$$$$Ca$$$$$$sh');
// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey');
// winningTicket('validticketnomatch:(');
// winningTicket('Cash$$$$$$Caaaaa#ash');
winningTicket('C$$$$$$$$$Ca$$$$$$sh');
function cardGame(input) {

    let playerWithDeck = {};
    let cardsMapper = {
        p: {
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14,
        },
        t: {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1,
        }
    }

    input.forEach(line => {
        let [player, deck] = line.split(': ');

        if (!playerWithDeck[player]) {
            playerWithDeck[player] = [new Set(deck.split(', '))];
        } else {
            deck.split(', ').forEach(card => {
                playerWithDeck[player].push(card);
            });
        }        
    });
    console.log(playerWithDeck);
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
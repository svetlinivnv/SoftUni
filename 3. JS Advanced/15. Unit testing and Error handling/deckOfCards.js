function deckOfCards(deckArr) {
    function generateCard(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitSymbols = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
    
        if (!validFaces.includes(face) || !suitSymbols[suit]) throw new Error('Error: Invalid card face or suit');
    
        return {
            face: face,
            suit: suit,
            toString: function () {
                return this.face + suitSymbols[this.suit];
            }
        }
    }

    let result = [];
    let hasIvalidCard = false;

    deckArr.forEach(data => {
        let face = data.substring(0, data.length - 1);
        let suit = data.substring(data.length - 1, );

        try {
            let card = generateCard(face, suit);
            result.push(generateCard(face, suit));
        } catch {
            console.log(`Invalid card: ${data}`);
            hasIvalidCard = true;
        }

    });

    if (!hasIvalidCard) {
        console.log(result.join(' '));
    }
}

deckOfCards(['AS', '10D', 'KH', '12C']);
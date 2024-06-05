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

try {
    const card = createCard('A', 'S');
    console.log(card.toString());
} catch (error) {
    console.log(error.message);
}
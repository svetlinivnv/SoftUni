function cardGame (input) {
    let hands = {};
    for (let line of input) {
        let [name, cards] = line.split(": ");
        if (hands.hasOwnProperty(name)){
            cards = cards.split(", ");
            for (let card of cards) {
                hands[name].push(card);
            }
        } else {
            cards = cards.split(", ");
            hands[name] = cards;
        }
    }
    for (let person in hands) {
        let set = new Set(hands[person]);
        let sett = Array.from(set);
        let sum = 0;
        for (let i = 0; i < sett.length; i++) {
            let size = sett[i].length;
            let p;
            let t;
            if (size == 2) {
                [p, t] = sett[i].split("");
            } else {
                p = sett[i].substring(0, 2);
                t = sett[i].substring(2);
            }
            switch(p) {
                case "2": p = 2; break;
                case "3": p = 3; break;
                case "4": p = 4; break;
                case "5": p = 5; break;
                case "6": p = 6; break;
                case "7": p = 7; break;
                case "8": p = 8; break;
                case "9": p = 9; break;
                case "10": p = 10; break;
                case "J": p = 11; break;
                case "Q": p = 12; break;
                case "K": p = 13; break;
                case "A": p = 14; break;
            }
            switch(t) {
                case "S": t = 4; break;
                case "H": t = 3; break;
                case "D": t = 2; break;
                case "C": t = 1; break;
            }
            sum += p * t;
        }
        console.log(`${person}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
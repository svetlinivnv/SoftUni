function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(ribbonColor, ribbonLength, color, gasWeight, text) {
            super(ribbonColor, ribbonLength, color, gasWeight);
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    };
}

let classes = solution();

let testBalloon = new classes.Balloon("yellow", 20.5);

let testPartyBalloon = new classes.PartyBalloon(
    "yellow",
    20.5,

    "red",
    10.25
);

let ribbon = testPartyBalloon.ribbon;

console.log(testBalloon);

console.log(testPartyBalloon);

console.log(ribbon);

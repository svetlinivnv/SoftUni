function oscars(input) {

    let actor = input[0];
    let points = Number(input[1]);

    for (let i = 3; i <= input.length - 1 ; i+=2) {
        let raterNameLength = Number(input[i].length);
        let raterPoints = Number(input[i+1]);
        points += (raterNameLength * raterPoints) / 2;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }

    console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);
}

oscars(["Sandra Bullock", "340", "6", 
"Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
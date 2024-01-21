function godzillaVsKong(input) {

let budget = Number(input[0]);
let actorCount = Number(input[1]);
let costumePerActor = Number(input[2]);

let costumesPrice = actorCount * costumePerActor;
let decorPrice = 0.1 * budget;

if (actorCount > 150) {
    costumesPrice *= 0.9; 
}

let totalPrice = costumesPrice + decorPrice;

if (totalPrice > budget) {
    console.log('Not enough money!')
    console.log (`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
} else {
    console.log('Action!');
    console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
}

}

godzillaVsKong(["9587.88", "222", "55.68"]);
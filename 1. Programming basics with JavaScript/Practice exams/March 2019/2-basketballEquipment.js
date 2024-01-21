function basketballEquipment(input) {

let yearTax = Number(input[0]);
let sneakersPrice = 0.6 * yearTax;
let outfitPrice = 0.8 * sneakersPrice;
let ballPrice = (1/4) * outfitPrice;
let accessoriesPrice = (1/5) * ballPrice;

let totalCost = yearTax + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

console.log(totalCost.toFixed(2));

}

basketballEquipment(['320']);
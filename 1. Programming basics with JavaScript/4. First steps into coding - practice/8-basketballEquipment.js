function basketballEquipment(input) {

    let annualTax = Number(input[0]);

    let sneakersPrice = annualTax - (annualTax * 0.4);
    let outfitPrice = sneakersPrice - (sneakersPrice * 0.2);
    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;

    let totalExpenses = annualTax + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalExpenses);
}

basketballEquipment(["365"]);
function repainting(input) {

    let nylonPrice = 1.5;
    let paintPrice = 14.5;
    let thinnerPrice = 5;

    let totalNylonPrice = (Number(input[0]) + 2) * nylonPrice;
    let totalPaintPrice = (Number(input[1]) + (Number(input[1]) * 0.1)) * paintPrice;
    let totalThinnerPrice = Number(input[2]) * thinnerPrice;

    let totalMaterialsAmount = totalNylonPrice + totalPaintPrice + totalThinnerPrice + 0.40;
    let totalWorkSalary = Number(input[3]) * (totalMaterialsAmount * 0.3);
    
    let totalAmount = totalMaterialsAmount + totalWorkSalary;

    console.log(totalAmount);

}

repainting(["10", "11", "4", "8"]);
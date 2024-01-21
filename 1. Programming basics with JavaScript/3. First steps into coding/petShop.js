function petShop(input) {

    let dogPackagesCount = Number(input[0]);
    let catPackagesCount = Number(input[1]);
    let totalSum = dogPackagesCount * 2.5 + catPackagesCount * 4;

    console.log(`${totalSum} lv.`);
}

petShop(["5", "4"]);
function suppliesForSchool(input) {


    let packageOfPens = Number(input[0]);
    let packageOfMarkers = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let totalAmount = packageOfPens * 5.8 + packageOfMarkers * 7.2 + boardCleaner * 1.2;
    let finalAmount = totalAmount - (totalAmount * discountPercent);

    console.log(finalAmount);
}

suppliesForSchool(["2", "3", "4", "25"]);
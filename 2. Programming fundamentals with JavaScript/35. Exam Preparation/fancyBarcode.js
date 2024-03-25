function fancyBarcode(input) {
    input.shift();
    const pattern = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/;
    const digitsPattern = /[0-9]/g;

    for (let barcode of input) {
        if (pattern.test(barcode)) {
            let productGroup;
            let digits = barcode.match(digitsPattern);
            if (digits !== null) {
                productGroup = digits.join("");
            } else productGroup = "00";
            console.log(`Product group: ${productGroup}`);
        } else console.log("Invalid barcode");
    }
}

// fancyBarcode((["3",
//             "@#FreshFisH@#",
//             "@###Brea0D@###",
//             "@##Che4s6E@##"]));

fancyBarcode([
            "6",
            "@###Val1d1teM@###",
            "@#ValidIteM@#",
            "##InvaliDiteM##",
            "@InvalidIteM@",
            "@#Invalid_IteM@#",
            "@#ValiditeM@#"]);

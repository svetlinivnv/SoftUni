function building(input) {

    let x = Number(input[0])
    let y = Number(input[1]);

    for (a = x; a > 0; a--) {

        let row = "";
        for (let b = 0; b < y; b++) {
            if (a === x) {
                row += `L${a}${b} `;
            } else if (a % 2 === 0) {
                row += `O${a}${b} `;
            } else {
                row += `A${a}${b} `;
            }
        }
        console.log(row);

    }
}

building(["6", "4"]);
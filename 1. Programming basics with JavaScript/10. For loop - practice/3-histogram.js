function histogram(input) {

    let numbersCount = Number(input[0])
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 1; i <= numbersCount; i++) {
        let number = Number(input[i]);

        if (number < 200) {
            p1++;
        } else if (number < 400) {
            p2++;
        } else if (number < 600) {
            p3++;
        } else if (number < 800) {
            p4++;
        } else {
            p5++;
        }
    }

        let p1percent = (p1 / numbersCount) * 100;
        let p2percent = (p2 / numbersCount) * 100;
        let p3percent = (p3 / numbersCount) * 100;
        let p4percent = (p4 / numbersCount) * 100;
        let p5percent = (p5 / numbersCount) * 100;

        console.log(`${p1percent.toFixed(2)}%\n${p2percent.toFixed(2)}%\n${p3percent.toFixed(2)}%\n${p4percent.toFixed(2)}%\n${p5percent.toFixed(2)}%`);

}

histogram(["3", "1", "2", "999"]);
function figuresArea(input) {

    let figure = input[0];
    let a = Number(input[1]);
    let area = 0;

    if (figure === 'square') {
        area = a * a; 
        console.log(area.toFixed(3));
    }
    else if (figure === 'rectangle') {
        let b = Number(input[2]);
        area = a * b;
        console.log(area.toFixed(3));
    }
    else if (figure === 'circle') {
        area = a * a * Math.PI;
        console.log(area.toFixed(3));
    }
    else if (figure === 'triangle') {
        b = Number(input[2]);
        area = a * b / 2;
        console.log(area.toFixed(3));
    }

}

figuresArea(["triangle", "4.5", "20"]);
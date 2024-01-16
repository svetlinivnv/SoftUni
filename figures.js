function figures(input) {

    let figure = input[0];
    
    if (figure === "square"){
        let faceSquared = Number(input[1] * Number(input[1]));
        console.log(faceSquared.toFixed(3));
    } else if (figure === "rectangle") {
        let faceRectangle = Number(input[1] * Number(input[2]));
        console.log(`Face of rectangle is ${faceRectangle.toFixed(3)}`);
    } else if (figure === "circle") {
        let faceCircle = Number(input[1]) * Number(input[1]) * Math.PI;
        console.log(faceCircle.toFixed(3));
    } else if (figure === "triangle") {
        let faceTriangle = (Number(input[1]) * Number(input[2])) / 2;
        console.log(`Face of triangle is ${faceTriangle.toFixed(3)}`);
    }
}

figures(["rectangle", "7", "2.5"]);
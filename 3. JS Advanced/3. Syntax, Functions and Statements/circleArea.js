function circleArea(input) {
    let inputType = typeof(input);
    let circleArea;

    if (inputType === 'number') {
        circleArea = Math.PI * Math.pow(input, 2);
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea('name');
function calculateDistance(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    console.log(distance);

}

calculateDistance(2.34, 15.66, -13.55, -2.9985)
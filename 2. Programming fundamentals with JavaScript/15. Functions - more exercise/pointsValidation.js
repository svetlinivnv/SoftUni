function pointsValidation(array) {
    let firstPoint = array.slice(0, 2);
    let secondPoint = array.slice(2);
    validateDistance(firstPoint, secondPoint);

    function isInteger(number) {
        return Number.isInteger(number);
    }

    function calcDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    function validateDistance(point1, point2) {
        let distanceToOrigin1 = calcDistance(0, 0, firstPoint[0], firstPoint[1]);
        let distanceToOrigin2 = calcDistance(0, 0, secondPoint[0], secondPoint[1]);
        let distanceBetweenFirstSecond = calcDistance(firstPoint[0], firstPoint[1], secondPoint[0], secondPoint[1]);

        let isValid1 = isInteger(distanceToOrigin1)
        let isValid2 = isInteger(distanceToOrigin2)
        let isValid3 = isInteger(distanceBetweenFirstSecond);

        console.log(`{${firstPoint[0]}, ${firstPoint[1]}} to {0, 0} is ${isValid1 ? 'valid' : 'invalid'}`);
        console.log(`{${secondPoint[0]}, ${secondPoint[1]}} to {0, 0} is ${isValid2 ? 'valid' : 'invalid'}`);
        console.log(`{${firstPoint[0]}, ${firstPoint[1]}} to {${secondPoint[0]}, ${secondPoint[1]}} is ${isValid3 ? 'valid' : 'invalid'}`);

    }
}

pointsValidation([2, 1, 1, 1]);
class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    static distance (point1, point2) {
        const distance = Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
        return distance;
    }
}

let point1 = new Point(5, 5);
let point2 = new Point(9, 8);

let distance = Point.distance(point1, point2);
console.log(distance);
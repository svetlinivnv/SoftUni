function equalNeighbors(input) {

    let rowsCount = input.length;
    let neighbours = 0;

    for (let row = 0; row < rowsCount; row++) {
        for (let position = 0; position < input[row].length; position++) {
            let currentElement = input[row][position];
            let nextElement = input[row][position + 1];

            if (row + 1 < input.length) {
                let nextRowElement = input[row + 1][position];
                if (currentElement === nextRowElement) {
                    neighbours++;
                }
            }
            
            if (currentElement === nextElement) {
                neighbours++;
            }

        }
    }
    return neighbours;
}

console.log(equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));

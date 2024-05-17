function pieceOfPie(arr, start, end) {
    let result = [];
    let hasStarted = false;

    arr.forEach(element => {
        if (element === start) {
            hasStarted = true;
        }

        if (hasStarted) {
            result.push(element);
        }
        
        if (element === end) {
            hasStarted = false;
        }
    });

    return result;
}

console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
function sumTable() {
    let rows = document.querySelectorAll('table tr');

    let index = 0;
    let sum = 0;
    for (let row of rows) {
        if (index > 0) {
            let inputs = row.querySelectorAll('td');
            let secondN = 0;
            for (number of inputs) {
                if (secondN > 0) {
                    sum += Number(number.textContent);
                }
                secondN++;
            }
        }
        index ++;
    }
    document.getElementById('sum').textContent = sum;
}
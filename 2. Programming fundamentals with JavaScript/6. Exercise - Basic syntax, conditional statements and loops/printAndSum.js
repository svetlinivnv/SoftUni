function printAndSum(start, end) {

    let output = '';
    let sum = 0;

    for (i = start; i <= end; i++) {
        output += i + ' ';
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

const start = 50;
const end = 60;
printAndSum(start, end);
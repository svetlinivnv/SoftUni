function numbersDivisibleBy9(input){
    
    let min = Number(input[0]);
    let max = Number(input[1]);
    let sum = 0;

        for (let number = min; number <= max; number++) {
            if (number % 9 === 0) {
                sum += number;
            }
        }

        console.log(`The sum: ${sum}`);

        for (let number = min; number <= max; number ++) {
            if (number % 9 === 0){
                console.log(number);
            }
        }

}

numbersDivisibleBy9(["100", "200"]);
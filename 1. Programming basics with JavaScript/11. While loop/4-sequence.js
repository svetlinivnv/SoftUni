function sequence(input) {

    let number = Number(input[0]);
    let counter = 1;

    while (counter <= number) {

        console.log(counter);
        counter += counter + 1;

    }
}

sequence(["31"]);
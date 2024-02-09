function distinctArray(input) {

    for (let i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
            let lastIndex = input.lastIndexOf(input[i]);
            input.splice(lastIndex, 1);
            i--;
        }
    }
    console.log(input.join(' '));
}

// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
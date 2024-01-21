function evenPowersOf2(input) {

    let power = Number(input[0]);

    for (let i = 0; i <= power; i++) {
        
        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        } 

    }

}

evenPowersOf2('4');
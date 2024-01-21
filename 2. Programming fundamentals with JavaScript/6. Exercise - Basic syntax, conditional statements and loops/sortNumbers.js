function sortNumbers(one,two,three) {

    let output = '';

    let array = [one,two,three];

    array.sort(function(a,b){
        return b - a;
    });

    for (let i = 0; i < array.length; i++){

        console.log(array[i]);

    }
}

sortNumbers(2,1,3);
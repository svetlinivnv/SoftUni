function maxNumbers(array) {

    let result = [];

    while(array.length !== 0) {
        let [current, biggest] = [array.shift(), Math.max(...array)]
        if(current > biggest) result.push(current);
   }

   console.log(result.join(' '));

}

maxNumbers([1, 4, 3, 2]);
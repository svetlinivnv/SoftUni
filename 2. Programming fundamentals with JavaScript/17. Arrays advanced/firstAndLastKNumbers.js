function firstAndLastKNumbers(array) {

    const k = array.shift();
    let first = array.slice(0, k);
    let last = array.slice(-k);

    console.log(first.join(' '));
    console.log(last.join(' '));
    
}

// firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
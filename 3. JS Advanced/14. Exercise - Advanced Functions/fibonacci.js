function getFibonator() {
    
    let currentPrev = [1, 0];

    return () => {
        let next = currentPrev[0] + currentPrev[1];
        currentPrev[0] = currentPrev[1];
        currentPrev[1] = next;
        return currentPrev[1];
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
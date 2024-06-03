function solution (number) {
    result = 0;
    return function (number2) {
        return result = number + number2;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
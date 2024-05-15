function cookingByNumbers(number, arg1, arg2, arg3, arg4, arg5) {

    let operationsArr = [];
    operationsArr.push(arg1);
    operationsArr.push(arg2);
    operationsArr.push(arg3);
    operationsArr.push(arg4);
    operationsArr.push(arg5);
    for (operation of operationsArr) {
        switch (operation) {
            case 'chop': number = number / 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number = number - (number * 0.2); break;
        }
        console.log(number);
    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
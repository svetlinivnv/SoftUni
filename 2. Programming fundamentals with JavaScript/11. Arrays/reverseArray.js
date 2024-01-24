function reverseArray(number, array) {

    array = array.splice(0,number).reverse();
    console.log(array.join(' '));

}

reverseArray(3, [10, 20, 30, 40, 50]);
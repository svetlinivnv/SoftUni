function reverseString(string) {

    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {

        reversed += string[i];

    }

    console.log(reversed);

}

reverseString('Hello');
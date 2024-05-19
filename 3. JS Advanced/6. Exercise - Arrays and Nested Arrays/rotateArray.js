function rotateArray(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        let lastNr = array.pop();
        array.unshift(lastNr);
    }
    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
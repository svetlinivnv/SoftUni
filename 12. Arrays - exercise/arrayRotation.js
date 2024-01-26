function rotateArray(arr, rotations) {

    const actualRotations = rotations % arr.length;
    const rotatedArray = [...arr.slice(actualRotations), ...arr.slice(0, actualRotations)];
    console.log(rotatedArray.join(' '));

}

rotateArray([2, 4, 15, 31], 5);
// rotateArray([51, 47, 32, 61, 21], 2);
// rotateArray([32, 21, 61, 1], 4);
function sequences(input) {

    let sortedArrays = [];
    let uniqueArrays = [];
    const arrayOfArrays = input.map(str => JSON.parse(str));
    console.log(input);
    console.log(arrayOfArrays);

    for (let current of arrayOfArrays) {
        let currentSorted = [...current].sort((a, b) => b - a);
        sortedArrays.push(currentSorted);
    }

    for (let i = 0; i < sortedArrays.length; i++) {
        let isDuplicate = false;
        for (let j = i + 1; j < sortedArrays.length; j++) {
            
            if (JSON.stringify(sortedArrays[i]) === JSON.stringify(sortedArrays[j])) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArrays.push(sortedArrays[i]);
        }
    }
    let sortedUniqueArrays = uniqueArrays.sort((a, b) => a.length - b.length);
    for (let current of sortedUniqueArrays) {
        // console.log(`[${current.join(', ')}]`);
    }
}


sequences(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

// sequences(["[7.14, 7.180, 7.339, 80.099]",

// "[7.339, 80.0990, 7.140000, 7.18]",

// "[7.339, 7.180, 7.14, 80.099]",
// "[7.33, 7.180, 7.14, 80.099]"])
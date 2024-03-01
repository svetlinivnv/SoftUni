function sequences(input) {

    let sortedArrays = [];
    let uniqueArrays = [];
    const arrayOfArrays = input.map(str => JSON.parse(str));

    for (let current of arrayOfArrays) {
        let currentSorted = current.sort((a, b) => b - a);
        sortedArrays.push(currentSorted);
    }

    for (let i = 0; i < sortedArrays.length; i++) {
        let stringified = JSON.stringify(sortedArrays[i]);

        if (!uniqueArrays.includes(stringified)) {
            uniqueArrays.push(stringified);
        }
    }

    let sortedUniqueArrays = uniqueArrays.map((a) => JSON.parse(a)).sort((a, b) => a.length - b.length);
    for (let current of sortedUniqueArrays) {
        console.log(`[${current.join(', ')}]`);
    }
}


sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.33, 7.180, 7.14, 80.99]",
    "[7.339, 7.180, 7.14, 80.099]",
])

// sequences(
//     ["[-3, -2, -1, 0, 1, 2, 3, 4]",
//         "[10, 1, -17, 0, 2, 13]",
//         "[4, -3, 3, -2, 2, -1, 1, 0]"]
// );
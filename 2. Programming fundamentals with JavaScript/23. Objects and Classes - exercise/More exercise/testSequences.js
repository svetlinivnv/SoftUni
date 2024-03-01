function sequences(input) {
    let sortedArrays = [];
    let uniqueArrays = new Set();

    const arrayOfArrays = input.map(str => JSON.parse(str.replace(/'/g, '"')));

    for (let current of arrayOfArrays) {
        let currentSorted = current.slice().sort((a, b) => b - a);
        sortedArrays.push({ original: current, sorted: currentSorted });
    }

    for (let current of sortedArrays) {
        uniqueArrays.add(JSON.stringify(current.sorted));
    }

    let sortedUniqueArrays = [...uniqueArrays].map(str => JSON.parse(str)).sort((a, b) => a.length - b.length);

    for (let current of sortedUniqueArrays) {
        console.log(`[${current.join(', ')}]`);
    }
}

sequences(["[7.14, 7.180, 7.339, 80.099]",

"[7.339, 80.0990, 7.140000, 7.18]",

"[7.33, 7.180, 7.14, 80.99]",
"[7.339, 7.180, 7.14, 80.099]",
])
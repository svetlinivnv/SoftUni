function argumentInfo(...array) {

    const typeWithOccurences = {};


    for (const argument of array) {
        const argType = typeof argument;
        console.log(`${argType}: ${argument}`);

        if (!typeWithOccurences[argType]) {
            typeWithOccurences[argType] = 1;
        } else {
            typeWithOccurences[argType]++;
        }
    }

    const orderedList = Object.entries(typeWithOccurences).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of orderedList) {
        console.log(`${key} = ${value}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
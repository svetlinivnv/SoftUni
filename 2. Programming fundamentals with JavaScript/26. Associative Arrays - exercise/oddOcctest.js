function oddOccurrences(input) {
    let wordsArr = input.split(' ');
    let filtered = [];

    for (let i = 0; i < wordsArr.length; i++) {
        let currWord = wordsArr[i];

        // Convert both the current word and the elements in the filtered array to lowercase for case-insensitive comparison
        let isDuplicate = filtered.some(word => word.toLowerCase() === currWord.toLowerCase());

        if (!isDuplicate) {
            filtered.push(currWord);
        }
    }

    console.log(filtered);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
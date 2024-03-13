function serializeString(input) {
    let string = input[0];
    let serialized = {};
    
    for (i = 0; i < string.length; i++) {
        let currChar = string[i];
        if (!serialized.hasOwnProperty(currChar)) {
            serialized[currChar] = [];
            serialized[currChar].push(i);
        } else {
            serialized[currChar].push(i);
        }
    }
    let output = Object.entries(serialized);
    output.forEach(element => {
        let key = element[0];
        let indexesArr = element[1];
        let joinedIndexes = [];
        indexesArr.forEach(index => {
            joinedIndexes.push(index);            
        });

        console.log(`${key}:${joinedIndexes.join('/')}`);   
    });
}

// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);
function makeDictionary(input) {

    let dictionary = [];

    for (let current of input) {
        let wordObj = JSON.parse(current);
        let key = Object.keys(wordObj)[0];
        let value = wordObj[key];

        let termIndex = dictionary.findIndex(item => item.term === key);
        if (termIndex !== -1) {
            dictionary[termIndex].description = value;
        } else {
            let result = { term: key, description: value };
            dictionary.push(result);
        }
    }
    let sortedDictionary = dictionary.sort((a, b) => a.term.localeCompare(b.term));

    for (let current of sortedDictionary) {
        console.log(`Term: ${current.term} => Definition: ${current.description}`)
    }
}

makeDictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

]);
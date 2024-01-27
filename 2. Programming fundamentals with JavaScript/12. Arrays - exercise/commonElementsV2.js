function commonElements(array1, array2) {

    for (let currElement of array1) {
        
        if (array2.includes(currElement)) {
            console.log(currElement);
        }

    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
//commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
function commonElements(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        let currentElement1 = array1[i];

        for (let i = 0; i < array2.length; i++){
            let currentElement2 = array2[i];
            if (currentElement1 === currentElement2) {
                console.log(currentElement1);
            }
        }

    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
//commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
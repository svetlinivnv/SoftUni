function printElement(array) {

    const step = Number(array.pop());
    let collect = [];

    for (let i = 0; i < array.length; i += step) {
        let currElement = array[i];
        collect.push(currElement)
    }
    console.log(collect.join(' '));
}

printElement(['5', '20', '31', '4', '20', '2']);
// printElement(['dsa', 'asd', 'test', 'test', '2']);
// printElement(['1', '2', '3', '4', '5', '6']);
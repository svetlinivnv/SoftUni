function addAndRemove(array) {

    let collect = [];
    let number = 1;

    for (let command of array) {
        switch (command) {
            case 'add':
                collect.push(number)
                number++;
                break;
            case 'remove':
                collect.pop();
                number++;
                break;
        }
    }
    collect.length > 0 ? console.log(collect.join(' ')) : console.log('Empty');
}

addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);
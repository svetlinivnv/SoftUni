function shoppingList(input) {

    let list = input[0].split('!');
    input.shift()

    for (let i = 0; i < input.length; i++) {
        let [command, ...arr] = input[i].split(' ');

        switch (command) {
            case 'Urgent':
                if (!list.includes(arr[0])) {
                    list.unshift(arr[0]);
                }
                break;
            case 'Unnecessary':
                if (list.includes(arr[0])) {
                    list.splice(list.indexOf(arr[0]), 1);
                }
                break;
            case 'Correct':
                if (list.includes(arr[0])) {
                    list.splice(list.indexOf(arr[0]), 1, arr[1]);
                }
                break;
            case 'Rearrange':
                if (list.includes(arr[0])) {
                    list.splice(list.indexOf(arr[0]), 1)
                    list.push(arr[0]);
                }
                break;
        }
    }
    console.log(list.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"]));

shoppingList(["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Grapes",

    "Correct Pepper Onion",

    "Rearrange Grapes",

    "Correct Tomatoes Potatoes",

    "Go Shopping!"]);
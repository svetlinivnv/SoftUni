function listProcessor(input) {
    let collection = [];

    const commands = {
        add: function (string) {
            collection.push(string);
        },

        remove: function (string) {
            collection = collection.filter(element => element !== string);
        },

        print: function () {
            console.log(collection.join(','));
        }
    }

    input.forEach(pair => {
        let [command, string] = pair.split(' ');
        commands[command] (string);       
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
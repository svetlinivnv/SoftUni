function cars(input) {
    let list = {};

    let commands = {
        create: function (name) {
            Object.create(list[name] = []);
        },
        inherit: function (name, parentName) {
            Object.create(list[name] = {});
            Object.setPrototypeOf(list[name], list[parentName]);
        },
        set: function (name, key, value) {
            list[name][key] = value;
        },
        print: function (name) {
            let outputArr = [];
            for (const key in list[name]) {
                outputArr.push(`${key}:${list[name][key]}`)
            }
            console.log(outputArr.join(','));
        }
    }

    for (const line of input) {
        let lineSplit = line.split(' ');
        let command = lineSplit[0];
        let name = lineSplit[1];

        if (command === 'create' && lineSplit.length === 2) {
            commands.create(name);
        } else if (lineSplit[2] === 'inherit') {
            let parentName = lineSplit[3];
            commands.inherit(name, parentName);
        } else if (command === 'set') {
            let key = lineSplit[2];
            let value = lineSplit[3];
            commands.set(name, key, value);
        } else {
            commands.print(name);
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipeLibrary = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const commands = {
        restock: function (microElement, quantity) {
            stock[microElement] += Number(quantity);
            return `Success`;
        },

        prepare: function (recipe, quantity) {
            const meal = recipeLibrary[recipe];
            let isEnough = true;

            for (let ingredient in meal) {
                if (stock[ingredient] < meal[ingredient] * quantity) {
                    isEnough = false;
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            if (isEnough) {
                for (let ingredient in meal) {
                    stock[ingredient] -= meal[ingredient] * quantity;
                }
                return 'Success';
            }
        },

        report: () => `protein=${stock['protein']} carbohydrate=${stock['carbohydrate']} fat=${stock['fat']} flavour=${stock['flavour']}`
    }

    return function (input) {
        let [command, item, quantity] = input.split(' ');

        if (command === 'restock') {
            return commands.restock(item, quantity);
        } else if (command === 'prepare') {
            return commands.prepare(item, quantity)
        } else if (command === 'report') {
            return commands.report();
        }
    }
}

let manager = solution();

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

// manager('restock flavour 50')
// manager('prepare lemonade 4')
// manager('restock carbohydrate 10')
// manager('restock flavour 10')
// manager('prepare apple 1')
// manager('restock fat 10')
// manager('prepare burger 1')
// manager('report')




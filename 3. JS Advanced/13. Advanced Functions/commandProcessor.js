function solution() {
    let string = '';
    return operations = {
        append: function (input) {
            string += input;
        },

        removeStart: function (count) {
            string = string.slice(count);
        },

        removeEnd: function (count) {
            string = string.substring(0, string.length - count);
        },

        print: function () {
            console.log(string);
        }
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();
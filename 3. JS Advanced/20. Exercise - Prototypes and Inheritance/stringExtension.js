(function () {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        }

        let lastSpace = this.toString().substring(0, n - 2).lastIndexOf(" ");

        if (lastSpace != -1) {
            return `${this.toString().substring(0, lastSpace)}...`;
        } else {
            return `${this.toString().substring(0, n - 3)}...`;
        }
    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})()

let nekafString = 'te ttt';
console.log('ensureStart: ' + nekafString.ensureStart('test'));
console.log('ensureEnd: ' + nekafString.ensureEnd('string'));
console.log('isEmpty: ' + nekafString.isEmpty('string'));
console.log('truncate: ' + nekafString.truncate(4));

let str = 'my string'
console.log(str.truncate(16));
console.log(str.truncate(14));
console.log(str.truncate(8));
console.log(str.truncate(4));
console.log(str.truncate(2));

str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}', 'dog');
console.log(str);
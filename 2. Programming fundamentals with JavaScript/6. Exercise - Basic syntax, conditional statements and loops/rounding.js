function rounding(number, precision) {

    if (precision <= 15) {
        let setPrecision = precision;
        console.log(parseFloat(number.toFixed(setPrecision)));
    } else {
        console.log(parseFloat(number.toFixed(15)));
    }
}

const number = 3.1415926535897932384626433832795;
const precision = 2;
// const number = 10.5;
// const precision = 3;

rounding(number, precision);
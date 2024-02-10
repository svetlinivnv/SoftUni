function loadingBar(percent) {

    let barArray = ['['];
    let currSymbol = percent / 10;

    for (i = 0; i < 10; i++) {
        if (currSymbol > 0) {
            currSymbol --;
            barArray.push('%');
        } else {
            barArray.push('.');
        }
    }
    barArray.push(']')

    if (percent != 100) {
    console.log(`${percent}%`,barArray.join(''),'\nStill loading...');
    } else {
        console.log(`${percent}% Complete!\n${barArray.join('')}`);
    }

}

loadingBar(80);
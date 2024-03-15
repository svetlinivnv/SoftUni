function matchDates(input) {
    const pattern = /[0-9]{2,2}([.|\-|\/])[A-Z][a-z]{2,2}\1\b[0-9]{4,4}\b/g;
    const validDates = [];
    let validDate;

    while (validDate = pattern.exec(input)) {
        validDates.push(validDate[0]);
    }
    validDates.forEach(date => {
        let separator = '';
        if (date.includes('/')) {
            separator = '/';
        } else if (date.includes('.')) {
            separator = '.';
        } else if (date.includes('-')) {
            separator = '-';
        }
        let [day, month, year] = date.split(`${separator}`);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    });
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
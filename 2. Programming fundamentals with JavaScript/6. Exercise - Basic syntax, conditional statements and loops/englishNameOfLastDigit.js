function engName(number) {

    let lastDigit = number % 10;

    const digitMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    console.log(`${digitMap[(lastDigit)]}`);

}

engName(1643);
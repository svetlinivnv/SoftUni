function firstLastElementSum(number) {

    let dayAsNumber = number;
    let dayAsWord = '';

    switch (dayAsNumber) {
        case 1:
            dayAsWord = "Monday"; break;
        case 2:
            dayAsWord = "Tuesday"; break;
        case 3:
            dayAsWord = "Wednesday"; break;
        case 4:
            dayAsWord = "Thursday"; break;
        case 5:
            dayAsWord = "Friday"; break;
        case 6:
            dayAsWord = "Saturday"; break;
        case 7:
            dayAsWord = "Sunday"; break;
        default:
            dayAsWord = "Invalid day!"; break;
    }

    console.log(dayAsWord);
}

firstLastElementSum(-3);